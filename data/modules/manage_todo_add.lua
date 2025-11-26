local nk = require("nakama")

local function manage_todo_add(context, payload)
    local json = nk.json_decode(payload)

    -- 첨부파일 간소화
    if #json.attach == 0 then
        json.attach = nil
    end

    -- 모든 작업자들의 다음 작업 공통수 생성하기
    local check_task_number = {}
    for i, worker in ipairs(json.workers) do
        check_task_number[i] = worker.id
    end
    table.insert(check_task_number, json.remote.creator_id)

    local indexes = { 0 }
    for i in ipairs(check_task_number) do
        local RemoteCounter = {
            {
                collection = 'server_todo',
                key = 'RemoteTodo_Counter',
                user_id = check_task_number[i],
            }
        }

        local status, counter = pcall(nk.storage_read, RemoteCounter)

        if status then
            for _, count in ipairs(counter) do
                table.sort(count.value.data)
                table.insert(indexes, count.value.data[#count.value.data])
            end
        end
    end

    table.sort(indexes)
    local task_number = indexes[#indexes] + 1
    json.id = string.format('RemoteTodo_%d', task_number)

    local function create_todo_and_update_remote_value(user_id, target_json)
        local RemoteCounter = {
            {
                collection = 'server_todo',
                key = 'RemoteTodo_Counter',
                user_id = user_id,
            }
        }

        local status, counter = pcall(nk.storage_read, RemoteCounter)

        if status then
            if #counter == 0 then
                local array = {}
                array[1] = task_number
                local new = {
                    {
                        collection = "server_todo",
                        key = 'RemoteTodo_Counter',
                        user_id = user_id,
                        value = { data = array },
                        permission_read = 2,
                        permission_write = 1
                    }
                }
                nk.storage_write(new)
            else
                for _, count in ipairs(counter) do
                    table.insert(count.value.data, task_number)
                    local modify = {
                        {
                            collection = "server_todo",
                            key = 'RemoteTodo_Counter',
                            user_id = user_id,
                            value = { data = count.value.data },
                            permission_read = 2,
                            permission_write = 1
                        }
                    }
                    nk.storage_write(modify)
                end
            end
        else
            local array = {}
            array[1] = task_number
            local new = {
                {
                    collection = "server_todo",
                    key = 'RemoteTodo_Counter',
                    user_id = user_id,
                    value = { data = array },
                    permission_read = 2,
                    permission_write = 1
                }
            }
            nk.storage_write(new)
        end

        local _object = {
            {
                collection = 'server_todo',
                key = target_json.id,
                user_id = user_id,
                value = target_json,
                permission_read = 2,
                permission_write = 1
            },
        }
        nk.storage_write(_object)
    end

    -- 매니저의 정보 저장
    create_todo_and_update_remote_value(json.remote.creator_id, json)

    -- 작업자들 정보 생성
    local workers_json = nk.json_decode(payload)
    if #workers_json.attach == 0 then
        workers_json.attach = nil
    end
    workers_json.workers = nil
    workers_json.id = string.format('RemoteTodo_%d', task_number)
    for i in ipairs(json.workers) do
        create_todo_and_update_remote_value(json.workers[i].id, workers_json)
    end

    local react = {}
    react['value'] = task_number
    return nk.json_encode(react)
end

nk.register_rpc(manage_todo_add, "manage_todo_add_fn")

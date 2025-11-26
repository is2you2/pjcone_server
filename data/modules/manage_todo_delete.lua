local nk = require("nakama")

local function manage_todo_delete(context, payload)
    local json = nk.json_decode(payload)

    local function UpdateRemoteCount(user_id)
        local RemoteCounter = {
            {
                collection = 'server_todo',
                key = 'RemoteTodo_Counter',
                user_id = user_id,
            }
        }
        local status, counter = pcall(nk.storage_read, RemoteCounter)

        if status then
            local find_bar = string.find(json.id, '_')
            if find_bar == nil then
                find_bar = 0
            end
            for _, count in ipairs(counter) do
                for index, value in ipairs(count.value.data) do
                    if value == tonumber(string.sub(json.id, find_bar + 1)) then
                        table.remove(count.value.data, index)
                    end
                end
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
    end

    -- 관리자의 정보 업데이트
    UpdateRemoteCount(context.user_id)
    -- 작업자들 정보 삭제
    for i in ipairs(json.workers) do
        local object = {
            {
                collection = 'server_todo',
                key = json.id,
                user_id = json.workers[i].id,
            }
        }
        pcall(nk.storage_delete, object)
        UpdateRemoteCount(json.workers[i].id)
    end
end

nk.register_rpc(manage_todo_delete, "manage_todo_delete_fn")

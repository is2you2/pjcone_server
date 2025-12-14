local nk = require("nakama")

local function manage_todo_done(context, payload)
    local json = nk.json_decode(payload)

    local object_ids = {
        { collection = "server_todo", key = json.id, user_id = json.creator_id },
    }

    local status, todos = pcall(nk.storage_read, object_ids)

    if status then
        -- 작업자 완료 처리
        for _, todo in ipairs(todos) do
            for _, worker in ipairs(todo.value.workers) do
                if worker.id == json.user_id then
                    worker.timestamp = json.timestamp
                    worker.isDelete = json.isDelete
                    break
                end
            end
            local modify = {
                {
                    collection = "server_todo",
                    key = json.id,
                    user_id = json.creator_id,
                    value = todo.value,
                    permission_read = 2,
                    permission_write = 1
                }
            }
            nk.storage_write(modify)
        end
    end
end

nk.register_rpc(manage_todo_done, "manage_todo_done_fn")

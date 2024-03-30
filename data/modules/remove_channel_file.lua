local nk = require("nakama")

local function remove_channel_file(context, payload)
    local json = nk.json_decode(payload)
    local function remove_channel_files(user_id, collection, _cursor)
        local records, cursor = nk.storage_list(user_id, json.collection, 10, _cursor)

        local will_remove_id = {}
        for index, r in ipairs(records) do
            if json.key then
                local _index = string.find(r.key, json.key)
                if _index == 1 then
                    will_remove_id[index] = { collection = r.collection, key = r.key, user_id = r.user_id }
                end
            else
                will_remove_id[index] = { collection = r.collection, key = r.key, user_id = r.user_id }
            end
        end
        nk.storage_delete(will_remove_id)
        if cursor then
            remove_channel_files(user_id, collection, cursor)
        end
    end
    local target = context.user_id
    if json.is_creator then
        target = ''
    end
    remove_channel_files(target, json.collection)
end


nk.register_rpc(remove_channel_file, "remove_channel_file")

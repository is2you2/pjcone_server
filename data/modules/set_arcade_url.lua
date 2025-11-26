local nk = require("nakama")

local function set_arcade_url(context, payload)
    local json = nk.json_decode(payload)
    local arcade_url = {
        {
            collection = "arcade",
            key = 'url',
            user_id = nil,
            value = { data = json.data },
            permission_read = 2,
            permission_write = 1
        }
    }
    nk.storage_write(arcade_url)
end

nk.register_rpc(set_arcade_url, "set_arcade_url_fn")

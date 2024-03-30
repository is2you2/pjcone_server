local nk = require("nakama")

local function update_user_metadata(context, payload)
    local json = nk.json_decode(payload)
    nk.account_update_id(json.user_id, json.metadata)
end

nk.register_rpc(update_user_metadata, "update_user_metadata_fn")

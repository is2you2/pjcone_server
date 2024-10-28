local nk = require("nakama")

local function update_group_info(context, payload)
    local json = nk.json_decode(payload)

    nk.group_update(json.group_id, context.user_id, nil, nil, nil, nil, nil, json.open, nil, json.max_count);

    return nk.json_encode(users)
end

nk.register_rpc(update_group_info, "update_group_info_fn")

local nk = require("nakama")

local function update_group_size(context, payload)
    local json = nk.json_decode(payload)

    nk.group_update(json.group_id, context.user_id, nil, nil, nil, nil, nil, nil, nil, json.max_count);

    return nk.json_encode(users)
end

nk.register_rpc(update_group_size, "update_group_size_fn")

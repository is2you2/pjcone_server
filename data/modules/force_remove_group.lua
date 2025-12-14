local nk = require("nakama")

local function force_remove_group(context, payload)
    local json = nk.json_decode(payload)
    local channel_id = nk.channel_id_build('', json.group_id, 3)
    local content = { gupdate = 'force_remove' }
    nk.channel_message_send(channel_id, content, '', '', true)
    nk.group_delete(json.group_id)
end

nk.register_rpc(force_remove_group, "force_remove_group")

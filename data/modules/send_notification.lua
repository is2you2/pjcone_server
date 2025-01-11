local nk = require("nakama")

local function send_noti(context, payload)
    local json = nk.json_decode(payload)
    nk.notification_send(json.receiver_id, json.title, json.content, json.code, json.sender_id, json.persistent)
end

nk.register_rpc(send_noti, "send_noti_fn")

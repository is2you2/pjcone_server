local nk = require("nakama")

local function send_noti(context, payload)
    local json = nk.json_decode(payload)

    local noti = {}

    for i, v in ipairs(json.receiver_id) do
        noti[i] = {
            subject = json.title,
            content = json.content,
            sender_id = context.user_id,
            user_id = v,
            code = json.code,
            persistent = json.persistent
        }
    end

    nk.notifications_send(noti)
end

nk.register_rpc(send_noti, "send_noti_fn")

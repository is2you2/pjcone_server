local nk = require("nakama")

local function send_noti_all(context, payload)
  local json = nk.json_decode(payload)

  local subject = "send_noti_all"
  local code = 1
  local persistent = json.persistent
  json.persistent = nil

  nk.notification_send_all(subject, json, code, persistent)
end

nk.register_rpc(send_noti_all, "send_noti_all_fn")

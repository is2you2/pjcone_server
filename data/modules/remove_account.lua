local nk = require("nakama")

local function remove_account(context, payload)
  local json = nk.json_decode(payload)
  local subject = "Account withdrawn"
  local content = {}
  local code = 404
  local persistent = true
  nk.notification_send(json.user_id, subject, content, code, nil, persistent)
  nk.account_delete_id(json.user_id, true)
end

nk.register_rpc(remove_account, "remove_account_fn")

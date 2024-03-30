local nk = require("nakama")
local p = {}

local function match_init(context, params)
  local state = {}
  local tick_rate = 1
  local label = "QRShare"
  return state, tick_rate, label
end

local function match_join(context, dispatcher, tick, state, presences)
  for _, presence in ipairs(presences) do
    -- Presence format:
    -- {
    --   user_id = "user unique ID",
    --   session_id = "session ID of the user's current connection",
    --   username = "user's unique username",
    --   node = "name of the Nakama node the user is connected to"
    -- }
    p[presence.username] = presence
  end
  return state
end

local function match_join_attempt(context, dispatcher, tick, state, presence, metadata)
  return state, true
end

local function match_leave(context, dispatcher, tick, state, presences)
  for _, presence in ipairs(presences) do
    p[presence.username] = nil
  end
  return state
end

local function match_loop(context, dispatcher, tick, state, messages)
  for _, m in ipairs(messages) do
    local opcode = 12
    local presences = nil -- send to all.
    local sender = nil    -- used if a message should come from a specific user.

    local recv_data = nk.json_decode(m.data)
    presences = { p[recv_data[1].target] }

    dispatcher.broadcast_message(opcode, m.data, presences, sender)
  end

  return state
end

local function match_signal(context, dispatcher, tick, state, data)
  return state, "signal received: " .. data
end

local function match_terminate(context, dispatcher, tick, state, grace_seconds)
  return state
end

return {
  match_init = match_init,
  match_join_attempt = match_join_attempt,
  match_join = match_join,
  match_leave = match_leave,
  match_loop = match_loop,
  match_terminate = match_terminate,
  match_signal = match_signal
}

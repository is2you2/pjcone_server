local nk = require("nakama")


local function query_all_users(context, payload)
    local query = [[
  SELECT username
  FROM users
  ORDER BY create_time DESC
]]

    local parameters = {}
    local rows = nk.sql_query(query, parameters)

    local users = {}
    for i, row in ipairs(rows) do
        if row.username ~= "" then
            local username = { row.username }
            local get_user = nk.users_get_username(username)
            for _, u in ipairs(get_user) do
                users[i] = u
            end
        end
    end

    return nk.json_encode(users)
end

nk.register_rpc(query_all_users, "query_all_users")

local nk = require("nakama")


local function query_all_groups(context, payload)
    local query = [[
  SELECT id
  FROM groups
  ORDER BY create_time DESC
]]

    local parameters = {}
    local rows = nk.sql_query(query, parameters)

    local groups = {}
    for i, row in ipairs(rows) do
        local id = { row.id }
        local get_group = nk.groups_get_id(id)
        for _, u in ipairs(get_group) do
            local users = nk.group_users_list(row.id);
            u['users'] = users
            groups[i] = u
        end
    end

    return nk.json_encode(groups)
end

nk.register_rpc(query_all_groups, "query_all_groups")

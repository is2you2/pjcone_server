local nk = require("nakama")

local module = "qr_share_module"

local params = {}

local match_id = nk.match_create(module, params)

-- 이 정보를 스토리지에 게시하기
local user_id = nil

local new_objects = {
    { collection = "server_public", key = "QRShare", user_id = user_id, value = { id = match_id }, permission_read = 2,
        permission_write = 1 },
}

nk.storage_write(new_objects)

extends Node

signal ws_recv_data
signal webrtc_recv_data
signal file_ready

# iframe 창
var window

var ws_recv_func = JavaScriptBridge.create_callback(ws_recv)
var webrtc_recv_func = JavaScriptBridge.create_callback(webrtc_recv)
var toggle_bottom_menu_func = JavaScriptBridge.create_callback(toggle_bottom_menu)
var after_file_selected_func = JavaScriptBridge.create_callback(after_file_selected)
var is_web_env:= false

func _ready():
	if OS.has_feature('web'):
		window = JavaScriptBridge.get_interface('window')
		window.ws_recv = ws_recv_func
		window.webrtc_recv = webrtc_recv_func
		window.toggle_bottom_menu = toggle_bottom_menu_func
		window.after_file_selected = after_file_selected_func
		is_web_env = true

# 게임에 참가할 때 수집한 게임 정보 확인하기 (stringified json)
func get_reqInfo():
	if is_web_env and window.get_reqInfo:
		var regInfo:String = window.get_reqInfo()
		if regInfo:
			return JSON.parse_string(regInfo)
	return null

# 빠른 진입용 서버 정보 업데이트
func update_reqInfo(_str:String):
	if is_web_env and window.update_reqInfo:
		window.update_reqInfo(_str)

# 상단 알림 토스트 생성하기
func show_toast(_str:String):
	if is_web_env and window.show_toast:
		window.show_toast(_str)

# ArcadeWS 를 통해서 메시지를 수신받음 (Sample)
func ws_recv(args):
	var recv_str:String = args[0]
	emit_signal('ws_recv_data', recv_str)

# ArcadeWS 를 사용하여 메시지 발송하기
func ws_send(_str: String):
	if is_web_env and window.ws_send:
		window.ws_send(_str)

# WebRTC 동시 연동시 수신받는 메시지
func webrtc_recv(args):
	var recv_str:String = args[0]
	emit_signal('webrtc_recv_data', recv_str)

# ArcadeWS 를 사용하여 메시지 발송하기
func webrtc_send(_str: String):
	if is_web_env and window.webrtc_send:
		window.webrtc_send(_str)

# 앱에서 빠른 진입 QRCode 페이지 띄우기
func open_qrcode_modal():
	if is_web_env and window.open_modal:
		window.open_modal()

# 앱에서 빠른 진입 QRCode 모달 닫기
func close_qrcode_modal():
	if is_web_env and window.close_modal:
		window.close_modal()

# 현재 연결된 아케이드 WS PeerId 받기
func get_pid():
	if is_web_env and window.get_pid:
		return window.get_pid()
	return null

# 현재 연결된 아케이드 WS_pid 기반 사용자 색상 반환
func get_pid_color():
	if is_web_env and window.get_pid_color:
		return window.get_pid_color()
	return null

# 모바일 웹인지 환경을 검토함
func check_if_mobile():
	if is_web_env and window.check_mobile:
		return window.check_mobile()
	return null

# 사용자 내보내기
func kick_user(pid: String):
	if is_web_env and window.kick_user:
		window.kick_user(pid)

# 하단에 채팅 입력칸을 토글함, 강제 설정 가능
func toggle_chat_input(force_tog = null):
	if is_web_env and window.toggle_chat:
		window.toggle_chat(force_tog)

# 현재 앱에서 활성된 하단 메뉴 상태를 추적함
var current_bottom_menu = 'arcade'
# 앱에서 하단 탭을 눌러 다른 페이지로 이동시 이 함수로 문자열을 변경처리
func toggle_bottom_menu(args):
	var input_str = args[0]
	current_bottom_menu = input_str

# 파일 선택기 열기
func open_file_selector(path: String):
	if is_web_env and window.select_file:
		window.select_file(path)

# 아케이드 채팅 입력칸 포커싱
func focus_on_chat_input():
	if is_web_env and window.focus_chat_input:
		window.focus_chat_input()

# 로컬에 파일 준비가 완료되면 고도엔진 DB에서 저장된 파일 경로를 반환함
# user://args[0] 으로 파일 지목 가능
func after_file_selected(args):
	emit_signal('file_ready', args[0])

# 게임 종료하기
func quit_game():
	if is_web_env and window.quit_game:
		window.quit_game()

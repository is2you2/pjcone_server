extends Node3D

# MIT License
# Copyright (c) 2021 liss22
# 3d 화면 네비게이터
# anchor_h/anchor_v/camera 로 구성된 3D 개체 필요합니다.
# 각 변수에 객체를 등록 후
# three_finger_reset_info() 에 리셋 정보를 입력하여 사용합니다.

# 마우스 포인터들 관리
# indexes
var touches:Dictionary = {}
# center, dist
var tmp:Dictionary = {}
# 격차 조정
const SCALED_TRANSLATE:= 100

const CAMERA_FOV_MIN:= 10
const CAMERA_FOV_MAX:= 95
const CAMERA_FOV_ANCHOR:= 63

@onready var anchor_h: Node3D = self
@onready var anchor_v: Node3D = $vert
@onready var camera: Camera3D = $vert/Camera

# 마우스 우클릭 상태를 추적하는 변수
var is_right_click_dragging:= false
var last_mouse_position:= Vector2.ZERO

func _ready():
	await get_tree().create_timer(0).timeout
	three_finger_reset_info()

func _input(event: InputEvent) -> void:
	# 터치 시작과 종료
	if event is InputEventScreenTouch or event is InputEventMouseButton:
		var index = 0 if event is InputEventMouseButton else event.index
		if event.pressed: # 등록과 삭제
			touches[index] = event.position
		else:
			touches.erase(index)
			tmp.clear()
		if touches.size() > 2: # 기본값으로 복구
			reset_view_info()
		# 마우스 우클릭 시작
		if event is InputEventMouseButton:
			if event.button_index == 2:  # 우클릭 (button_index == 2)
				if event.pressed:
					is_right_click_dragging = true
					last_mouse_position = event.position  # 우클릭 드래그 시작 시 위치 저장
				else:
					is_right_click_dragging = false  # 우클릭 드래그 종료
	if event is InputEventScreenDrag or event is InputEventMouseMotion:
		var touches_length := touches.size()
		var index = 0 if event is InputEventMouseMotion else event.index
		if is_right_click_dragging:  # 우클릭 드래그 시 패닝 처리
			var current_mouse_position = event.position
			var delta = current_mouse_position - last_mouse_position
			# 패닝 처리: delta에 따라 카메라 이동
			var pan_x = -delta.x / SCALED_TRANSLATE * camera.fov / CAMERA_FOV_ANCHOR
			var pan_y = delta.y / SCALED_TRANSLATE * camera.fov / CAMERA_FOV_ANCHOR
			anchor_h.translate(Vector3(pan_x, pan_y, 0))
			# 마우스 위치 업데이트
			last_mouse_position = current_mouse_position
		elif touches_length == 1:  # 회전
			var last_info: Vector2 = touches[index]
			anchor_h.rotate_y(-deg_to_rad(event.position.x - last_info.x))
			anchor_v.rotate_x(-deg_to_rad(event.position.y - last_info.y))
			touches[index] = event.position
		elif touches_length == 2:  # 스케일, 패닝
			var last_other: Vector2 = touches[1 if index == 0 else 0]
			var dist := last_other.distance_to(event.position)
			var center: Vector2 = (last_other + event.position) / 2
			# 사전 등록값이 있을 때만 연산
			if tmp.size():
				anchor_h.translate(Vector3(-(center - tmp['center']).x / SCALED_TRANSLATE * camera.fov / CAMERA_FOV_ANCHOR, (center - tmp['center']).y / SCALED_TRANSLATE * camera.fov / CAMERA_FOV_ANCHOR, 0))
				camera.fov = clamp(camera.fov - (dist - tmp['dist']) / 2, CAMERA_FOV_MIN, CAMERA_FOV_MAX)
			tmp['center'] = center
			tmp['dist'] = dist
			touches[index] = event.position
	if event is InputEventMouseButton:
		match event.button_index:
			3:  # 휠 클릭
				reset_view_info()
			4:  # 휠 위로
				camera.fov = clamp(camera.fov - (5) / 2, CAMERA_FOV_MIN, CAMERA_FOV_MAX)
			5:  # 휠 아래로
				camera.fov = clamp(camera.fov + (5) / 2, CAMERA_FOV_MIN, CAMERA_FOV_MAX)

func three_finger_reset_info():
	anchor_h.position = Vector3.ZERO
	anchor_h.rotation_degrees = Vector3.ZERO
	anchor_v.position = Vector3.ZERO
	anchor_v.rotation_degrees = Vector3(-34.2, 0, 0)
	camera.position = Vector3(0, 0, 3)
	camera.rotation_degrees = Vector3.ZERO
	camera.fov = 75

func reset_view_info():
	three_finger_reset_info()
	await get_tree().create_timer(0.6).timeout

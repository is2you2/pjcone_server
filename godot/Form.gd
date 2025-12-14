extends Node

# iframe 창
var window

var quit_godot_func = JavaScriptBridge.create_callback(quit_godot)
var modify_image_func = JavaScriptBridge.create_callback(modify_image)
var create_thumbnail_func = JavaScriptBridge.create_callback(create_thumbnail)
var start_load_pck_func = JavaScriptBridge.create_callback(start_load_pck)

# 앱 시작과 동시에 동작하려는 pck 정보를 받아옴
func _ready():
	if OS.has_feature('web'):
		window = JavaScriptBridge.get_interface('window')
		window.quit_godot = quit_godot_func
		# ionic에게 IndexedDB가 생성되었음을 알림
		window.parent['godot'] = 'godot';
		window.modify_image = modify_image_func
		window.create_thumbnail = create_thumbnail_func
		window.start_load_pck = start_load_pck_func
	get_viewport().files_dropped.connect(load_package_debug)

func _input(event):
	if event.is_action_pressed("fullscr_tog"):
		if OS.has_feature('web'):
			window.fullscr_tog()

func download_complete(_result, _res_code, _header, _body):
	start_load_pck([])

# 로컬 파일로 즉시 시작
func start_load_pck(_args):
	load_pck()

# pck 투척시 테스트를 위해 바로 받아보기
func load_package_debug(files:PackedStringArray):
	var target:String
	for file in files:
		if file.find('.pck') + 1:
			target = file
			break
	var is_loaded:= ProjectSettings.load_resource_pack(target, false)
	if not is_loaded: # 불러오기 실패
		printerr('1 Godot: 패키지를 불러오지 못함: ', target)
		$CenterContainer/ColorRect/Label.text = 'Cannot load file: %s' % target
	else: # 정상적으로 불러와짐
		print('Godot-debug: 패키지 타겟: ', target)
		load_next_scene('res://main.tscn')
	get_viewport().files_dropped.disconnect(load_package_debug)


func load_pck(try_left:= 5):
	if FileAccess.file_exists('user://%s' % window['path']):
		var is_loaded:= ProjectSettings.load_resource_pack('user://%s' % window['path'])
		if not is_loaded: # 없으면 다운받기
			printerr('2 Godot: 패키지를 불러오지 못함: ', 'user://%s' % window['path'])
			$CenterContainer/ColorRect/Label.text = 'Cannot load file: %s' % 'user://%s' % window['path']
		else: # 패키지를 가지고 있는 경우
			load_next_scene('res://main.tscn')
			if get_viewport().is_connected("files_dropped", Callable(self, 'load_package_debug')):
				get_viewport().disconnect("files_dropped", Callable(self, 'load_package_debug'))
	else:
		if try_left > 0:
			await get_tree().idle_frame
			load_pck(try_left - 1)
		else:
			printerr('3 Godot: 패키지를 불러오지 못함: ', 'user://%s' % window['path'])
			$CenterContainer/ColorRect/Label.text = 'Cannot find file: %s' % 'user://%s' % window['path']

# 천천히 불러오기
func load_next_scene(path:String):
	ResourceLoader.load_threaded_request(path)
	var progress:= [0]
	while progress[0] == 1:
		ResourceLoader.load_threaded_get_status(path, progress)
		if OS.has_feature('web'):
			$CenterContainer/ColorRect/Label.text = '%s%' % progress[0]
		await get_tree().physics_frame
	# 로딩이 종료되고나면
	if OS.has_feature('web'):
		$CenterContainer/ColorRect/Label.text = '100%'
	await get_tree().create_timer(.4).timeout
	var _resource:= ResourceLoader.load_threaded_get(path)
	if path == 'res://main.tscn' and window and window['model']:
		$CenterContainer/ColorRect/Label.text = 'No model founds'
		return
	$CenterContainer.queue_free()
	var _inst = _resource.instantiate()
	add_child(_inst)


func modify_image(_args):
	var viewport:SubViewport = get_viewport()
	var img:= viewport.get_texture().get_image()
	var buf:= img.save_png_to_buffer()
	window.receive_image(Marshalls.raw_to_base64(buf), img.get_width(), img.get_height())


func create_thumbnail(args):
	var dir:= DirAccess.open('user://')
	if not window.path: return
	var thumbnail_exist:= dir.file_exists('%s_thumbnail.png' % [window.path])
	if not thumbnail_exist:
		var viewport:Viewport = get_viewport()
		var img:= viewport.get_texture().get_image()
		var width:= img.get_width()
		var height:= img.get_height()
		if width < height:
			img.resize(int(float(width) / float(height)) * 192, 192)
		else: img.resize(192, int(float(height) / float(width)) * 192)
		var buf:= img.save_png_to_buffer()
		window.create_thumbnail_p5(Marshalls.raw_to_base64(buf), args[0])


func quit_godot(_args):
	get_tree().quit()

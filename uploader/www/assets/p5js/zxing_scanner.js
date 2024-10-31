const codeReader = new ZXing.BrowserMultiFormatReader();
var capture;
var DeviceList = [];
var DeviceIndex = 0;
var FailedToInit = false;
var ErrorInfo = undefined;

function setup() {
  noCanvas();
  frameRate(10);
  capture = createCapture(VIDEO);
  capture.elt.id = 'qr_capture';
  capture.size(400, 368);
  window['ChangeDevice'] = ChangeDevice;
  codeReader.listVideoInputDevices()
    .then(videoInputDevices => {
      try {
        DeviceList = videoInputDevices;
        DeviceIndex = DeviceList.length - 1;
        const firstDeviceId = videoInputDevices[DeviceIndex].deviceId;
        codeReader.decodeFromVideoDevice(firstDeviceId, capture.elt, (result, err) => {
          if (result && window['scan_result']) window['scan_result'](result);
        });
      } catch (e) {
        console.log('스캔 시작 실패: ', e);
        FailedToInit = true;
        ErrorInfo = e;
      }
    }).catch(err => console.error(err));
}

function draw() {
  if (FailedToInit && window['load_failed'])
    window['load_failed'](ErrorInfo);
}

async function ChangeDevice() {
  codeReader.reset();
  DeviceIndex = (DeviceIndex + 1) % DeviceList.length;
  const DeviceId = DeviceList[DeviceIndex].deviceId;
  try {
    await codeReader.decodeFromVideoDevice(DeviceId, capture.elt, (result, err) => {
      if (result && window['scan_result']) window['scan_result'](result);
    });
  } catch (e) {
    FailedToInit = true;
    ErrorInfo = e;
  }
}  
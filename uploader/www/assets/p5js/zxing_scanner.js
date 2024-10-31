const codeReader = new ZXing.BrowserMultiFormatReader();
var capture;
var DeviceList = [];
var DeviceIndex = 0;

function setup() {
  noCanvas();
  capture = createCapture(VIDEO);
  capture.elt.id = 'qr_capture';
  capture.size(400, 368);
  window['ChangeDevice'] = ChangeDevice;
  codeReader.listVideoInputDevices()
    .then(async videoInputDevices => {
      DeviceList = videoInputDevices;
      const firstDeviceId = videoInputDevices[DeviceIndex].deviceId;
      codeReader.decodeFromVideoDevice(firstDeviceId, capture.elt, (result, err) => {
        if (result && window['scan_result']) window['scan_result'](result);
      });
    }).catch(err => console.error(err));
}

async function ChangeDevice() {
  codeReader.reset();
  DeviceIndex = (DeviceIndex + 1) % DeviceList.length;
  const DeviceId = DeviceList[DeviceIndex].deviceId;
  codeReader.decodeFromVideoDevice(DeviceId, capture.elt, (result, err) => {
    if (result && window['scan_result']) window['scan_result'](result);
  });
}  
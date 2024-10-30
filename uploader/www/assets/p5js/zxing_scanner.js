let capture;

const codeReader = new ZXing.BrowserMultiFormatReader();

function setup() {
  noCanvas();
  capture = createCapture(VIDEO);
  capture.elt.id = "qr_scanner";
  capture.size(400, 368);
  codeReader.listVideoInputDevices()
    .then(videoInputDevices => {
      const firstDeviceId = videoInputDevices[0].deviceId;
      codeReader.decodeFromVideoDevice(firstDeviceId, 'qr_scanner', (result, err) => {
        if (result) window['scan_result'](result);
      })
    }).catch(err => console.error(err));
}
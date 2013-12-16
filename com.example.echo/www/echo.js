
window.echoPlugin = {
  callNativeFunction: function(str, successCallback, errorCallback) {
    return cordova.exec(successCallback, errorCallback, "EchoPlugin", "echo", [str]);
  }
}

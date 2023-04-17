let browserInfo = document.getElementById("browser-info");
let browserName = navigator.appName;
let version = navigator.appVersion;
browserInfo.innerHTML = "You are using " + browserName + " version " + version;
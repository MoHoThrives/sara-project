var navogatorText = "appName: " + navigator.appName + "<br>" + "productName: " + navigator.product + "<br>" +
                    "appVersion: " + navigator.appVersion + "<br>" + "userAgent: " + navigator.userAgent + "<br>" +
                    "platform: " + navigator.platform + "<br>" + "language: " + navigator.language;
var windowText = "inner height: " + window.innerHeight + "<br>" + "inner width: " + window.innerWidth;
var screenText = "width: " + screen.width + "<br>" + "height: " + screen.height + "<br>" +
                 "availWidth: " + screen.availWidth + "<br>" + "availHeight: " + screen.availHeight + "<br>" +
                 "colorDepth: " + screen.colorDepth + "<br>" + "pixelDepth: " + screen.pixelDepth;
var locationText = "href: " + window.location.href + "<br>" + "hostname: " + window.location.hostname + "<br>" +
                   "pathname: " + window.location.pathname + "<br>" + "protocol: " + window.location.protocol;
var latitude;
var longitude;

var geoLocationText;

getLocation();

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(writePosition);
    } else {
        geoLocationText = "Geolocation is not supported by this browser.";
    }
}

function writePosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    geoLocationText = "latitude: " + latitude + "<br>" + "longitude: " + longitude;
}

var aboutUsText = "Mohanad Osman is an aspiring Software Enginner <br> " +
              "He, eventually, wants to work in the area of Natural Language Processing <br>" +
              "So far, he is appreciating the powers of Internet Technologies even more!";



// function changeText() {
//     p = document.getElementById("dynamic-text");
//     d.firstChild.nodeValue = "Something said";
// }

window.onload = function () {
    var navigatorButton = document.getElementById("navButton");
    navigatorButton.addEventListener("click", function () {
        var p = document.getElementById("dynamic-text");
        p.innerHTML = navogatorText;
    });

    var windButton = document.getElementById("windowButton");
    windButton.addEventListener("click", function () {
        var p = document.getElementById("dynamic-text");
        p.innerHTML = windowText;
    });

    var geoButton = document.getElementById("geolocationButton");
    geoButton.addEventListener("click", function () {
        var p = document.getElementById("dynamic-text");
        p.innerHTML = geoLocationText;
    });

    var scrnButton = document.getElementById("screenButton");
    scrnButton.addEventListener("click", function () {
        var p = document.getElementById("dynamic-text");
        p.innerHTML = screenText;
    });

    var locButton = document.getElementById("locationButton");
    locButton.addEventListener("click",function () {
        var p = document.getElementById("dynamic-text");
        p.innerHTML = locationText;
    });

    var aboutButton = document.getElementById("aboutusButton");
    aboutButton.addEventListener("click", function () {
        var p = document.getElementById("dynamic-text");
        p.innerHTML = aboutUsText;
    })
};





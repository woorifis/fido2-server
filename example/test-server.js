var FIDOServer = require("../server.js");
var express = require("express");

var server = new FIDOServer();
server
    .init()
    .then(function() {
        var app = express();

        // the home page is register.html
        app.get("/", function(req, res) {
            console.log("serving register.html");

            res.sendFile("./register.html", {
                root: "."
            });
        });

        app.get("/login.html", function(req, res) {
            console.log("serving login.html");
            res.sendFile("./login.html", {
                root: "."
            });
        });

        app.get("/ms-webauth-polyfill.js", function(req, res) {
            console.log("serving polyfill");
            res.sendFile("./ms-webauth-polyfill.js", {
                root: "."
            });
        });

        app.listen(8088);
    })
    .catch(function(err) {
        console.log("Couldn't start FIDO server");
        console.log(err);
    });

var express = require("express");
var app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('public'));

app.get("/", function (req, res) {
    res.sendFile("/public/Home.html", {
        root: __dirname
    });
})

app.get("/home", function (req, res) {
    res.sendFile("/public/Home.html", {
        root: __dirname
    });
})

app.get("/Mission", function (req, res) {
    res.sendFile("/public/Mission.html", {
        root: __dirname
    });
})

app.get("/Shop", function (req, res) {
    res.sendFile("/public/Shop.html", {
        root: __dirname
    });
})


app.listen(PORT, process.env.IP, function () {
    console.log("server is running");
})
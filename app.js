var express = require("express");
var app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('public'));

app.get("/", function (req, res) {
    console.log("here");
    res.sendFile("/public/Home.html", {
        root: __dirname
    });
})


app.listen(PORT, process.env.IP, function () {
    console.log("server is running");
})
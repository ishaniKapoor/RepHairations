const log = console.log; 
var express = require("express");
const request = require('request');
const sendMail = require('./mail');
const bodyParser = require('body-parser');
// const exphbs = require('express-handlebars');
// const nodemailer = require("nodemailer"); 
const path = require('path');
var app = express();
require('dotenv').config();

// app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
const PORT = process.env.PORT || 3000;
app.use(express.static('public'));
app.use(express.json());
// Body parser Middle ware
app.use(bodyParser.urlencoded({extended: false}));
//Sign up route
app.post('/signup', (req,res) => {
    const {firstName, lastName, email, textarea} = req.body;
    // construct request data 
    const data = {
        members: [
            {
                email_address: email, 
                status:'subscribed',
                merge_fields: {
                    FNAME: firstName, 
                    LNAME: lastName
                }
            }
        ]
    }
    const postData = JSON.stringify(data); 
    const options = {
        url: 'https://us2.api.mailchimp.com/3.0/lists/9249a45cbe',
        method: 'POST', 
        headers: {
            Authorization: 'auth 4ee80616fd4d1e5dab66716eddeb2ae2-us2'
        },
        body: postData
    }
    request(options, (err, response, body) => {
        if(err) {
            res.redirect('/fail.html');
        } else {
            if(response.statusCode === 200) {
                res.redirect('/sucess.html');
            } else {
                res.redirect('/fail.html');
            }
        }
    })
    // // send email 
    console.log("data: ", req.body);
    sendMail(email, lastName, textarea);
})



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
    console.log(`server is running on ${PORT}`);
})
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
require('dotenv').config();
const auth = {
    auth: {
        api_key: process.env.MAIL_KEY,
        domain: process.env.MAIL_DOMAIN
    }
}
const transporter = nodemailer.createTransport(mailGun(auth));
const sendMail = (email, name, text, cb) => {
    const mailOptions = {
        from: email,
        to: 'takougnadie@gmail.com',
        subject: name,
        text: text
    };
    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            console.log(data);
        } else {
            console.log(data)
        }
        return cb(data)
    } 
    
    )
}

module.exports = sendMail; 
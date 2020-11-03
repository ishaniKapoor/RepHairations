const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '9b5ca24abe4bb81cf0f98706fcd3082f-ea44b6dc-6cc03f58',
        domain: 'sandboxcb64274685894afaa91ff9b741b94620.mailgun.org'
    }
}
const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, name, text) => {
    const mailOptions = {
        from: email,
        to: 'takougnadie@gmail.com',
        subject: name,
        text: text
    };
    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log("error")
        } else {
           console.log(data)
        }
    })
}

module.exports = sendMail; 
const nodemailer = require('nodemailer');
const { email, password } = require('./config.json')

let recipient = "";
let subject = "Hello";
let messageWith_html = '<b>Try to click it!</b><p><button><a" href="https://youtube.com">ClickHere</button></p>';


const mail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: email,
      pass: password
    }
});
let mail_info = {
    from: email,
    to: recipient,
    subject: subject,
    html: messageWith_html
};

mail.sendMail(mail_info, function (err, info) {
    if (err) {throw err;};

    console.log(info)
});
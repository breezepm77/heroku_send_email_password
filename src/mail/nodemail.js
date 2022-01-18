require('dotenv').config()
const nodemailer = require('nodemailer')
const jwt = require("jsonwebtoken")


async function nodeMailer(receiver) {
    const token = jwt.sign('tabriklaymiz', 'SECRET_KEY')
    
    let transporter = nodemailer.createTransport({
        port: 587,
        service: 'gmail',
        auth: {
          user: process.env.E_USERNAME, // generated ethereal user
          pass: process.env.E_PASSWORD, // generated ethereal password
        }
    })

    let info = await transporter.sendMail({
        from: process.env.E_USERNAME, // sender address
        to: receiver, // list of receivers
        subject: "token ✔️", // Subject line
        text: `${token} tokenni oching`, // plain text body
        html: `<b>${token} tokenni oching</b>`, // html body
    })

    console.log("Message sent: %s", info.messageId);
}

module.exports = nodeMailer
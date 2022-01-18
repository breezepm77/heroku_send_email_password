const express = require('express')
const app = express()
const nodeMailer = require('./src/mail/nodemail')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
        res.render('index')
})
app.post("/email", (req, res) => {
    try {
        console.log("okokasd")
        const {email} = req.body;
        nodeMailer(email)

        console.log(email);
        res.redirect("/")
    
    }catch (e) {
        console.log(e)
    }
})

app.listen(9000, console.log(9000))
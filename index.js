const express = require("express")
const app = express()
const ejs = require("ejs")
const mongoose = require("mongoose")
const chalk = require("chalk")

app.use(express.static('music'))
app.use(express.static('views/public'))
app.use(express.urlencoded({ extended: false }))

mongoose.connect("mongodb://localhost:2000/music", { useNewUrlParser: true, useUnifiedTopology: true }).catch(() => {
    console.log(chalk.red(chalk.bold("[666] ТУТ КАКАЯ ТО ПРОБЛЕМКА")))
})

app.get("/", (req,res) => {
    req.render("index.ejs")
})

app.listen(3000, () => {
    console.log(chalk.green(chalk.bold("[200] STARTED SERVER")))
})
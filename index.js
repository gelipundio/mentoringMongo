const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()

const routes = require('./routes')

mongoose.connect('mongodb://localhost/todoTRAINING')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', routes)

app.listen(3005, () => {
  console.log('corriendo')
})

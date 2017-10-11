const express = require('express')
const Router = express.Router()

const todoController = require('./controllers/todo')

Router.get('/', todoController.getAll)
Router.post('/', todoController.save)

module.exports = Router

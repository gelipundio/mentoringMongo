const express = require('express')
const Router = express.Router()

const todoController = require('./controllers/todo')
const userController = require('./controllers/users')

Router.get('/', todoController.getAll)
Router.post('/', todoController.save)

Router.post('/user', userController.newUser)
Router.delete('/user', userController.deleteTrue)
Router.put('/user', userController.modify)

module.exports = Router

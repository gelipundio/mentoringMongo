const express = require('express')
const Router = express.Router()

const todoController = require('./controllers/todo')
const userController = require('./controllers/users')

Router.post('/', todoController.save)
Router.get('/', todoController.getAll)
Router.put('/', todoController.modify)
Router.delete('/', todoController.deleteById)


Router.post('/user', userController.newUser)
Router.get('/user', userController.getAll)
Router.put('/user', userController.modify)
Router.delete('/user', userController.deleteTrue)

module.exports = Router

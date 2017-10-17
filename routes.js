const express = require('express')
const Router = express.Router()

const todoController = require('./controllers/todo')
const userController = require('./controllers/users')
const commentsController = require('./controllers/comments')

Router.post('/comments', commentsController.post)
Router.get('/comments', commentsController.getAll)
Router.put('/comments', commentsController.modify)
Router.delete('/comments', commentsController.deleteById)

Router.post('/todo', todoController.save)
Router.get('/todo', todoController.getAll)
Router.put('/todo', todoController.modify)
Router.delete('/todo', todoController.deleteById)

Router.post('/user', userController.newUser)
Router.get('/user', userController.getAll)
Router.put('/user', userController.modify)
Router.delete('/user', userController.deleteTrue)

module.exports = Router

const mongoose = require('mongoose')

let todoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  commentId: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: false,
    default: new Date()
  }
})

module.exports = mongoose.model('Todo', todoSchema)

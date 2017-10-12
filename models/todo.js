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
  date: {
    type: Date,
    required: false,
    default: new Date()
  }
})

module.exports = mongoose.model('Todo', todoSchema)

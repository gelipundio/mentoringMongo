const mongoose = require('mongoose')

let commentsSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: false,
    default: new Date()
  }
})

module.exports = mongoose.model('Comments', commentsSchema)
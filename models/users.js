const mongoose = require('mongoose')

let userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: false,
    default: new Date()
  },
  isDelete: {
    type: Boolean,
    required: false,
    default: false
  }
})

module.exports = mongoose.model('User', userSchema)
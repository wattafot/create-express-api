const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  user: String,
  user_id: Number,
  pass: { type: String, required: true},
  email: { type: String, required: true},
  reg_date: Number
})

const User = mongoose.model('users', userSchema)

module.exports = {
  User
}
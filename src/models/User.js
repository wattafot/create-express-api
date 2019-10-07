const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  user: String,
  user_id: Number,
  pass: { type: String, required: true},
  email: { type: String, required: true},
  challenges: [],
  friends: [],
  level: Number,
  exp: Number,
  reg_date: Number,
  hearts: []
})


const MANDATORY_CREATE_PARAMS = [
  'user', 'pass', 'email',
]

const VALID_CREATE_PARAMS =  [
  'user', 'pass', 'email'
]

const User = mongoose.model('users', userSchema)

module.exports = {
  User
}
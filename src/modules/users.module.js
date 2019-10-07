'use strict'

const { User } = require('../models/User.js')

const getUsers = async () => {
  const result = await User.find({})
  return result
}

module.exports = {
  getUsers
}

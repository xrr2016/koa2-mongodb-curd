const mongoose = require('mongoose')
const crypto = require('crypto')
const config = require('../config')

const userSchema = mongoose.Schema({
  username: {type: String, required: true, uinique: true},
  password: {type: String, required: true},
  token: {type: String},
  create_at: {type: Date, default: Date.now}
})

const User = mongoose.model('User', userSchema)
module.exports = User

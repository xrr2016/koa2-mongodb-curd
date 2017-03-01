const db = require('../config').DB
const mongoose = require('mongoose')
mongoose.connect(db)

const contactSchema = mongoose.Schema({
  name: {type: String, require: true},
  phone: Number,
  avatar: String,
  attention: Boolean,
  mail: String,
  relationship: String,
  createAt: {type: Date, default: Date.now}
})

const Contact = new mongoose.Model('Contact', contactSchema)

module.exports = Contact

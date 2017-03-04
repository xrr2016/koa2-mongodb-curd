const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
  name: {type: String, required: true},
  phone: Number,
  avatar: String,
  attention: Boolean,
  mail: String,
  relationship: String,
  createAt: {type: Date, default: Date.now},
  updateAt: {type: Date, default: Date.now}
})

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact

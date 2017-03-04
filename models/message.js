const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
  content: {type: String, required: true},
  author: {type: String},
  tags: {type: Array},
  create_at: {type: Date, default: Date.now},
  update_at: {type: Date}
})

const Message = mongoose.model('Message', messageSchema)
module.exports = Message

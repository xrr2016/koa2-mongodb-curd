const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
  content: {type: String, required: true},
  author: {type: String},
  tags: {type: Array},
  create_at: {type: Date, default: Date.now},
  update_at: {type: Date}
})

messageSchema.statics.findByAuthor = async function (author) {
  let messages = await this.find({author: new RegExp(author, 'i')})
  return messages
}

const Message = mongoose.model('Message', messageSchema)
module.exports = Message

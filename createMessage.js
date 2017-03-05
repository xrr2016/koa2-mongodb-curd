const mongoose = require('mongoose')
const config = require('./config')
const Message = require('./models/message')
mongoose.connect(config.DB)

async function insertData (num) {
  if (!num || typeof num !== 'number') {
    return
  }
  while (num > 0) {
    const message = {
      content: 'test',
      author: 'xrr2016',
      tags: 'test, learn, wow!'
    }
    let result = await Message.create(message)
    console.log(result, '--------')
    num--
  }
  return 'messages is inserted'
}

insertData(10)

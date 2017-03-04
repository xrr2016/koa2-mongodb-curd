const Router = require('koa-router')
const {
    getAllMessage,
    createMessage,
    editMessage,
    removeMessage
} = require('../controllers/message_controller')

const message = new Router()

message.get('/', getAllMessage)
    .post('/', createMessage)
    .put('/:_id', editMessage)
    .del('/:_id', removeMessage)

module.exports = message

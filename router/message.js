const Router = require('koa-router')
const {
    getAllMessage,
    createMessage,
    editMessage,
    removeMessage,
    getMessagesByTag,
    getMessagesByAuthor
} = require('../controllers/message_controller')

const message = new Router()

message.get('/', getAllMessage)
       .get('/:author', getMessagesByAuthor)
       .get('/:tag', getMessagesByTag)
       .post('/', createMessage)
       .put('/:_id', editMessage)
       .del('/:_id', removeMessage)

module.exports = message

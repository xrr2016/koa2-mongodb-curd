const Router = require('koa-router')
const {
    getAllMessage,
    createMessage,
    renderWriteMessage,
    renderEditMessage,
    editMessage,
    removeMessage,
    getMessagesByTag,
    getMessagesByAuthor
} = require('../controllers/message_controller')

const message = new Router()

message.get('/', getAllMessage)
       .get('/write', renderWriteMessage)
       .post('/write', createMessage)
       .get('/remove/:_id', removeMessage)
       .get('/edit/:_id', renderEditMessage)
       .post('/edit/:_id', editMessage)
       .get('/:author', getMessagesByAuthor)
       .get('/:tag', getMessagesByTag)

module.exports = message

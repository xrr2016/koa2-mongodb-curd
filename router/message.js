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
       .get('/edit/:_id', renderEditMessage)
       .get('/:author', getMessagesByAuthor)
       .get('/:tag', getMessagesByTag)
       .post('/write', createMessage)
       .post('/edit/:_id', editMessage)
       .del('/:_id', removeMessage)

module.exports = message

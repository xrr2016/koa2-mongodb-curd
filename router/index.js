const router = require('koa-router')()
const message = require('./message')
const user = require('./user')
const { getAllMessage } = require('../controllers/message_controller')

router.get('/', getAllMessage)

router.use('/message', message.routes(), message.allowedMethods())
router.use('/user', user.routes(), user.allowedMethods())

module.exports = router

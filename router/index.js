const router = require('koa-router')()
const message = require('./message')
const user = require('./user')
const login = require('./login')
const signup = require('./signup')
const {getAllMessage} = require('../controllers/message_controller')

router.get('/', getAllMessage)

router.use('/message', message.routes(), message.allowedMethods())
router.use('/user', user.routes(), user.allowedMethods())
router.use('/login', login.routes(), login.allowedMethods())
router.use('/signup', signup.routes(), signup.allowedMethods())

module.exports = router

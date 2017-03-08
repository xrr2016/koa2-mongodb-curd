const router = require('koa-router')()
const message = require('./message')
const user = require('./user')
const login = require('./login')
const signup = require('./signup')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {title: '首页'})
  next()
})

router.use('/message', message.routes(), message.allowedMethods())
router.use('/user', user.routes(), user.allowedMethods())
router.use('/login', login.routes(), login.allowedMethods())
router.use('/signup', signup.routes(), signup.allowedMethods())

module.exports = router

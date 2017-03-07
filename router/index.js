const router = require('koa-router')()
const message = require('./message')
const user = require('./user')
const login = require('./login')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {title: '首页'})
  next()
})

router.use('/messages', message.routes(), message.allowedMethods())
router.use('/user', user.routes(), user.allowedMethods())
router.use('/login', login.routes(), login.allowedMethods())

module.exports = router

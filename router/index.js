const router = require('koa-router')()
const message = require('./message')
const user = require('./user')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {title: 'koa2 入门实例'})
  next()
})

router.use('/messages', message.routes(), message.allowedMethods())
router.use('/user', user.routes(), user.allowedMethods())

module.exports = router

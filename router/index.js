const router = require('koa-router')()
const message = require('./message')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {title: 'koa2 入门实例'})
  next()
})

router.use('/message', message.routes(), message.allowedMethods())

module.exports = router

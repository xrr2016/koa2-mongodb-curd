const Router = require('koa-router')
const page = require('./page')
const router = new Router()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {title: 'WOOOW!'})
  next()
})

router.use('/page', page.routes(), page.allowedMethods())

module.exports = router

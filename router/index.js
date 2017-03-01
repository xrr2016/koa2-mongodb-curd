const Router = require('koa-router')
const page = require('./page')
const jsonp = require('./jsonp')
const router = new Router()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {title: 'WOOOW!'})
  next()
})

router.use('/page', page.routes(), page.allowedMethods())
router.use('/jsonp', jsonp.routes(), jsonp.allowedMethods())

module.exports = router

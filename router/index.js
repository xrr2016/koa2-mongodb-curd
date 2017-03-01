const Router = require('koa-router')
const page = require('./page')
const user = require('./user')
const api = require('./api')
const router = new Router()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {title: 'WOOOW!'})
  next()
})

router.use('/page', page.routes(), page.allowedMethods())
router.use('/user', user.routes(), user.allowedMethods())
router.use('/api', api.routes(), api.allowedMethods())

module.exports = router

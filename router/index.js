const router = require('koa-router')()
const contact = require('./contact')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {title: 'WOOOW!'})
  next()
})

router.use('/contact', contact.routes(), contact.allowedMethods())

module.exports = router

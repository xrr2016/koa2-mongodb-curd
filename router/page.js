const Router = require('koa-router')

const page = new Router()

page.get('/404', async (ctx, next) => {
  await ctx.render('404')
  next()
}).get('/hello', async (ctx, next) => {
  await ctx.render('hello')
  next()
})

module.exports = page

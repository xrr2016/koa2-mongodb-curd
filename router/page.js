const Router = require('koa-router')

const page = new Router()

page.get('/404', async (ctx, next) => {
  const html = `<h1>404! Sorry</h1>`
  ctx.body = html
  next()
}).get('/helloworld', async (ctx, next) => {
  const html = `<h1>helloworld, well done!</h1>`
  ctx.body = html
  next()
})

module.exports = page

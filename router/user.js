const Router = require('koa-router')
const user = new Router()

user.get('/', async (ctx, next) => {
  let html = await `<h2>Hello, This is user page</h2>`
  ctx.body = html
  return next()
}).get('/:name', async (ctx, next) => {
  const html = await `<h1>Welcome: ${ctx.params.name}</h1>`
  ctx.body = html
  return next()
})

module.exports = user

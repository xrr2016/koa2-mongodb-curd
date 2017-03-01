const Router = require('koa-router')
const api = new Router()

api.get('/:id', async (ctx, next) => {
  let html = await `<h1>GET ${ctx.params.id}success</h1>`
  ctx.body = html
  return next()
}).post('/:id', async (ctx, next) => {
  const html = await `<h1>POST ${ctx.params.id} success</h1>`
  ctx.body = html
  return next()
}).put('/:id', async (ctx, next) => {
  const html = await `<h1>PUT ${ctx.params.id} success</h1>`
  ctx.body = html
  return next()
}).del('/:id', async (ctx, next) => {
  const html = await `<h1>DEL ${ctx.params.id} success</h1>`
  ctx.body = html
  return next()
})

module.exports = api

const Router = require('koa-router')

const jsonp = new Router()

jsonp.get('/', async (ctx, next) => {
  const res = {
    success: true,
    data: {
      text: 'this is a jsonp api',
      time: Date.now()
    }
  }
  ctx.body = res
  next()
})

module.exports = jsonp

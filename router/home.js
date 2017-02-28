const Router = require('koa-router')
const home = new Router()

home.get('/', async (ctx, next) => {
  const html = `
  <ul>
     <li><a href="/page/helloworld">/page/helloworld</a></li>
     <li><a href="/page/404">/page/404</a></li>
     <li><a href="/user">/user</a></li>
     <li><a href="/user/leo">/user/leo</a></li>
   </ul>
  `
  ctx.body = html
  next()
})

module.exports = home

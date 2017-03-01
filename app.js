const Koa = require('koa')
const app = new Koa()
const path = require('path')
const bodyParser = require('koa-bodyparser')
// const logger = require('./middleware/logger')
// const serve = require('koa-static')
// const session = require('koa-session-minimal')
const router = require('./router/index')
const views = require('koa-views')

app.use(views(path.join(__dirname, 'view'), {
  extension: 'ejs'
}))
// let cookie = {
//   maxAge: 1000 * 60 * 60,
//   expires: new Date('2017-03-02'),
//   domain: 'localhost',
//   path: '/',
//   httpOnly: false,
//   overwrite: false
// }
// app.use(session({
//   key: 'SESSION_ID',
//   cookie: cookie
// }))
// app.use(async (ctx, next) => {
//   if (ctx.url === '/set') {
//     ctx.session = {
//       user_id: Math.random().toString(36).substr(2),
//       count: 0
//     }
//     ctx.body = ctx.session
//     return next()
//   } else if (ctx.url === '/getSession') {
//     ctx.session.count += 1
//     ctx.body = ctx.session
//     return next()
//   }
//   next()
// })
// app.use(logger())

app.use(bodyParser())
app.use(async (ctx, next) => {
  console.log(ctx.request.body)
  next()
})
app.use(router.routes()).use(router.allowedMethods())
// app.use(serve(path.join(__dirname, 'static')))

app.on('error', error => {
  console.log('server err', error)
})

app.listen(3000, () => {
  console.log('app listening on port 3000')
})
module.exports = app

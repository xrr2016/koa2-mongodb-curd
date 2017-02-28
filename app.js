const Koa = require('koa')
const app = new Koa()
const logger = require('./middleware/logger')
const router = require('./router/index')

app.use(logger())
// function getSyncTime () {
//   return new Promise((resolve, reject) => {
//     try {
//       const start = Date.now()
//       setTimeout(() => {
//         const end = Date.now() - start
//         resolve(end)
//       }, 1000)
//     } catch (err) {
//       reject(err)
//     }
//   })
// }
// async function getSyncDate () {
//   const time = await getSyncTime()
//   const data = `endTime - startTime = ${time}`
//   return data
// }
// async function getData () {
//   const data = await getSyncDate()
//   console.log(data)
// }
// getData()
// app.use(async function (ctx, next) {
//   const start = Date.now()
//   await next()
//   const ms = Date.now() - start
//   ctx.set('X-Response-Time', `${ms}ms`)
// })
// app.use(async function (ctx, next) {
//   const start = Date.now()
//   await next()
//   const ms = Date.now() - start
//   console.log(`${ctx.ip}`)
//   console.log(`${ctx.method} ${ctx.url} - ${ms}`)
// })
// app.use(async (ctx, next) => {
//   ctx.body = 'Hello, Koa2!'
//   next()
// })
// app.use(async (ctx, next) => {
//   let url = ctx.request.url
//   ctx.body = url
//   next()
// })
app.use(router.routes()).use(router.allowedMethods())

app.on('error', error => {
  console.log('server err', error)
})

app.listen(3000, () => {
  console.log('app listening on port 3000')
})

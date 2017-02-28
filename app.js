const Koa = require('koa')
const app = new Koa()

app.use(ctx => {
  ctx.body = 'Hello, Koa2!'
})

app.listen(3000, () => {
  console.log('app listening on port 3000')
})

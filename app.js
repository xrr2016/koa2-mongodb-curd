const Koa = require('koa')
const app = new Koa()
const path = require('path')
const bodyParser = require('koa-bodyparser')
const router = require('./router/index')
const views = require('koa-views')

app.use(bodyParser())
app.use(views(path.join(__dirname, 'view'), {
  extension: 'ejs'
}))
app.use(router.routes()).use(router.allowedMethods())

app.on('error', error => {
  console.log('server err', error)
})

app.listen(3000, () => {
  console.log('app listening on port 3000')
})
module.exports = app

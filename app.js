const Koa = require('koa')
const path = require('path')
const views = require('koa-views')
const serve = require('koa-static')
const mongoose = require('mongoose')
const bodyParser = require('koa-bodyparser')
const config = require('./config')
const router = require('./router/index')

// 链接数据库
mongoose.connect(config.DB)
mongoose.Promise = global.Pormise

const app = new Koa()
// 使用解析请求数据中间件
app.use(bodyParser())
// 设置模板引擎
app.use(views(path.join(__dirname, 'view'), {
  extension: 'ejs'
}))
// 加载路由
app.use(router.routes()).use(router.allowedMethods())
// 设置静态资源服务器
app.use(serve(path.join(__dirname, 'static')))

app.listen(config.port, () => {
  console.log(`app listening on port ${config.port}`)
})
module.exports = app

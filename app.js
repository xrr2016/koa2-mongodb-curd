const Koa = require('koa')
const path = require('path')
const views = require('koa-views')
const favicon = require('koa-favicon')
const serve = require('koa-static')
const mongoose = require('mongoose')
const bodyParser = require('koa-bodyparser')
const config = require('./config')
const router = require('./router/index')

// 链接数据库
mongoose.connect(config.DB)
mongoose.Promise = global.Promise
const db = mongoose.connection
db.once('open', () => {
  console.log('successful connect to mongodb')
})

const app = new Koa()
app.use(favicon(path.join(__dirname, './public/imgs/favicon.ico')))
// 使用解析请求数据中间件
app.use(bodyParser())
// 设置模板引擎
app.use(views(path.join(__dirname, 'views'), {
  extension: 'ejs'
}))
// 加载路由
app.use(router.routes()).use(router.allowedMethods())
// 设置静态资源服务器
app.use(serve(path.join(__dirname, 'public')))
// 错误处理
app.use(async (ctx, next) => {
  if (ctx.status >= 400) {
    await ctx.render('404', {title: '出错了!'})
  }
  next()
})
app.listen(config.port, () => {
  console.log(`app listening on port ${config.port}`)
})
// 导出koa实例
module.exports = app

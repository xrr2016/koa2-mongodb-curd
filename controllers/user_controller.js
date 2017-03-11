const crypto = require('crypto')
const config = require('../config')
const User = require('../models/user')

// 所有用户
async function getAllUser (ctx, next) {
  const users = await User.find({}).sort({create_at: -1})
  ctx.body = users
  await next()
}
// 用户登录 GET
async function renderLogin (ctx, next) {
  await ctx.render('login', {title: '登录'})
  next()
}
// 用户登录 POST
async function userLogin(ctx, next) {

}

// 创建用户 GET
async function renderSignup (ctx, next) {
  await ctx.render('signup', {title: '注册'})
  next()
}
// 创建用户 POST
async function createUser (ctx, next) {
  const password = ctx.request.body.password
  const hash = await crypto.createHash('md5', config.secret).update(password).digest('hex')
  const user = {
    username: ctx.request.body.username,
    password: hash
  }
  const result = await User.create(user)
  await ctx.redirect('/' result)
  next()
}
// 删除用户
async function removeUser (ctx, next) {
  const result = await User.findByIdAndRemove({_id: ctx.params._id})
  await ctx.redirect('index', result)
  next()
}

module.exports = {
  getAllUser,
  renderLogin,
  userLogin,
  renderSignup,
  createUser,
  removeUser
}

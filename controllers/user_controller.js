const crypto = require('crypto')
const config = require('../config')
const User = require('../models/user')

// 所有用户
async function getAllUser (ctx, next) {
  const users = await User.find({}).sort({create_at: -1})
  ctx.body = users
  await next()
}
// 创建用户
async function createUser (ctx, next) {
  const hash = crypto.createHmac('sha256', config.secret).update('create user').digest('hex')
  const user = {
    username: ctx.request.body.username,
    password: hash
  }
  const result = await User.create(user)
  ctx.body = result
  await next()
}
// 删除用户
async function removeUser (ctx, next) {
  const result = await User.findByIdAndRemove({_id: ctx.params._id})
  ctx.body = result
  await next()
}
module.exports = {
  getAllUser,
  createUser,
  removeUser
}

const Message = require('../models/message')
// 获取全部信息
async function getAllMessage (ctx, next) {
  let messages = await Message.find({}).sort({update_at: -1})
  ctx.body = messages
  await next()
}
// 通过author获取信息
async function getMessagesByAuthor (ctx, next) {
  let messages = await Message.findByAuthor(ctx.params.author)
  ctx.body = messages
  await next()
}
// 通过tag获取信息
async function getMessagesByTag (ctx, next) {
  let messages = await Message.findByTag(ctx.params.tag)
  ctx.body = messages
  await next()
}
// 创建一条信息
async function createMessage (ctx, next) {
  let result = await Message.create(ctx.request.body)
  ctx.body = result
  await next()
}
// 编辑一条信息
async function editMessage (ctx, next) {
  // 获取请求的数据
  const message = {content: ctx.request.body.content, tags: ctx.request.body.tags}
  let result = await Message.findByIdAndUpdate({_id: ctx.params._id},
                     {$set: {content: message.content, tags: message.tags, update_at: Date.now()}},
                     {new: true})
  ctx.body = result
  await next()
}
// 删除一条信息
async function removeMessage (ctx, next) {
  let result = await Message.findByIdAndRemove({_id: ctx.params._id})
  ctx.body = result
  await next()
}

module.exports = {
  getAllMessage,
  createMessage,
  editMessage,
  removeMessage,
  getMessagesByTag,
  getMessagesByAuthor
}

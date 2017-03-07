async function renderLogin (ctx, next) {
  await ctx.render('login', {title: '登录'})
  next()
}

module.exports = {
  renderLogin
}

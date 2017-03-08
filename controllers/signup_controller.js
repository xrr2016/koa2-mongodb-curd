async function renderSignup (ctx, next) {
  await ctx.render('signup', {title: '注册'})
  next()
}

module.exports = {
  renderSignup
}

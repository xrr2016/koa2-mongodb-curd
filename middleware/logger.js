function log (ctx) {
  console.log(ctx.method, ctx.header.host, ctx.url)
}

module.exports = function () {
  return function (ctx, next) {
    return new Promise((resolve, reject) => {
      log(ctx)
      resolve()
      return next()
    }).catch(err => {
      console.log(err)
      return next()
    })
  }
}

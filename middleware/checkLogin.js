module.exports = function checkLogin () {
  return function (ctx, next) {
    return new Promise((resolve, reject) => {
      if (ctx.session.user) {
        resolve(ctx.session.user)
        return next()
      } else {
        reject('no login')
      }
    }).catch(err => {
      console.log(err)
      return next()
    })
  }
}

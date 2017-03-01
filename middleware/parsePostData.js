module.exports = function () {
  return async (ctx, next) => {
    try {
      let postData = ''
      ctx.req.addListener('data', (data) => {
        postData += data
      })
      ctx.req.addListener('end', () => {
        for (let val of postData) {
          console.log(decodeURIComponent(val))
        }
      })
      return next()
    } catch (err) {
      throw err
    }
  }
}

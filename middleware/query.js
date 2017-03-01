module.exports = function () {
  return (ctx, next) => {
    return new Promise((resolve, reject) => {
      let url = ctx.url
      let query = ctx.request.query
      let queryString = ctx.request.querystring
      let ctxQuery = ctx.query
      let ctxQueryString = ctx.querystring
      let data = {
        url,
        query,
        queryString,
        ctxQuery,
        ctxQueryString
      }
      console.log(data)
      resolve()
      return next()
    }).catch(err => {
      console.log(err)
      return next()
    })
  }
}

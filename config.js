module.exports = {
  port: process.env.prot || 3000,
  session: {
    secret: 'koa2 messages',
    key: 'koa2 messages',
    maxAge: 2592000000
  },
  secret: 'password',
  DB: 'mongodb://localhost:27017/messages'
}

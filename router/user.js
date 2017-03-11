const Router = require('koa-router')
const {
  getAllUser,
  renderLogin,
  userLogin,
  renderSignup,
  createUser,
  removeUser
} = require('../controllers/user_controller')

const user = new Router()

user.get('/', getAllUser)
    .get('/login', renderLogin)
    .post('/login', userLogin)
    .get('/signup', renderSignup)
    .post('/signup', createUser)
    .get('/remove/:_id', removeUser)

module.exports = user

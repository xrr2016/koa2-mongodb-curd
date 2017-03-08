const Router = require('koa-router')
const signup = new Router()
const { renderSignup } = require('../controllers/signup_controller')

signup.get('/', renderSignup)

module.exports = signup

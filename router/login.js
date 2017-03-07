const Router = require('koa-router')
const login = new Router()
const { renderLogin } = require('../controllers/login_controller')

login.get('/', renderLogin)

module.exports = login

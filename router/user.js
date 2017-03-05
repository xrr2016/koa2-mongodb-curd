const Router = require('koa-router')
const {
  getAllUser,
  createUser,
  removeUser
} = require('../controllers/user_controller')

const message = new Router()

message.get('/', getAllUser)
       .post('/', createUser)
       .del('/:_id', removeUser)

module.exports = message

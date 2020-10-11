const Router = require('koa-router')

const router = new Router()

const { Login } = require('../controller/user')

router.get('/login', Login)


module.exports = router.routes()
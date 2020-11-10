const Router = require('koa-router')

const router = new Router()

const { Login, insertUser } = require('../controller/user')

router.post('/login', Login)
router.post('/insert', insertUser)


module.exports = router.routes()
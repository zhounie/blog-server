const Router = require('koa-router')
const router = new Router()

const { createTable } = require('../controller/createTable')

router.use('/user', require('./user'))


router.get('/createTable', createTable)


module.exports = router
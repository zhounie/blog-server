const Router = require('koa-router')
const router = new Router()

const { createTable, createBlogTable, createDataBase } = require('../controller/initData')

router.use('/user', require('./user'))
router.use('/blog', require('./blog'))
router.use('/book', require('./books'))


router.get('/createDataBase', createDataBase)
router.get('/createBlogTable', createBlogTable)
router.get('/createTable', createTable)


module.exports = router
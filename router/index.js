const Router = require('koa-router')
const router = new Router()

const { createTable, createBlogTable, createDataBase } = require('../controller/initData')
const { upload } = require('../controller/upload')

router.prefix('/api')

router.use('/user', require('./user'))
router.use('/blog', require('./blog'))
router.use('/book', require('./books'))


router.get('/createDataBase', createDataBase)
router.get('/createBlogTable', createBlogTable)
router.get('/createTable', createTable)

router.post('/upload', upload)

module.exports = router
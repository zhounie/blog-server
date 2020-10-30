const Router = require('koa-router')

const router = new Router()

const { getBlogList, getBlogDetail } = require('../controller/blog')

router.get('/getBlogList', getBlogList)
router.get('/getBlogDetail', getBlogDetail)


module.exports = router.routes()
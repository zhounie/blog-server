const Router = require('koa-router')

const router = new Router()

const { getBlogList, getBlogDetail, addBlog, deleteBlog, saveBlogDetail, showBlog, getClientBlogList } = require('../controller/blog')

router.get('/getBlogList', getBlogList)
router.get('/getBlogDetail', getBlogDetail)
router.post('/addBlog', addBlog)
router.post('/deleteBlog', deleteBlog)
router.post('/saveBlogDetail', saveBlogDetail)
router.post('/showBlog', showBlog)
router.get('/getClientBlogList', getClientBlogList)

module.exports = router.routes()
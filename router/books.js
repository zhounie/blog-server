const Router = require('koa-router')

const router = new Router()

const { getBookList, addBook, deleteBook } = require('../controller/books')

router.get('/getBookList', getBookList)
router.post('/addBook', addBook)
router.post('/deleteBook', deleteBook)

module.exports = router.routes()
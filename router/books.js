const Router = require('koa-router')

const router = new Router()

const { getBookList, addBook, deleteBook, changeBook } = require('../controller/books')

router.get('/getBookList', getBookList)
router.post('/addBook', addBook)
router.post('/changeBook', changeBook)
router.post('/deleteBook', deleteBook)

module.exports = router.routes()
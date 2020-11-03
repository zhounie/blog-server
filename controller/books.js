const mysql = require('../db/index')
const Book = require('../model/books')
const BooksModel = require('../model/books')

const getBookList = async (ctx) => {
    const { type } = ctx.request.query
    let where = {}
    if (type) {
        where = {
            tags: type
        }
    }
    await BooksModel.findAll({
        where
    }).then(res => {
        return ctx.success(res)
    }).catch(err => {
        console.log(err);
        return ctx.fail(err)
    })
}

const addBook = async (ctx) => {
    const keys = Object.keys(ctx.request.body)
    const requireKeys = ['name', 'author', 'img']
    const empty = []
    requireKeys.map(key => {
        if (!keys.includes(key)) {
            empty.push(key)
        }
    })
    if (empty.length) {
        return ctx.fail('缺失参数: ' + empty.join(','))
    }
    const { name, author, img } = ctx.request.body
    await BooksModel.create({
        name: name,
        author: author,
        img: img
    }).then(res => {
        return ctx.success(res.dataValues)
    }).catch(err => {
        return ctx.fail(err)
    })
}

const deleteBook = async (ctx) => {
    const { id } = ctx.request.body
    if (!id) {
        return ctx.fail('缺失参数: id')
    }
    await BooksModel.destroy({
        where: { id }
    }).then(res => {
        return ctx.success(res.dataValues)
    }).catch(err => {
        return ctx.fail(err)
    })
}

module.exports = {
    getBookList,
    addBook,
    deleteBook
}
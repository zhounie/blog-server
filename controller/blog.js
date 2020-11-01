const mysql = require('../db/index')
const BlogModel = require('../model/blog')

const getBlogList = async (ctx) => {
    const { type } = ctx.request.query
    let where = {}
    if (type) {
        where = {
            tags: type
        }
    }
    await BlogModel.findAll({
        where
    }).then(res => {
        return ctx.success(res)
    }).catch(err => {
        console.log(err);
        return ctx.fail(err)
    })
}

const getBlogDetail = async (ctx) => {
    let { id } = ctx.request.query
    if (!id) {
        return ctx.fail('参数id不存在')
    }
    await BlogModel.findOne({
        where: {
            id: id
        }
    }).then(res => {
        return ctx.success(res)
    }).catch(err => {
        return ctx.fail(res)
    })
}

const deleteBlog = () => {

}


module.exports = {
    getBlogList,
    getBlogDetail
}
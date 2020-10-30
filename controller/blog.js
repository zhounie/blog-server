const mysql = require('../db/index')
const BlogModel = require('../model/blog')

const getBlogList = async (ctx) => {
    await BlogModel.findAll({

    }).then(res => {
        console.log(res);
        return ctx.success(res)
    }).catch(err => {
        return ctx.fail(res)
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
        console.log(res);
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
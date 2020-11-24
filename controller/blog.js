const mysql = require('../db/index')
const Blog = require('../model/blog')
const BlogModel = require('../model/blog')
const Op = require('sequelize').Op
const moment = require('moment')

const getBlogList = async (ctx) => {
    const { type, title, createTime } = ctx.request.query
    let where = {}
    if (type) {
        where = {
            tags: type
        }
    }
    if (title) {
        where = {
            title: {[Op.like]: `%${title}%`},
            ...where
        }
    }
    if (createTime) {
        let date = moment(createTime).format("YYYY-MM-DD")
        let startTime = new Date(`${date} 00:00:00`)
        let endTime = new Date(`${date} 23:59:59`)
        where = {
            createdAt: {
                [Op.gt]: `%${startTime}%`,
                [Op.lt]: `%${endTime}%`
            },
            ...where
        }
    }
    await BlogModel.findAll({
        where: {
            is_delete: 0,
            ...where
        }
    }).then(res => {
        return ctx.success(res)
    }).catch(err => {
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

const getClientBlogList = async (ctx) => {
    const { type, title, createTime } = ctx.request.query
    let where = {}
    if (type) {
        where = {
            tags: type
        }
    }
    if (title) {
        where = {
            title: {[Op.like]: `%${title}%`},
            ...where
        }
    }
    if (createTime) {
        let date = moment(createTime).format("YYYY-MM-DD")
        let startTime = new Date(`${date} 00:00:00`)
        let endTime = new Date(`${date} 23:59:59`)
        where = {
            createdAt: {
                [Op.gt]: `%${startTime}%`,
                [Op.lt]: `%${endTime}%`
            },
            ...where
        }
    }
    await BlogModel.findAll({
        where: {
            is_delete: 0,
            is_show: 1,
            ...where
        }
    }).then(res => {
        return ctx.success(res)
    }).catch(err => {
        return ctx.fail(err)
    })
}

const addBlog = async (ctx) => {
    const keys = Object.keys(ctx.request.body)
    const requireKeys = ['title', 'tags']
    const empty = []
    requireKeys.map(key => {
        if (!keys.includes(key)) {
            empty.push(key)
        }
    })
    if (empty.length) {
        return ctx.fail('缺失参数: ' + empty.join(','))
    }
    const { title, tags } = ctx.request.body
    await BlogModel.create({
        title: title,
        tags: tags
    }).then(res => {
        return ctx.success(res.dataValues)
    }).catch(err => {
        return ctx.fail(err)
    })
}

const saveBlogDetail = async (ctx) => {
    const keys = Object.keys(ctx.request.body)
    const requireKeys = ['id', 'content']
    const empty = []
    requireKeys.map(key => {
        if (!keys.includes(key)) {
            empty.push(key)
        }
    })
    if (empty.length) {
        return ctx.fail('缺失参数: ' + empty.join(','))
    }
    let { id, content } = ctx.request.body
    await BlogModel.update(
        {
           content:  content
        }, {
            where: {
                id: id
            }
        }
    ).then(res =>{
        return ctx.success(res.dataValues)
    }).catch(err => {
        return ctx.fail(err)
    })
}


const deleteBlog = async (ctx) => {
    const { id } = ctx.request.body
    if (!id) {
        return ctx.fail('缺失参数: id')
    }
    await BlogModel.update({
        is_delete: 1
    },{
        where: { id }
    }).then(res => {
        return ctx.success(res.dataValues)
    }).catch(err => {
        return ctx.fail(err)
    })
}

const showBlog = async (ctx) => {
    const keys = Object.keys(ctx.request.body)
    const requireKeys = ['id', 'isShow']
    const empty = []
    requireKeys.map(key => {
        if (!keys.includes(key)) {
            empty.push(key)
        }
    })
    if (empty.length) {
        return ctx.fail('缺失参数: ' + empty.join(','))
    }
    const { id, isShow } = ctx.request.body
    await BlogModel.update(
        {
            is_show: isShow
        }, {
            where: {
                id: id
            }
        }
    ).then(res =>{
        return ctx.success(res.dataValues)
    }).catch(err => {
        return ctx.fail(err)
    })
}


module.exports = {
    getBlogList,
    getBlogDetail,
    getClientBlogList,
    addBlog,
    deleteBlog,
    saveBlogDetail,
    showBlog
}
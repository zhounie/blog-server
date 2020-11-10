const UserModel = require('../model/user')
const md5 = require('js-md5')
const JWT = require('../utils/jwt')

const Login = async (ctx) => {
    const { username, password } = ctx.request.body
    if (!username || !password) {
        ctx.fail('参数错误')
    }
    await UserModel.findOne({
        where: {
            username: username,
            password: md5(password)
        }
    }).then(res => {
        if (res === null) {
            return ctx.fail('用户不存在或密码错误')
        }
        const token = new JWT().sign(res.username, 60 * 60);
        if (!token) {
            return ctx.fail('创建token失败~')
        }
        return ctx.success({
            id: res.id,
            username: res.username,
            token: token
        })
    }).catch(err => {
        if (err === null) {
            return ctx.fail('用户不存在或密码错误')
        }
        return ctx.fail(err)
    })
}

const insertUser = async (ctx) => {
    const { username, password } = ctx.request.body
    if (!username || !password) {
        return ctx.fail('参数不全')
    }
    const user = await UserModel.findOne({
        where: {
            username: username
        }
    })
    if (user !== null) {
        return ctx.fail('用户名已存在')
    }
    await UserModel.create({
        username: username,
        password: md5(password)
    }).then(res => {
        return ctx.success(res.dataValues)
    }).catch(err => {
        return ctx.fail(err)
    })
}


module.exports = {
    Login,
    insertUser
}
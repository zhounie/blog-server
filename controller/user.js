const mysql = require('../db/index')

const Login = async (ctx) => {
    ctx.success('这是data')
}

const insertUser = async (ctx) => {
    const { name } = ctx.request.body
    if (!name) {
        return ctx.fail('参数不全')
    }
    const sql = `INSERT INTO user(name) VALUES('zoey')`
    return new Promise((resolve) => {
        mysql.query(sql, (err => {
            if (err) {
                return ctx.fail(err)
            }
            ctx.success('添加成功')
            resolve()
        }))
    })
}


module.exports = {
    Login,
    insertUser
}
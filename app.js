const Koa = require('koa')
const router = require('./router/index')
const cors = require('koa2-cors')
const koaBody = require('koa-body')
const koaStatic = require('koa-static')
const path = require('path')
const JWT = require('./utils/jwt')
const { IGNORE_TOKEN_ROUTES } = require('./config/index')
require('./db/index')


const app = new Koa()

app.use(cors())

app.use(koaBody({
    multipart: true,
    formidable: {
        maxFileSize: 200 * 1024 * 1024    // 设置上传文件大小最大限制，默认2M
    }
}))
app.use(koaStatic(path.join(__dirname, '/public/')))

app.use(async (ctx, next) => {
    ctx.success = function (data) {
        ctx.body = {
            code : 200,
            msg : 'success',
            data : data
        }
    }
    ctx.fail = function (msg, code = 99) {
        ctx.body = {
            code : code,
            msg : msg || 'fail',
        }
    }
    await next()
})

app.use(async (ctx, next) => {
    if (ctx.request.header.referer === 'http://81.69.28.107:3000/' || IGNORE_TOKEN_ROUTES.includes(ctx.request.url)) {
        await next()
    } else {
        let token = ctx.request.header.authorization
        if (!token) {
            ctx.fail('请先登录')
        } else {
            let data = new JWT().verify(token)
            if (!data) {
                ctx.fail('token错误！')
            } else {
                await next()
            }
        }
    }
})

app.use(router.routes())

app.use(async (ctx, next) => {
    await next()
    if (ctx.status === 404) {
        ctx.body = {
            code: '404',
            msg: `method: ${ctx.request.method}; url: ${ctx.request.url}`
        }
    }
})

app.listen(8888, () => {
    console.log('app run http://localhost:8888')
})
const Koa = require('koa')
const router = require('./router/index')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')

require('./db/index')


const app = new Koa()

app.use(cors())

app.use(bodyParser())

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
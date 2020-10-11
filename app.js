const Koa = require('koa')
const router = require('./router/index')

require('./db/index')


const app = new Koa()

app.use(router.routes())

app.listen(3000, () => {
    console.log('app run http://localhost:3000')
})
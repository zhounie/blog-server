const { HOST } = require('../config') 

const http = require('http')

const app = http.createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Hello');
})

app.on('connect', (req) => {
    // console.log(req);

})
app.listen(HOST, () => {
    console.log('服务已启动', HOST);
})


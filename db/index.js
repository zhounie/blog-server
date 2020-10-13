const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'blog'
})


connection.connect(err => {
    if (err) throw err
    console.log('mysql connected success');
})


module.exports = connection
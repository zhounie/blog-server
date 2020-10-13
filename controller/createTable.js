const mysql = require('../db/index')

const createTable = async (ctx) => {
    const sql = `CREATE TABLE user(
        id INT(11) AUTO_INCREMENT PRIMARY KEY,username VARCHAR(255),password VARCHAR(255)
    )`
    return new Promise((resolve) => {
        mysql.query(sql, (err) => {
            if (err) throw err
            ctx.body = {
                code: '200'
            }
            resolve()
        })
    })
}

const createBlogTable = async (ctx) => {
    
}


module.exports = {
    createTable
}
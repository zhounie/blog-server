const mysql = require('../db/index')

const createDataBase = (ctx) => {
    const sql = `CREATE DATABASE blog`;
    return new Promise((resolve) => {
        mysql.query(sql, (err) => {
            if (err) throw err
            ctx.success('创建数据库成功')
            resolve()
        })
    })
}


const createTable = async (ctx) => {
    const sql = `CREATE TABLE user(
        id INT(11) AUTO_INCREMENT PRIMARY KEY,username VARCHAR(255),password VARCHAR(255)
    )`
    return new Promise((resolve) => {
        mysql.query(sql, (err) => {
            if (err) throw err
            ctx.success('创建user表成功')
            resolve()
        })
    })
}

const createBlogTable = async (ctx) => {
    const sql = `CREATE TABLE blog(
        id INT(11) AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        content VARCHAR(255) NOT NULL,
        create_time timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
        update_time timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )`
    return new Promise((resolve) => {
        mysql.query(sql, err => {
            if (err) throw err
            ctx.success('创建blog表成功')
            resolve()
        })
    })
}


module.exports = {
    createTable,
    createBlogTable,
    createDataBase
}
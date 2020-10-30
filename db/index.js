const Sequelize = require('sequelize')

const config = {
    host: 'localhost',
    port: '3306',
    dialect: 'mysql'
}

const sequelize = new Sequelize('blog', 'root', '123456', config)

module.exports = sequelize
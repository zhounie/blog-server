const Sequelize = require('sequelize')

const config = {
    host: '81.69.28.107',
    port: '3306',
    dialect: 'mysql'
}

const sequelize = new Sequelize('blog', 'root', '123456', config)

module.exports = sequelize
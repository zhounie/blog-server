const Sequelize = require('sequelize')

const config = {
    host: '81.69.28.107',
    port: '9901',
    dialect: 'mysql'
}

const sequelize = new Sequelize('blog', 'root', 'zn19981130', config)

module.exports = sequelize
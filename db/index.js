const Sequelize = require('sequelize')

const config = {
    host: '81.68.159.230',
    port: '3306',
    dialect: 'mysql'
}

const sequelize = new Sequelize('blog', 'admin', '123456', config)

module.exports = sequelize
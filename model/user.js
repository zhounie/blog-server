const Sequelize = require('sequelize')

const sequelize = require('../db/index')

const User = sequelize.define('user', {
    username: Sequelize.STRING,
    password: Sequelize.STRING
}, {
    underscored: false
});


User.sync()

module.exports = User
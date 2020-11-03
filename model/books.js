const Sequelize = require('sequelize')

const sequelize = require('../db/index')

const Book = sequelize.define('book', {
    name: Sequelize.STRING,
    author: Sequelize.TEXT,
    img: Sequelize.STRING
}, {
    underscored: false
});


Book.sync()

module.exports = Book
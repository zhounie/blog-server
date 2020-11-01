const Sequelize = require('sequelize')

const sequelize = require('../db/index')

const Blog = sequelize.define('blog', {
    title: Sequelize.STRING,
    content: Sequelize.TEXT,
    tags: Sequelize.STRING
}, {
    underscored: false
});


Blog.sync()

module.exports = Blog
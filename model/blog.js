const Sequelize = require('sequelize')

const sequelize = require('../db/index')

const Blog = sequelize.define('blog', {
    title: Sequelize.STRING,
    content: Sequelize.TEXT,
    tags: Sequelize.STRING,
    is_show: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    is_delete: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
}, {
    underscored: false
});


Blog.sync({ alter: true })

module.exports = Blog
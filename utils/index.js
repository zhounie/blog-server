const { IGNORE_TOKEN_ROUTES } = require('../config/index')

const isIgnoreTokenRoutes = (url) => {
    let isExist = IGNORE_TOKEN_ROUTES.find((item) => url.indexOf(item) === 0)
    return !!isExist
}

module.exports = {
    isIgnoreTokenRoutes
}
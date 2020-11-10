const jsonwebtoken = require('jsonwebtoken');
const key = 'TOKEN_KEY'

module.exports = class JWT {
    sign(val, expires = (60 * 60 * 24)) {
        try {
            return jsonwebtoken.sign({
                "jti": 1,
                "iss": "iszhoune.com",
                "user": val
            }, key, { expiresIn: expires })
        } catch (e) {
            console.error('jwt sign error =>', e);
            return ''
        }
    }

    verify(token = '') {
        try {
            return jsonwebtoken.verify(token, key)
        } catch(e) {
            console.error('jwt verify error =>', e)
            return false;
        }
    }
}
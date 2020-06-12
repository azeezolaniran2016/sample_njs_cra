const path = require('path')
module.exports = {
    PORT: process.env.PORT || 3030,
    STATIC_ROOT_DIR: process.env.STATIC_ROOT_DIR || path.join(__dirname, '../client/build'),
    NODE_ENV: process.env.NODE_ENV || 'development',
    LOG_LEVEL: process.env.LOG_LEVEL || 'debug'
}

const bunyan = require('bunyan')
const config = require('./config')

module.exports = bunyan.createLogger({
    name: 'sample_njs',
    level: config.LOG_LEVEL,
    src: config.NODE_ENV === 'development',
})

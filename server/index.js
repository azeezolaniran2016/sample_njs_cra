const express = require('express')
const config = require('./config')
const logger = require('./logger')
const router = require('./router')

const App = express()

App.use('/api', router)
App.use(express.static(config.STATIC_ROOT_DIR))

const start = () => {
    App.listen(config.PORT, () => {
        logger.info(`App started on PORT ${config.PORT}`)
    })
}

module.exports = {
    start
} 

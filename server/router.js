const apiRouter = require('express').Router()

apiRouter.get('/v1/users', (req, res) => {
    res.status(200).json({
        results: [{
            name: 'Azeez Olaniran',
            id: '1'
        }],
        pagination: {
            page: 1,
            totalItems: 1
        }
    })
})

apiRouter.get('/v1/todos', (req, res) => {
    res.status(200).json({
        results: [
            {
                name: 'Todo One',
                id: '1'
            },
            {
                name: 'Todo Two',
                id: '2'
            }
        ],
        pagination: {
            page: 1,
            totalItems: 2
        }
    })
})

module.exports = apiRouter

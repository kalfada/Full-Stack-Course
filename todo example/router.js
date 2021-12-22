const Tasks = require('./tasks')

module.exports = app => {

    app.get('/todo', (req, res) => {
        res.send(Tasks.read())
    })

    app.post('/todo', (req, res) => {
        try {
            res.send(Tasks.create(req.body))
        } catch (error) {
            res.send({ code: 400, message: error.message || error })
        }
    })

    app.put('/todo/:id', (req, res) => {
        try {
            res.send(Tasks.update(req.params.id))
        } catch (error) {
            res.send({ code: 400, message: error.message || error })
        }
    })

    app.delete('/todo/:id', (req, res) => {
        try {
            res.send(Tasks.delete(req.params.id))
        } catch (error) {
            res.send({ code: 400, message: error.message || error })
        }
    })
}

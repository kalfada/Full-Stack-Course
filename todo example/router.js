const Tasks = require('./tasks_mongo')

module.exports = app => {

    app.get('/todo', async (req, res) => {
        res.send(await Tasks.read(req.query))
    })

    app.post('/todo', async (req, res) => {
        try {
            res.send(await Tasks.create(req.body))
        } catch (error) {
            res.send({ code: 400, message: error.message || error })
        }
    })

    app.put('/todo/:id', async (req, res) => {
        try {
            res.send(await Tasks.update(req.params.id))
        } catch (error) {
            res.send({ code: 400, message: error.message || error })
        }
    })

    app.delete('/todo/:id', async (req, res) => {
        try {
            res.send(await Tasks.delete(req.params.id))
        } catch (error) {
            res.send({ code: 400, message: error.message || error })
        }
    })
}

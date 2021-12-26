const users = require('./index');

module.exports = app =>{
    
    app.get('/users' ,async (req, res) =>{
        res.send(await users.read(req.query))
    });

    app.post('/users' ,async (req, res) =>{
        try{
            res.send(await users.create(req.body))
        }catch (err){
            res.send({ code: 400, message: err.message || err })
        }
    });
    
    app.put('/users/:id' ,async (req, res) =>{
        try{
            res.send(await users.update(req.params.id, req.body))
        } catch(err){
            res.send({ code: 400, message: err.message || err })
        }
    });
    app.post('/users/login', async (req, res) =>{
        try {
            res.send(await users.login(req.body.email, req.body.pass))
        } catch (err) {
            res.send({ code: 400, message: err.message || err })
        }
    })

    app.post('/users/register', async (req, res) =>{
        try {
            res.send(await users.register(req.body))
        } catch (err) {
            res.send({ code: 400, message: err.message || err })
        }
    })
}
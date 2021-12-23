const users = require('./index');

module.exports = app =>{
    
    app.get('/users' ,async (req, res) =>{
        res.send(await users.read(req.query))
    });

    app.post('/users' ,async (req, res) =>{
        try{
            res.send(await users.create(req.body))
        }catch (err){
            res.send({ code: 400, message: error.message || error })
        }
    });
    
    app.put('/users/:id' ,async (req, res) =>{
        try{
            res.send(await users.update(req.params.id, req.body))
        } catch(err){
            res.send({ code: 400, message: error.message || error })
        }
    });
    app.post('/users/:email/:pass', async (req, res) =>{
        try {
            res.send(await users.login(req.params.email, req.params.pass))
        } catch (err) {
            res.send({ code: 400, message: error.message || error })
        }
    })
}
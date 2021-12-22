const mongoose = require('mongoose')

const
    userName = 'kalfada',
    pass = 'Mottiemmanuelle123',
    connectionString = `mongodb+srv://${userName}:${pass}@cluster0.d48l6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(connectionString)
    .then(res => {
        console.log('mongo connected')
    })
    .catch(()=>{
        throw 'mongo not connected'
    })
const mongoose = require('mongoose')

const
    userName = 'admin',
    pass = 'b',
    connectionString = `mongodb+srv://${userName}:${pass}@cluster0.bweik.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(connectionString)
    .then(res => {
        console.log(res)
    })
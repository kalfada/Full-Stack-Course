const express = require('express')

const app = express()

app.use(express.json())

app.get('/', function (req, res) {
    res.send('hello')
})

app.post('/', function (req, res) {
    res.send('hello')
})

app.put('/', function (req, res) {
    res.send('hello')
})

app.delete('/', function (req, res) {
    res.send('hello')
})
app.listen(3000, ()=> console.log('server is running'))
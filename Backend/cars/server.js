const express = require('express')

const app = express()

app.use(express.json())

let cars = [];

app.get('/', function(req, res){
    res.send('hello')
})

app.post('/cars/add', function(req, res){
    const {company, model, color, year, gear, sunroof} = req.body
    cars.push({company, model, color, year, gear, sunroof});
    res.send('saved');
})

app.post('/cars/get', function(req, res){
    res.send(cars);
})


app.listen(3000, () => console.log('server is on'))
const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static('public'))


let cars = [];
let cnt = 1;

app.post('/cars', function (req, res) {
    const { body } = req;
    body.id = cnt++;
    cars.push(body);
    res.send('success');
})

//Get car by ID, if there is no id send all cars
app.get('/cars/:id?', function (req, res) {
    const { id } = req.params
    if (id) {
        const car = cars.find(c => c.id == id);
        car ? res.send(car) : res.send(`car with id=${id} not exist`);
    } else {
        res.send(cars);
    }
});

app.put('/cars/:id', function (req, res) {
    const { body, params } = req;
    const { id } = params;

    const index = cars.findIndex(c => c.id == id);

    if (index == -1) {
        res.send(`car with id=${id} not exist`);
    } else {
        delete body.id
        cars[index] = { ...cars[index], ...body }
        res.send(cars[index])
    }
})

app.delete('/cars/:id', function (req, res) {
    const { id } = req.params

    const index = cars.findIndex(c => c.id == id)

    if (index == -1)
        res.send(`car with id=${id} not exist`)
    else {
        const deleted = cars[index]
        cars.splice(index, 1)
        res.send(deleted)
    }
});



app.listen(3000, () => console.log('server is running'))
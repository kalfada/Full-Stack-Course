const express = require('express')

const fs = require('fs');

const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static('public'))


let cars = [];
let cnt = 1;
function saveStorage() {
    fs.writeFile('cars.json', JSON.stringify(cars), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}

function updateFromStorage() {
    fs.readFile('cars.json', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}

//Add new car to the server array
app.post('/cars', function (req, res) {
    const { body } = req;
    body.id = cnt++;
    cars.push(body);
    saveStorage();
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
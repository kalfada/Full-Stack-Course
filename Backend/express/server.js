const express = require('express');

const app = express();

app.use(express.json())

app.get('/', function (req, res) {

    res.send('hello world')
})

app.get('/calc/:action', function (req, res) {
    const
        { params, query } = req,
        { num1, num2 } = query,
        { action } = params

    switch (action) {
        case 'sum':
            res.send(String(Number(num1) + Number(num2)))
            break;
        case 'sub':
            res.send(String(num1 - num2))
            break;
        case 'mul':
            res.send(String(num1 * num2))
            break;
        case 'div':
            res.send(String(num1 / num2))
            break;
        default:
            res.sendStatus(404)
            break;
    }
})

app.post('/calc', function (req, res) {
    let action = req.body.operator;
    let num1 = req.body.num1
    let num2 = req.body.num2

    switch (action) {
        case 'sum':
            res.send(String(Number(num1) + Number(num2)))
            break;
        case 'sub':
            res.send(String(num1 - num2))
            break;
        case 'mul':
            res.send(String(num1 * num2))
            break;
        case 'div':
            res.send(String(num1 / num2))
            break;
        default:
            res.sendStatus(404)
            break;
    }
})


app.listen(3000, () => console.log('server is running'));


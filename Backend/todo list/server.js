const express = require('express');

const fs = require('fs');

const app = express();

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static('public'))

let list = [];
let idCnt = 1;

function saveStorage() {
    fs.writeFile('todoList.json', JSON.stringify(list), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}

function updateFromStorage() {
    fs.readFile('todoList.json', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}

app.get('/list', function (req, res) {
    res.send(list)
})

app.get('/', function (req, res) {
    res.send('hello')    
})

app.post('/list', function (req, res) {
    const { body } = req
    body.id = idCnt++
    body.done = false
    list.push(body);
    saveStorage()
    res.send('success')
})
app.listen(3001, 'server is running')
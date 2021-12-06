const express = require('express');

const fs = require('fs');

const app = express();

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static('public'))

function saveJson(list) {
    fs.writeFile('todoList.json', JSON.stringify(list), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}

function getListFromJson() {
    return JSON.parse(fs.readFileSync('todoList.json', function (err, data) {

    }))
}

app.get('/list/:id?', function (req, res) {
    const { id } = req.params;
    if (id) {
        const mission = getListFromJson().find(mission => mission.id == id);
        mission ? res.send(mission) : res.send(`mission with id ${id} doesn't exist`);
    } else {
        res.send(getListFromJson())
    }
})


app.post('/list', function (req, res) {
    const { body } = req
    if (body.text != '') {
        let list = getListFromJson()
        if (list.length != 0) {
            body.id = list[list.length - 1].id + 1
        } else {
            body.id = 1
        }
        body.done = false
        list.push(body);
        saveJson(list)
        res.send('success')
    } else {
        res.send('invalid request')
    }
})

app.put('/done/:id', function (req, res) {
    const { id } = req.params
    let list = getListFromJson()
    const index = list.findIndex(mission => mission.id == id);
    if (index != -1) {
        list[index].done = !list[index].done
        saveJson(list);
        res.send('changed successfully');
    } else {
        res.send(`mission with id ${id} doesn't exist`);
    }
})

app.delete('/list/:id', function (req, res) {
    const { id } = req.params
    if (id) {
        let list = getListFromJson()
        const index = list.findIndex(mission => mission.id == id)
        index == -1 ? res.send(`not found`) :
            list.splice(index, 1)
        saveJson(list);
        res.send(`id ${id} deleted successfuly`)
    } else {
        res.send(`mission with id ${id} doesn't exist`);
    }
})
app.listen(3000, () => console.log('server is running'))
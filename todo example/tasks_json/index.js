const
    fs = require('fs'),
    uniqid = require('uniqid'),
    fileName = `${__dirname}/list.json`

if (!fs.existsSync(fileName))
    saveToJSON([])

//CRUD
//======================================================
function read() {
    return require(fileName)
}

function create(newTask) {
    const { text, done } = newTask

    if (!text)
        throw new Error(`field 'text' is require`)

    newTask = { text, done: Boolean(done), id: uniqid() }

    const list = read()
    list.push(newTask)

    saveToJSON(list)

    return newTask
}

function update(id) {
    const
        list = read(),
        index = getIndexById(list, id)

    list[index].done = !list[index].done

    saveToJSON(list)

    return list[index]
}

function del(id) {
    const
        list = read(),
        index = getIndexById(list, id),
        deleted = list[index]

    list.splice(index, 1)

    saveToJSON(list)

    return deleted
}


//EXPORT
//======================================================
module.exports = {
    read,
    create,
    update,
    delete: del
}


//INTERNAL
//======================================================
function saveToJSON(list) {
    fs.writeFileSync(fileName, JSON.stringify(list, null, 4))
}

function getIndexById(list, id) {
    const i = list.findIndex(t => t.id == id)
    if (i == -1)
        throw new Error(`Task with id '${id}' doesn't exist`)
    return i
}
require('./db')
const taskModel = require('./models/task')
const uniqid = require('uniqid')

function read(filter) {
    return taskModel.find(filter)
}

function create(newTask) {
    newTask.id = uniqid()
    return taskModel.create(newTask)

}

async function update(id) {
    const t = await read({ id: id })
    return taskModel.findOneAndUpdate({ id: id }, { done: !t[0].done }, { new: true })
}

function del(id) {
    return taskModel.findOneAndDelete({ id: id })
}
module.exports = { create, read, update, delete: del }
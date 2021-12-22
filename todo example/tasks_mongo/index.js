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
    const t = await read({ _id: id })
    return taskModel.findByIdAndUpdate(id, { done: !t[0].done }, { new: true })
}

function del(id) {
    return taskModel.findByIdAndDelete(id)
}
module.exports = { create, read, update, delete: del }
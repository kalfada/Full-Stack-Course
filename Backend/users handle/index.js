require('./db')
const userModel = require('./models/user')
const uniqid = require('uniqid')

function read(filter) {
    return userModel.find(filter)
}

function create(info) {
    return userModel.create(info)
}

async function update(id, updatedUser) {
    await userModel.findByIdAndUpdate(id, updatedUser)
    return read({_id: id})
}


module.exports = { read, create, update }
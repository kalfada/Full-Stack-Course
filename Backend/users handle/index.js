require('./db')
const userModel = require('./models/user')

function read(filter) {
    return userModel.find(filter)
}

function create(info) {
    return userModel.create(info)
}

function update(id, updatedUser) {
    updatedUser.lastSeen = Date.now()
    return userModel.findByIdAndUpdate(id, updatedUser, { new: true })
}

async function login(email, pass) {
    return await read({ email: email, pass: pass })
}


module.exports = { read, create, update, login }
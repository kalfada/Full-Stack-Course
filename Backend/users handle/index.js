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

async function login(mail, pass) {
    const user = await read({ email: mail })
    return !user.length ? 'email is wrong' :
    user[0].pass == pass ? 'connected' : 'wrong password'    
}


module.exports = { read, create, update, login }
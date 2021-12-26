require('./db')
const userModel = require('./models/user')
const bcrypt = require('bcryptjs')

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
    const user = await userModel.findOne({ email }, '+pass')

    if (!user) throw 'no such user'

    if (!bcrypt.compareSync(pass, user.pass))
        throw 'email and password not matched'
    user.lastSeen = Date.now()
    return read({ _id: user.id })
}

async function register(newUser) {
    const { firstName, lastName } = newUser

    if (!firstName || !lastName) throw 'name is required'
    newUser.name = `${firstName} ${lastName}`
    newUser.pass = bcrypt.hashSync(newUser.pass)
    newUser.lastSeen = Date.now()

    const u = await create(newUser)
    return await read({ _id: u.id })
}

module.exports = { read, create, update, login, register }
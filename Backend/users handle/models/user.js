const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    pass: {
        type: String,
        required: true,
        select: false
    },
    token: {
        type: String,
        select: false
    },
    lastSeen: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('user', schema);
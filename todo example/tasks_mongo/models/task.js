const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    text:{
        type: String,
        require: true
    },
    done: {
        type: Boolean,
        default: false
    }
})
module.exports = mongoose.model('task', schema)


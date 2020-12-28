const mongoose = require('mongoose')

const scores = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    firstTest: {
        type: Number
    },
    secondTest: {
        type: Number
    },
    thirdTest: {
        type: Number
    }
});

module.exports = mongoose.model('score', scores)
const mongoose = require('mongoose');

const boardSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        typr: String,
        required: true
    },
    createDate: {
        type: Date
    },
    userName: {
        type: String,
        required: true
    }
});

const Board = mongoose.model('Board', boardSchema);

module.exports = Board;
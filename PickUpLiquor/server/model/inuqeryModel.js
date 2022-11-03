const mongoose = require('mongoose');

const inquerySchema = mongoose.Schema({
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
    },
    category: {
        type: String,
        required: true
    }
});

const Inquery = mongoose.model('Inquery', inquerySchema);

module.exports = Inquery;
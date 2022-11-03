const mongoose = require('mongoose');

const faqModel = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    questionDate: {
        type: Date,
    },
    answerDate: {
        type: Date
    }
})
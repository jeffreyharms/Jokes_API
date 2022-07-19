const mongoose = require('mongoose')
const JokeSchema = new mongoose.Schema({
    setup : {
        type: String,
        required: [true,"setup required"],
        minlength: [10, "setup must be 10 characters"]
    },
    punchline : {
        type: String,
        required: [true,"punchline required"],
        minlength: [3, "punchline must be 3 characters"]
    },
},{timestamps:true})

module.exports = mongoose.model('Joke', JokeSchema)
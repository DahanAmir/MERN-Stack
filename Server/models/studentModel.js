const mongoose = require('mongoose')

let StudentSchema = new mongoose.Schema({
    name : String,
    faculty  :String,
    favMovie  :String,
    grades : [{profession : String, score : Number}]
})

module.exports = mongoose.model('students',StudentSchema)
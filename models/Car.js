const mongoose = require('mongoose')
const Schema= mongoose.Schema

const carSchema = new Schema({
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: Number,
    foreign: Boolean,
    bodyStyle: {
        type:String,
        enum:['SUV','Pick-up','Sport'],
        required:true
    },

    time:{
        type: Date,
        default: Date.now
    }
})

const Car= mongoose.model('Car', carSchema)


module.exports= Car
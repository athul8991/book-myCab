const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    vname:{
        type:String,
        required:true
    },
    pkm:{
        type:Number,
        required:true
    },
   imgname :{
        type:String,
        required:true
    }
}) 

module.exports = new mongoose.model('Vehicle',vehicleSchema);
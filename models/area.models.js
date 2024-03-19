const mongoose = require('mongoose');

const areaSchema = new mongoose.Schema({
    dist:{
        type:String,
        required:true
    },
    block:[
       ]
}) 

module.exports = new mongoose.model('Area',areaSchema);
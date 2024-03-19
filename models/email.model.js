const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    }
});

module.exports =new mongoose.model('Email',emailSchema);
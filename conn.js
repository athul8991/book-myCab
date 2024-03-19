const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://athuls8991:2880@cluster0.ityc9mx.mongodb.net/cabDb').then(
    ()=>{
        console.log('connected');
    }
).catch(err=>{
    console.log(err);
})
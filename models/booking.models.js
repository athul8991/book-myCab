const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
   userid:{
    type:mongoose.Types.ObjectId,
    ref:'User'
   },
   vehicleid:{
    type:mongoose.Types.ObjectId,
    ref:'Vehicle'
   },
    custname:{
        type:String,
        required:true
    },
    from:{
        frmdist:{type:String,required:true},
        frmblock:{type:String,required:true},
        frmlmark:{type:String,required:true}
    },
    to:{
        toblock:{type:String,required:true},
        todist:{type:String,required:true},
        tolmark:{type:String,required:true}
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    person:{
        type:Number,
        required:true
    },
    distance:{
        type:Number
    }
}) 

module.exports = new mongoose.model('Booking',bookingSchema);
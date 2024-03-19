const Vehicle = require('../models/vehicle.model');
const Area = require('../models/area.models');
const Booking = require('../models/booking.models')

module.exports.getVehicles = (req,res)=>{

    Vehicle.find().then(data=>{
        if(data.length<=0){
            return res.status(200).json({message:'no_data'})
        }
        
        return res.status(200).json({message:'success',data:data})
    }).catch(err=>{
        return res.status(200).json({message:'error'})

    })
}

module.exports.getArea = async (req,res)=>{

    Area.find().then(data=>{
        if(data.length<=0){
            return res.status(200).json({message:'no_data'})
        }

        return res.status(200).json({message:'success',data:data})
    }).catch(err=>{
        return res.status(200).json({message:'error'})

    })

}


module.exports.gettAllbookings = async(req,res)=>{

    console.log(req.userData);

    const filterOptions = {
        userid:req.userData ? req.userData.userid : null,
        status:req.query.status
    }

    Object.keys(filterOptions).forEach(item=>{

        if(filterOptions[item] == null || filterOptions[item] == 'null' || filterOptions[item] =='' ||filterOptions[item] == undefined ){
            delete filterOptions[item];
        }
    });
    
Booking.find(filterOptions).populate([{
    path:'userid',
    model:'User',
    select:['username']
},
{
    path:'vehicleid',
    model:'Vehicle'
}
]).then(data=>{

    if(data.length <=0){
        return res.status(200).json({message:'no_data'});
    }
    return res.status(200).json({message:'success',data:data});
}).catch(err=>{
    console.log(err);
    return res.status(200).json({message:'error'});
})

}


module.exports.getPersonBooking= async(req,res)=>{
    let {id} = req.query;

    const findData = await Booking.findById(id).populate([{path:'vehicleid',model:'Vehicle'},{path:'userid',model:'User',select:['email','username']}])

    // console.log(findData);

    if(findData){
        return res.status(200).json({message:'success',data:findData});
    }

    return res.status(200).json({message:'no_data'});
}
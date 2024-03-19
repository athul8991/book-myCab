const fs = require('fs');
const path = require('path')

const Vehicle = require('../models/vehicle.model');
const Area =require('../models/area.models');
const Booking = require('../models/booking.models')
const {data} = require('../data/state.data')

//////////////////////////////////// Vehicle /////////////////////////////////////////////

module.exports.addVehicles = async(req,res)=>{
    console.log(req.body);
    const data=JSON.parse(req.body.data)
    const {vname,pkm} = data;
    const imgname = req.imgName

    const findVehicle = await Vehicle.findOne({vname:vname});

    if(findVehicle){
        return res.status(200).json({message:'exists'});
    }

    const newVehicle = new Vehicle({
        vname : vname,
        pkm:pkm,
        imgname:imgname
    });

    newVehicle.save().then(info=>{
        return res.status(200).json({message:'success',data:info});
    }).catch(err=>{
        console.log(err);
        return res.status(200).json({message:'error'});
    })
}

module.exports.deleteVehicles = async(req,res)=>{
    const {id} =req.query;

    Vehicle.findByIdAndDelete(id).then(info=>{
        console.log(info)
        const imgPath = path.join(__dirname,'../uploads',info.imgname)
        fs.unlink(imgPath,(err)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log('success');
            }
        });
        return res.status(200).json({message:'success'});
    }).catch(err=>{
        console.log(err);
        return res.status(200).json({message:'error'});
    })
}

//////////////////////////////////// Area /////////////////////////////////////////////

module.exports.addArea =async (req,res)=>{

    const {dist,block} =req.body;

    // console.log(req.body);
    const findArea = await Area.findOne({dist:dist});

    if(findArea){

        block.forEach(item=>{

            const findBlock = findArea.block.find(itm =>item == itm);

            if(findBlock){
                console.log(findBlock);
            }else{
                console.log('no');
                findArea.block.push(item);
            }
        });

        findArea.save().then(info=>{
            return res.status(200).json({message:'success'});
        }).catch(err=>{
            return res.status(200).json({message:'error'});
        })

    }else{
        const newArea = new Area({
            dist:dist,
            block:[...block]
        });
        newArea.save().then(info=>{
            return res.status(200).json({message:'success'});
        }).catch(err=>{
            console.log(err);
            return res.status(200).json({message:'error'});
        })
    }
    
}

module.exports.deleteArea = async (req,res)=>{

    const {id} =req.query;

    Area.findByIdAndDelete(id).then(info=>{
        return res.status(200).json({message:'success'});
    }).catch(err=>{
        return res.status(200).json({message:'error'});
    })
    
}

module.exports.deleteBlock =async (req,res)=>{
    const {id,block} = req.query;

    const findArea = await  Area.findById(id);

    if(!findArea){
        return res.status(200).json({message:'no_data'});
    }

    const filterArray = findArea.block.filter(item=>item !=block);

    findArea.block = filterArray;
    
    findArea.save().then(info=>{
        return res.status(200).json({message:'success',data:info});
    }).catch(err=>{
        return res.status(200).json({message:'error'});
    })
}

module.exports.statusUpdate =async (req,res)=>{
    const {status,id} = req.body;

    Booking.findByIdAndUpdate(id,{status:status}).then(info=>{
        return res.status(200).json({message:'success'});
    }).catch(err=>{
        console.log(err);
        return res.status(200).json({message:'error'});
    });
}

module.exports.getAllArea = async (req,res)=>{
    res.status(200).json({message:'success',data:data});
}
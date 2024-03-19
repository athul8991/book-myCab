const multer = require('multer');
const path = require('path')
const Vehicle = require('../models/vehicle.model')

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads');
    },
    filename:(req,file,cb)=>{

        const fileName =  file.fieldname+"-"+Date.now()+path.extname(file.originalname);
        req.imgName = fileName;
        cb(null,fileName);

    }
});



const fileFilter = async (req,file,cb)=>{
    const data=JSON.parse(req.body.data)
    const {vname,pkm} = data;
    const findVehicle = await Vehicle.findOne({vname:vname});

    console.log(findVehicle);

    if(findVehicle){
        req.errorMsg = 'exists';
        console.log(req.errorMsg);
       return  cb(null,false);
    }else{
        if(file.mimetype ==='image/png' || file.mimetype ==='image/jpg' || file.mimetype ==='image/jpeg'|| file.mimetype ==='image/jpg)' ){
          return  cb(null,true);
    
        }else{
    
           return cb(null,false);
        }
    }

   
}

module.exports.upload =multer({storage:storage,fileFilter:fileFilter})
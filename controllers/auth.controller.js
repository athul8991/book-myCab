const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Admin = require('../models/admin.models');
const User = require('../models/user.models');

const Email = require('../models/email.model')

const sendMailer = require('../middleware/sendmail');


adminSecret = "my_admin_Secret_key_123490120";
userSecret = "my_user_Secret_key_123490120"

///////////////////////////////////////// Admin authentication /////////////////////////////////////////

module.exports.adminReg = async(req,res)=>{
 
    const {email,password,username}=req.body

    console.log(req.body);

    const findAdmin = await Admin.findOne({email:email});

    if(findAdmin){
        return res.status(200).json({message:'exists'});
    }

//    const hash = await bcrypt.hash(password,10);
    const hash = await bcrypt.hash(password,10);

    if(hash){
        const newAdmin = new Admin({
            email:email,
            password:hash,
            username:username,
            created:Date.now()
    
        })
    
        newAdmin.save().then(info=>{
            return res.status(200).json({message:'success'})
        }).catch(err=>{
            console.log(err);
            return res.status(200).json({message:'error'})
        })
    }
}

module.exports.adminLogin =async(req,res)=>{
    const {email,password} = req.body;
    console.log(req.body);
    const findAdmin = await Admin.findOne({email:email});

    if(!findAdmin){
        return res.status(200).json({message:'not_exists'});
    }

    const passCheck = await bcrypt.compare(password,findAdmin.password);

    if(!passCheck){
        return res.status(200).json({message:'incorrect_input'});
    }

    jwt.sign({adminId:findAdmin._id,username:findAdmin.username},adminSecret,(err,token)=>{
        if(err){
            console.log(err);
            return res.status(200).json({message:'error'});
        }

        return res.status(200).json({message:'success',token:token,user:'admin'});
    })
}


/////////////////////////////////////// User authentication /////////////////////////////////////////

module.exports.userReg = async(req,res)=>{
 
    const {email,password,username}=req.body

    const findUser = await User.findOne({email:email});

    if(findUser){
        return res.status(200).json({message:'exists'});
    }

   const hash = await bcrypt.hash(password,10);

   if(hash){
    const newUser = new User({
        email:email,
        password:hash,
        username:username,
        created:Date.now()

    })

    newUser.save().then(info=>{
        return res.status(200).json({message:'success'})
    }).catch(err=>{
        console.log(err);
        return res.status(200).json({message:'error'})
    })
}
}

module.exports.userLogin =async(req,res)=>{
    const {email,password} = req.body;

    const findUser = await User.findOne({email:email});

    if(!findUser){
        return res.status(200).json({message:'not_exists'});
    }

    const passCheck = await bcrypt.compare(password,findUser.password);

    if(!passCheck){
        return res.status(200).json({message:'incorrect_input'});
    }

    jwt.sign({userid:findUser._id,username:findUser.username},userSecret,(err,token)=>{
        if(err){
            console.log(err);
            return res.status(200).json({message:'error'});
        }

        return res.status(200).json({message:'success',token:token,user:'user'});
    })
}


module.exports.verifyEmail =async(req,res)=>{
    const {email} =req.body;

    try{

        const findUser = await User.findOne({email:email});

        if(findUser){
            return res.status(200).json({message:'exists'})
        }

        const newEmail = new Email({
            email:email
        });
        newEmail.save().then(info=>{
            sendMailer.mailoption.to =email;
            sendMailer.mailoption.html =
            `<div style="margin: auto; width: 400px;background-color: azure; padding:10px;border-radius:25px">
                 <div style="width: 80%;  margin: auto; text-align:left;">
                     <h2 style=" background-color: aliceblue;">Email confirmation mail</h2>
                     <hr>
                     <div >
                         <p><strong>email:</strong><em>${email}</em></p>
                         <p><strong>Register here:</strong><em>http://localhost:8080/auth/register/${info._id}</em></p>
             
                     </div>
                    
                 </div>
                 <div style="background-color: rgb(250, 184, 184);color: red;padding: 5px;">
                     <p>Please change the password when you login</p>
                 </div>
             </div>`;
            
            sendMailer.mailoption.subject ='New registration'    
            
            sendMailer.sendMail(sendMailer.mailoption);
            return res.status(200).json({message:'success'});
        }).catch(err=>{
            throw err
        })

    }catch(err){
        return res.status(200).json({message:'error'});
    }
}

module.exports.checkMail =async(req,res)=>{
    try{
    const {id} = req.query;
    const findEmail = await Email.findById(id);

    if(findEmail){
      return  res.status(200).json({message:'success',data:findEmail})
    }

    return res.status(200).json({message:'not_exists'});
}catch(err){
    return res.status(200).json({message:'error'});
}
}
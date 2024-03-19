const jwt = require('jsonwebtoken');

adminSecret="my_admin_Secret_key_123490120";
userSecret = "my_user_Secret_key_123490120";

module.exports.adminVerify =async (req,res,next)=>{
    const token = req.headers.authorization;

    if(!token){
        return res.status(200).json({message:'no_token'});
    }

    jwt.verify(token,adminSecret,(err,decode)=>{
        if(err){
            console.log(err);
            return res.status(200).json({message:'invalid_token'});
        }

        req.adminData = decode;
        next();
    })
}

module.exports.userVerify =async (req,res,next)=>{
    const token = req.headers.authorization;
    console.log(req.headers.authorization);
    // console.log(req.headers);

    if(!token){
        return res.status(200).json({message:'no_token'});
    }

    jwt.verify(token,userSecret,(err,decode)=>{
        if(err){
            console.log(err);
            return res.status(200).json({message:'invalid_token'});
        }

        console.log(decode);

        
        req.userData = decode;
        next();
    })
}
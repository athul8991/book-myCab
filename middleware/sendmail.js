const nodemailer = require('nodemailer');

const UserName ="frnds4future@gmail.com";
const Pass = "jzvo zelm czpp azig";

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth:{

        user:UserName,
        pass:Pass
    }
});

module.exports.sendMail = (mailoption)=>{

    transport.sendMail(mailoption,(err,info)=>{
        if(err){
            console.log(err);
        }else{
            console.log('success');
        }
    })

}

module.exports.mailoption ={
    from:{
        name:'BookMyCab',
        address:UserName
    },
    to:'',
    subject:'',
    html:``
}


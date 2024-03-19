require('dotenv').config();
require('./conn');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')


const authRoutes = require('./routes/auth.routes');
const adminRoutes = require('./routes/admin.routes');
const userRoutes = require('./routes/user.routes')
const commonRoutes = require('./routes/common.route')
const verifyController = require('./middleware/verify')

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(express.static('./uploads'))
app.use(express.static('./client/browser'));


app.get('/',(req,res)=>{
    console.log(req.hostname);
    res.status(200).json({message:'success'})
})

app.use('/api/auth',authRoutes);
app.use('/api/admin',verifyController.adminVerify,adminRoutes);
app.use('/api/user',verifyController.userVerify,userRoutes);
app.use('/api/common',commonRoutes);
app.use('/',(req,res)=>{
    res.send(path.join(__dirname,'client/browser/index.html'));
})


const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server run @${port}`);
})
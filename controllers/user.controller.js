const axios = require('axios');
const Booking = require('../models/booking.models');

const {data} = require('../data/state.data')

module.exports.addShedule = async (req,res)=>{
    const {frmdist,frmblock,frmlmark,todist,toblock,tolmark,...other} = req.body;
   
    const {userid} = req.userData;

    const landMark = await getLandMark(req.body);

    const distance = await getDistance(landMark);

    // console.log(landMark);

    // const userid = "65eab60bcaf5a8ba63f72aa7";
    

    const newBooking = new Booking({
        ...other,
        from:{
            frmdist:frmdist,
            frmblock:frmblock,
            frmlmark:frmlmark

        },
        to:{
            todist:todist,
            toblock:toblock,
            tolmark:tolmark

        },
        userid:userid,
        status:'pending',
        distance:Math.floor(distance*100)/100
    });

    newBooking.save().then(info=>{
     return res.status(200).json({message:'success',data:info});
    }).catch(err=>{
        console.log(err);
        return res.status(200).json({message:'error'});
    })
}

module.exports.getBookings = async (req,res)=>{

    // const userid = '65eab60bcaf5a8ba63f72aa7';
    const {userid} =req.userData;

   const userBookings = await Booking.find({userid:userid});

   if(userBookings.length<=0){
    return res.status(200).json({message:'no_data'});
   }
   return res.status(200).json({message:'success',data:userBookings});

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
  console.log(data);
    res.status(200).json({message:'success',data:data});
}


const getDistance =async (data)=>{

const options = {
  method: 'GET',
  url: 'https://distance-calculator8.p.rapidapi.com/calc',
  params: {
    startLatitude: data.from.latitude,
    startLongitude: data.from.longitude,
    endLatitude: data.to.latitude,
    endLongitude: data.to.longitude
  },
  headers: {
    'X-RapidAPI-Key': '7c32c9e1ecmshe2440211bb42e4ep17e2ffjsn7d83a812a823',
    'X-RapidAPI-Host': 'distance-calculator8.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	return response.data.body.distance.kilometers;
} catch (error) {
	console.error(error);
    return null
}

}


const getLandMark=async ({frmdist,frmblock,todist,toblock})=>{
    // const {frmdist,frmblock,todist,toblock} = req.body;

    const options = {
        method: 'GET',
        url: 'https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi',
        params: {
          address: ``
        },
        headers: {
          'X-RapidAPI-Key': '7c32c9e1ecmshe2440211bb42e4ep17e2ffjsn7d83a812a823',
          'X-RapidAPI-Host': 'address-from-to-latitude-longitude.p.rapidapi.com'
        }
      };

      
      
      try { 
         let data={from:'',to:''}
            options.params.address = `${frmdist},${frmblock}`
             let response = await axios.request(options);
             console.log(response.data);
            //  res.status(200).json({message:'success',data :response.data})
             data.from = response.data.Results[0];

             options.params.address = `${todist},${toblock}`
               response = await axios.request(options);
               data.to = response.data.Results[0];

             return data;

      } catch (error) {
          console.error(error);
          return null;
      }
}


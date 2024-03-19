const express = require('express');

const commonController = require('../controllers/common.controller')

const router = express.Router()

router.get('/vehicles',commonController.getVehicles);
router.get('/area',commonController.getArea);
router.get('/by-user',commonController.getPersonBooking);




module.exports = router;
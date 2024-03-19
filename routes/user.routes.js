const express = require('express');

const userController = require('../controllers/user.controller');
const commonController = require('../controllers/common.controller');



const router = express.Router();

router.post('/add-schedule',userController.addShedule);
router.get('/all-area',userController.getAllArea);
router.get('/all-booking',commonController.gettAllbookings);
router.put('/status-update',userController.statusUpdate);
// router.post('/getLandMark',userController.getLandMark);

module.exports = router;
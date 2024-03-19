const express =require('express');
const router = express.Router();

const upload = require('../middleware/img.upload');
const adminController = require('../controllers/admin.controller');
const commonController = require('../controllers/common.controller')

router.post('/add-vehicle',upload.upload.single('file'),adminController.addVehicles);
router.delete('/delete-vehicle',adminController.deleteVehicles)
router.post('/add-area',adminController.addArea);
router.delete('/delete-area',adminController.deleteArea);
router.delete('/delete-block',adminController.deleteBlock);

router.get('/all-area',adminController.getAllArea);

router.get('/all-booking',commonController.gettAllbookings);

router.put('/status-update',adminController.statusUpdate);

module.exports = router;
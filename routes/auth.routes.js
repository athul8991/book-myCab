const express = require('express');

const authController = require('../controllers/auth.controller')

const router = express.Router();



router.post('/admin-reg',authController.adminReg);
router.post('/admin-login',authController.adminLogin);

router.post('/user-reg',authController.userReg);
router.post('/user-login',authController.userLogin);

router.post('/verify-email',authController.verifyEmail);

router.get('/check-mail',authController.checkMail);

module.exports = router
const express = require('express');
const router = express.Router();
const homeController = require('../controller/homeController');

router.get('/signin', homeController.signin);






module.exports = router;
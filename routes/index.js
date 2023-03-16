const express = require('express');
const router = express.Router();
const homeController = require('../controller/homeController');

router.use('/user',require('./user'));

router.get('/', homeController.home);

module.exports = router;
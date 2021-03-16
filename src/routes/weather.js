const path = require('path');
const weatherController = require('../controllers/weather');

var express = require('express');
var router = express.Router();


router.get('/', weatherController.getWeather);

module.exports = router;
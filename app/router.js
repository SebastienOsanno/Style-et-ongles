// We require express

const express = require('express');

// We import our controller

const appController = require('./appController');

// We need to set up our router

const router = express.Router();

// We create our routes 

router.get('/', appController.homePage);


// We export the controller

module.exports = router;
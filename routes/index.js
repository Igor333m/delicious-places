const express = require('express');
const router = express.Router();
const storeRoute = require('./storeRoute');
const { catchErrors } = require('../handlers/errorHandlers');

// Do work here
router.get('/',);

// Store route
router.use('/api/store', storeRoute);

module.exports = router;
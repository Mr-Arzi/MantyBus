const express = require('express');
const router = express.Router();
const controller = require('../controllers/driverController');

router.get('/', controller.getAllDrivers);
router.post('/', controller.createDriver);
router.put('/:id', controller.updateDriver);
router.delete('/:id', controller.deleteDriver);

module.exports = router;

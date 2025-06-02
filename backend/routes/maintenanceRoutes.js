const express = require('express');
const router = express.Router();
const controller = require('../controllers/maintenanceController');

router.get('/', controller.getAllMaintenances);
router.post('/', controller.createMaintenance);
router.put('/:id', controller.updateMaintenance);
router.delete('/:id', controller.deleteMaintenance);

module.exports = router;

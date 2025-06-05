const express = require('express');
const router = express.Router();
const maintenanceReportController = require('../controllers/maintenanceReportController');

router.get('/', maintenanceReportController.getAllReports);
router.get('/:id', maintenanceReportController.getReportById);
router.post('/', maintenanceReportController.createReport);
router.put('/:id', maintenanceReportController.updateReport);
router.delete('/:id', maintenanceReportController.deleteReport);

module.exports = router;

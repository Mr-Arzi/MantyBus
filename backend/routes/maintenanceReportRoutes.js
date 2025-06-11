const express = require('express');
const router = express.Router();
const maintenanceReportController = require('../controllers/maintenanceReportController');

/* Este fragmento de código define rutas para una API RESTful que usa Express 
en Node.js. A continuación, se detalla la función de cada línea: */
router.get('/', maintenanceReportController.getAllReports);
router.get('/:id', maintenanceReportController.getReportById);
router.post('/', maintenanceReportController.createReport);
router.put('/:id', maintenanceReportController.updateReport);
router.delete('/:id', maintenanceReportController.deleteReport);

module.exports = router;

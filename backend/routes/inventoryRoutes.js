// backend/routes/inventoryRoutes.js

const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

// Ruta base: /api/inventory

router.get('/', inventoryController.listarRepuestos);
router.get('/:id', inventoryController.obtenerRepuesto);
router.post('/', inventoryController.crearRepuesto);
router.put('/:id', inventoryController.actualizarRepuesto);
router.delete('/:id', inventoryController.eliminarRepuesto);

module.exports = router;

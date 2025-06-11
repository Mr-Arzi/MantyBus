// backend/controllers/inventoryController.js

const InventoryPartRequestDTO = require('../dtos/request/inventoryPartRequest.dto');
const { validateInventoryPartRequest } = require('../validators/inventoryPartValidator');
const inventoryService = require('../services/inventoryService');

async function crearRepuesto(req, res) {
  try {
    validateInventoryPartRequest(req.body);
    const dto = new InventoryPartRequestDTO(req.body);

    const result = await inventoryService.registrarRepuesto(dto);
    res.status(201).json(result);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function listarRepuestos(req, res) {
  try {
    const result = await inventoryService.obtenerRepuestos();
    res.status(200).json(result);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function obtenerRepuesto(req, res) {
  try {
    const result = await inventoryService.obtenerRepuestoPorId(req.params.id);
    res.status(200).json(result);

  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

async function actualizarRepuesto(req, res) {
  try {
    validateInventoryPartRequest(req.body);
    const dto = new InventoryPartRequestDTO(req.body);

    const result = await inventoryService.actualizarRepuesto(req.params.id, dto);
    res.status(200).json(result);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function eliminarRepuesto(req, res) {
  try {
    await inventoryService.eliminarRepuesto(req.params.id);
    res.status(204).send(); // No Content

  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

module.exports = {
  crearRepuesto,
  listarRepuestos,
  obtenerRepuesto,
  actualizarRepuesto,
  eliminarRepuesto
};

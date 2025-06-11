// backend/repositories/inventoryRepository.js

const InventoryPart = require('../models/inventoryPartModel');

async function createInventoryPart(data) {
  return await InventoryPart.create(data);
}

async function getAllInventoryParts() {
  return await InventoryPart.findAll({ order: [['fecha_ingreso', 'DESC']] });
}

async function getInventoryPartById(id) {
  return await InventoryPart.findByPk(id);
}

async function updateInventoryPart(id, data) {
  const part = await InventoryPart.findByPk(id);
  if (!part) throw new Error('Repuesto no encontrado');
  return await part.update(data);
}

async function deleteInventoryPart(id) {
  const deleted = await InventoryPart.destroy({ where: { id } });
  if (!deleted) throw new Error('No se encontró el repuesto a eliminar');
  return deleted;
}

module.exports = {
  createInventoryPart,
  getAllInventoryParts,
  getInventoryPartById,
  updateInventoryPart,
  deleteInventoryPart
};

// backend/services/inventoryService.js

const {
  createInventoryPart,
  getAllInventoryParts,
  getInventoryPartById,
  updateInventoryPart,
  deleteInventoryPart
} = require('../repositories/inventoryRepository');

const InventoryPartResponseDTO = require('../dtos/response/inventoryPartResponse.dto');

async function registrarRepuesto(dto) {
  const data = await createInventoryPart(dto);
  return new InventoryPartResponseDTO(data);
}

async function obtenerRepuestos() {
  const lista = await getAllInventoryParts();
  return lista.map(item => new InventoryPartResponseDTO(item));
}

async function obtenerRepuestoPorId(id) {
  const item = await getInventoryPartById(id);
  if (!item) throw new Error('Repuesto no encontrado');
  return new InventoryPartResponseDTO(item);
}

async function actualizarRepuesto(id, dto) {
  const updated = await updateInventoryPart(id, dto);
  return new InventoryPartResponseDTO(updated);
}

async function eliminarRepuesto(id) {
  await deleteInventoryPart(id);
}

module.exports = {
  registrarRepuesto,
  obtenerRepuestos,
  obtenerRepuestoPorId,
  actualizarRepuesto,
  eliminarRepuesto
};

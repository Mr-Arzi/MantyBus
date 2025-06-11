// backend/validators/inventoryPartValidator.js

function validateInventoryPartRequest(body) {
  const { nombre, codigo, cantidad_disponible, fecha_ingreso, ubicacion, vida } = body;

  if (!nombre || typeof nombre !== 'string') {
    throw new Error("El campo 'nombre' es requerido y debe ser texto.");
  }

  if (!codigo || typeof codigo !== 'string') {
    throw new Error("El campo 'codigo' es requerido y debe ser texto.");
  }

  if (cantidad_disponible == null || isNaN(cantidad_disponible)) {
    throw new Error("El campo 'cantidad_disponible' es requerido y debe ser numérico.");
  }

  const fechaRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!fecha_ingreso || !fechaRegex.test(fecha_ingreso)) {
    throw new Error("El campo 'fecha_ingreso' debe estar en formato YYYY-MM-DD.");
  }

  if (!ubicacion || typeof ubicacion !== 'string') {
    throw new Error("El campo 'ubicacion' es requerido y debe ser texto.");
  }


}

module.exports = { validateInventoryPartRequest };

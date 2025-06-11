// backend/validators/sparePartValidator.js

function validateSparePartRequest(body) {
  const { nombre, codigo, cantidad, fecha, vida, busId } = body;

  if (!nombre || typeof nombre !== 'string') {
    throw new Error("El campo 'nombre' es requerido y debe ser texto");
  }

  if (!codigo || typeof codigo !== 'string') {
    throw new Error("El campo 'codigo' es requerido y debe ser texto");
  }

  if (cantidad == null || isNaN(cantidad) || cantidad < 0) {
    throw new Error("El campo 'cantidad' es requerido y debe ser un número mayor o igual a 0");
  }

  if (!fecha || isNaN(Date.parse(fecha))) {
    throw new Error("El campo 'fecha' es requerido y debe tener formato de fecha válido (YYYY-MM-DD)");
  }

  if (!vida || typeof vida !== 'string') {
    throw new Error("El campo 'vida' es requerido y debe ser texto");
  }

  if (!busId || typeof busId !== 'number' || busId <= 0) {
    throw new Error("El campo 'busId' es requerido y debe ser un número válido");
  }
}

module.exports = { validateSparePartRequest };


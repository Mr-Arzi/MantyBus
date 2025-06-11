// backend/validators/maintenanceValidator.js

function validateMaintenanceRequest(body) {
  const { motivo, fecha, busId } = body;

  if (!motivo || typeof motivo !== 'string') {
    throw new Error("El campo 'motivo' es requerido y debe ser texto");
  }

  if (!fecha || isNaN(Date.parse(fecha))) {
    throw new Error("El campo 'fecha' es requerido y debe tener formato de fecha válido (YYYY-MM-DD)");
  }

  if (!busId || typeof busId !== 'number' || busId <= 0) {
    throw new Error("El campo 'busId' es requerido y debe ser un número válido");
  }
}

module.exports = { validateMaintenanceRequest };

// backend/validators/maintenanceReportValidator.js

function validateMaintenanceReportRequest(body) {
  const { fecha_registro, responsable, tipo_mantenimiento, busId, kilometraje_actual } = body;

  if (!fecha_registro || !/^\d{4}-\d{2}-\d{2}$/.test(fecha_registro)) {
    throw new Error("El campo 'fecha_registro' es requerido y debe estar en formato YYYY-MM-DD");
  }

  if (!responsable || typeof responsable !== 'string') {
    throw new Error("El campo 'responsable' es requerido y debe ser texto");
  }

  if (!tipo_mantenimiento || typeof tipo_mantenimiento !== 'string') {
    throw new Error("El campo 'tipo_mantenimiento' es requerido y debe ser texto");
  }

  if (!busId || isNaN(busId)) {
    throw new Error("El campo 'busId' es requerido y debe ser un número");
  }

  if (kilometraje_actual == null || isNaN(kilometraje_actual)) {
    throw new Error("El campo 'kilometraje_actual' es requerido y debe ser numérico");
  }
}

module.exports = { validateMaintenanceReportRequest };

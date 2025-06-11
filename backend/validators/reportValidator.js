// backend/validators/reportValidator.js

function validateReportRequest(body) {
  const { fechaInicio, fechaFin, tipoReporte } = body;

  if (!fechaInicio || !fechaFin || !tipoReporte) {
    throw new Error("Todos los campos (fechaInicio, fechaFin, tipoReporte) son requeridos");
  }

  const tiposValidos = ['bus', 'driver', 'sparepart'];
  if (!tiposValidos.includes(tipoReporte)) {
    throw new Error(`El tipoReporte debe ser uno de: ${tiposValidos.join(', ')}`);
  }

  // Validación simple de formato YYYY-MM-DD
  const fechaRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!fechaRegex.test(fechaInicio) || !fechaRegex.test(fechaFin)) {
    throw new Error("Las fechas deben estar en formato YYYY-MM-DD");
  }
}

module.exports = { validateReportRequest };

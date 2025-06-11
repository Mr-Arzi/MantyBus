// backend/validators/busValidator.js

function validateBusRequest(body) {
  const { unidad, kmInicial, numViajes } = body;

  if (!unidad || typeof unidad !== 'string') {
    throw new Error("El campo 'unidad' es requerido y debe ser texto");
  }

  if (kmInicial == null || isNaN(kmInicial)) {
    throw new Error("El campo 'kmInicial' es requerido y debe ser numérico");
  }

  if (numViajes == null || isNaN(numViajes)) {
    throw new Error("El campo 'numViajes' es requerido y debe ser numérico");
  }
}

module.exports = { validateBusRequest };

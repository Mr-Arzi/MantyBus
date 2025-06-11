// backend/validators/driverValidator.js

function validateDriverRequest(body) {
  const { nombre, telefono, busId } = body;

  if (!nombre || typeof nombre !== 'string') {
    throw new Error("El campo 'nombre' es requerido y debe ser texto");
  }

  if (!telefono || !/^\d{10}$/.test(telefono)) {
    throw new Error("El campo 'telefono' debe contener 10 dígitos numéricos");
  }

  if (!busId || typeof busId !== 'number' || busId <= 0) {
    throw new Error("El campo 'busId' es requerido y debe ser un número válido");
  }
}


module.exports = { validateDriverRequest };

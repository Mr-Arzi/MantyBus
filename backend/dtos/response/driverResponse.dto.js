// backend/dtos/response/driverResponse.dto.js

class DriverResponseDTO {
  constructor({ id, nombre, telefono, busId }) {
    this.id = id;
    this.nombre = nombre;
    this.telefono = telefono;
    this.busId = busId;
  }
}

module.exports = DriverResponseDTO;


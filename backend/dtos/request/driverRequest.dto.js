// backend/dtos/request/driverRequest.dto.js

class DriverRequestDTO {
  constructor({ nombre, telefono, busId }) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.busId = busId;
  }
}

module.exports = DriverRequestDTO;

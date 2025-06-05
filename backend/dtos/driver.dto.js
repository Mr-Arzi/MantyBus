// backend/dtos/driver.dto.js

class DriverDto {
  constructor({ id, nombre, licencia, telefono }) {
    this.id = id;
    this.nombre = nombre;
    this.licencia = licencia;
    this.telefono = telefono;
  }
}

module.exports = DriverDto;

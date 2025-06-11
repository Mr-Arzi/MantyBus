// backend/dtos/request/maintenanceRequest.dto.js

class MaintenanceRequestDTO {
  constructor({ motivo, fecha, busId }) {
    this.motivo = motivo;
    this.fecha = fecha;
    this.busId = busId;
  }
}

module.exports = MaintenanceRequestDTO;


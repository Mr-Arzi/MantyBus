// backend/dtos/response/maintenanceResponse.dto.js

class MaintenanceResponseDTO {
  constructor({ id, motivo, fecha, busId }) {
    this.id = id;
    this.motivo = motivo;
    this.fecha = fecha;
    this.busId = busId;
  }
}

module.exports = MaintenanceResponseDTO;


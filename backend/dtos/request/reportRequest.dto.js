// backend/dtos/request/reportRequest.dto.js

class ReportRequestDTO {
  constructor({ fechaInicio, fechaFin, tipoReporte }) {
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
    this.tipoReporte = tipoReporte;
  }
}

module.exports = ReportRequestDTO;

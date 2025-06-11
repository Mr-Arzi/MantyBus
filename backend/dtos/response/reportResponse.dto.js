// backend/dtos/response/reportResponse.dto.js

class ReportResponseDTO {
  constructor({ resumen, datos, total }) {
    this.resumen = resumen; // Puede ser string como "Reporte de buses"
    this.datos = datos;     // Array de resultados
    this.total = total;     // Total de elementos o resumen numérico
  }
}

module.exports = ReportResponseDTO;

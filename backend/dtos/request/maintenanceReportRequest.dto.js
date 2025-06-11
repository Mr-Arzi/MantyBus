// backend/dtos/request/maintenanceReportRequest.dto.js

class MaintenanceReportRequestDTO {
  constructor({
    fecha_registro,
    responsable,
    tipo_mantenimiento,
    verificado,
    kilometraje_actual,
    sintomas,
    condiciones,
    tiempo_reparacion,
    repuestos_usados,
    reparaciones_realizadas,
    aprobacion_supervisor,
    proximo_mantenimiento,
    resultados_pruebas,
    busId
  }) {
    this.fecha_registro = fecha_registro;
    this.responsable = responsable;
    this.tipo_mantenimiento = tipo_mantenimiento;
    this.verificado = verificado;
    this.kilometraje_actual = kilometraje_actual;
    this.sintomas = sintomas;
    this.condiciones = condiciones;
    this.tiempo_reparacion = tiempo_reparacion;
    this.repuestos_usados = repuestos_usados;
    this.reparaciones_realizadas = reparaciones_realizadas;
    this.aprobacion_supervisor = aprobacion_supervisor;
    this.proximo_mantenimiento = proximo_mantenimiento;
    this.resultados_pruebas = resultados_pruebas;
    this.busId = busId;
  }
}

module.exports = MaintenanceReportRequestDTO;

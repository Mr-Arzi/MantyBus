const repo = require('../repositories/maintenanceReportRepository');
const MaintenanceReportDto = require('../dtos/response/maintenanceReportResponse.dto');

/**
* La función `getAllReports` recupera todos los informes de mantenimiento de un repositorio y los devuelve como
* una matriz de objetos `MaintenanceReportDto`.
* @returns Se devuelve una matriz de objetos MaintenanceReportDto.
*/
async function getAllReports() {
  const reports = await repo.getAll();
  return reports.map(report => new MaintenanceReportDto(report));
}

/**
* Esta función recupera un informe de mantenimiento por su ID y lo devuelve como un objeto 
de transferencia de datos (DTO) si se encuentra; de lo contrario, devuelve nulo.
* @param id: el parámetro `id` es el identificador único del informe de mantenimiento que se desea recuperar.
* @returns: la función `getReportById` devuelve un objeto `MaintenanceReportDto` si se encuentra el informe 
según el `id` proporcionado. Si no se encuentra el informe (es decir, `null`), se devuelve `null`.
*/
async function getReportById(id) {
  const report = await repo.getById(id);
  return report ? new MaintenanceReportDto(report) : null;
}

/**
* La función `createReport` crea asincrónicamente un informe de mantenimiento basado en los datos proporcionados.
* @param data - El parámetro `data` de la función `createReport` probablemente contiene la información necesaria
* para crear un informe de mantenimiento. Estos datos pueden incluir detalles como las tareas de mantenimiento
* realizadas, la fecha del mantenimiento, el equipo o las áreas atendidas, los problemas encontrados y cualquier 
otra información relevante necesaria para generar un informe de mantenimiento.
* @returns Se devuelve un nuevo objeto MaintenanceReportDto.
*/
async function createReport(data) {
  const report = await repo.create(data);
  return new MaintenanceReportDto(report);
}

/**
* La función `updateReport` actualiza asincrónicamente un informe con el `id` especificado utilizando los `data` proporcionados.
* @param id: El parámetro `id` suele ser un identificador único que se utiliza para especificar qué informe
* debe actualizarse. Puede ser un entero, una cadena o cualquier otro tipo de dato que identifique de forma única
* el informe en el sistema.
* @param data: Los datos son la información que se desea actualizar en el informe. Pueden incluir cualquier
* cambio o adición que deba realizarse al informe identificado por el ID proporcionado.
* @returns: La función `updateReport` devuelve una promesa que se resolverá como el resultado de
* llamar a la función `repo.update` con los parámetros `id` y `data` proporcionados.
*/
async function updateReport(id, data) {
  return await repo.update(id, data);
}

/**
* La función `deleteReport` elimina asincrónicamente un informe con el `id` especificado mediante un método del repositorio.
* @param id: el parámetro `id` es el identificador único del informe que se desea eliminar del repositorio.
* @returns: la función `deleteReport` devuelve una promesa que se resolverá como el resultado de llamar a `repo.remove(id)`.
*/
async function deleteReport(id) {
  return await repo.remove(id);
}

module.exports = {
  getAllReports,
  getReportById,
  createReport,
  updateReport,
  deleteReport,
};

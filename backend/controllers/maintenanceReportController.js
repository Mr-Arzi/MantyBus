const service = require('../services/maintenanceReportService');
const MaintenanceReportRequestDTO = require('../dtos/request/maintenanceReportRequest.dto');
const MaintenanceReportResponseDTO = require('../dtos/response/maintenanceReportResponse.dto');
const { validateMaintenanceReportRequest } = require('../validators/maintenanceReportValidator');

/* Este fragmento de código define una función llamada `getAllReports` 
que se exporta como parte de un módulo en Node.js. Esta función es asincrónica 
y gestiona un objeto de solicitud y uno de respuesta 
(comúnmente denominados `req` y `res`, respectivamente). */
exports.getAllReports = async (req, res) => {
  const data = await service.getAllReports();
  res.json(data);
};

/* Este fragmento de código define una función llamada `getReportById` 
que se exporta como parte de un módulo en Node.js. Esta función es 
asíncrona y gestiona un objeto de solicitud y respuesta.
Dentro de la función, espera una llamada a `getReportById` desde el módulo 
`maintenanceReportService`, pasando `req.params.id` como argumento. Una vez recuperados los datos, 
envía una respuesta JSON con los datos al cliente a través del método `res.json(data)`. */
exports.getReportById = async (req, res) => {
  const data = await service.getReportById(req.params.id);
  res.json(data);
};

/* Este fragmento de código define una función llamada `createReport` que se exporta como 
parte de un módulo en Node.js. Esta función es asincrónica y gestiona un objeto de solicitud y respuesta. */
exports.createReport = async (req, res) => {
  try {
    validateMaintenanceReportRequest(req.body);
    const requestDto = new MaintenanceReportRequestDTO(req.body);

    const nuevoReporte = await service.create(requestDto);
    const responseDto = new MaintenanceReportResponseDTO(nuevoReporte);

    res.status(201).json(responseDto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/* La función `exports.updateReport` define una función asincrónica que 
maneja un objeto de solicitud y respuesta en un módulo Node.js. */
exports.updateReport = async (req, res) => {
  await service.updateReport(req.params.id, req.body);
  res.sendStatus(204);
};

/* La función `exports.deleteReport` define una función asíncrona que gestiona 
un objeto de solicitud y respuesta en un módulo Node.js. Dentro de esta función, e
spera una llamada a la función `deleteReport` desde el módulo `maintenanceReportService`, 
pasando `req.params.id` como argumento. Una vez completada la operación de eliminación, 
envía un código de estado 204 al cliente mediante `res.sendStatus(204)`. Esto indica que 
la operación se realizó correctamente y que no se devuelve ningún contenido en la respuesta. */
exports.deleteReport = async (req, res) => {
  await service.deleteReport(req.params.id);
  res.sendStatus(204);
};

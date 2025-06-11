const { Sequelize } = require('sequelize');
const Reporte = require('../models/maintenanceReportModel');
const { Op } = require('sequelize');

const ReportRequestDTO = require('../dtos/request/reportRequest.dto');
const ReportResponseDTO = require('../dtos/response/reportResponse.dto');
const { validateReportRequest } = require('../validators/reportValidator');

const obtenerEstadisticas = async (req, res) => {
  try {
    // Validar los datos que vienen en el query
    validateReportRequest(req.query);

    // Convertir el query en un DTO de entrada
    const requestDto = new ReportRequestDTO(req.query);
    const { fechaInicio, fechaFin, tipoReporte } = requestDto;

    // Consultar agrupación por tipo de mantenimiento
    const porFalla = await Reporte.findAll({
      attributes: [
        'tipo_mantenimiento',
        [Sequelize.fn('COUNT', '*'), 'total']
      ],
      where: {
        fecha_registro: {
          [Op.between]: [fechaInicio, fechaFin]
        }
      },
      group: ['tipo_mantenimiento']
    });

    // Consultar agrupación por fecha
    const porFecha = await Reporte.findAll({
      attributes: [
        [Sequelize.fn('DATE', Sequelize.col('fecha_registro')), 'fecha'],
        [Sequelize.fn('COUNT', '*'), 'total']
      ],
      where: {
        fecha_registro: {
          [Op.between]: [fechaInicio, fechaFin]
        }
      },
      group: ['fecha'],
      order: [['fecha', 'ASC']]
    });

    // Crear DTO de respuesta
    const responseDto = new ReportResponseDTO({
      porFalla: porFalla.map(r => ({
        tipo: r.tipo_mantenimiento,
        total: parseInt(r.dataValues.total)
      })),
      porFecha: porFecha.map(r => ({
        fecha: r.dataValues.fecha,
        total: parseInt(r.dataValues.total)
      }))
    });

    res.status(200).json(responseDto);

  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = { obtenerEstadisticas };
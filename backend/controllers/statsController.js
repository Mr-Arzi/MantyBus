const { Sequelize } = require('sequelize');
const Reporte = require('../models/statsModel');
const { Op } = require('sequelize');

const obtenerEstadisticas = async (req, res) => {
  const { inicio, fin } = req.query;

  try {
    const porFalla = await Reporte.findAll({
      attributes: ['tipo_mantenimiento', [Sequelize.fn('COUNT', '*'), 'total']],
      where: {
        fecha_registro: {
          [Op.between]: [inicio, fin]
        }
      },
      group: ['tipo_mantenimiento']
    });

    const porFecha = await Reporte.findAll({
      attributes: [
        [Sequelize.fn('DATE', Sequelize.col('fecha_registro')), 'fecha'],
        [Sequelize.fn('COUNT', '*'), 'total']
      ],
      where: {
        fecha_registro: {
          [Op.between]: [inicio, fin]
        }
      },
      group: ['fecha'],
      order: [['fecha', 'ASC']]
    });

    res.json({
      porFalla: porFalla.map(r => ({
        tipo: r.tipo_mantenimiento,
        total: parseInt(r.dataValues.total)
      })),
      porFecha: porFecha.map(r => ({
        fecha: r.dataValues.fecha,
        total: parseInt(r.dataValues.total)
      }))
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener estadísticas' });
  }
};
module.exports = { obtenerEstadisticas };

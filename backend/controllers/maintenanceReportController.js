const Report = require('../models/maintenanceReportModel');
const Bus = require('../models/busModel'); 

exports.getAllReports = async (req, res) => {
  try {
    const reports = await Report.findAll({
      include: [{ model: Bus }]
    });
    res.json(reports);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener reportes' });
  }
};

exports.getReportById = async (req, res) => {
  const report = await Report.findByPk(req.params.id);
  if (!report) return res.status(404).json({ error: 'Reporte no encontrado' });
  res.json(report);
};

exports.createReport = async (req, res) => {
  try {
    const { busId, ...resto } = req.body;

    // ✅ Verificar si existe el bus
    const bus = await Bus.findByPk(busId);
    if (!bus) {
      return res.status(400).json({ error: 'El autobús no existe' });
    }

    // ✅ Crear el reporte con los demás campos
    const nuevo = await Report.create({ busId, ...resto });
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateReport = async (req, res) => {
  try {
    const report = await Report.findByPk(req.params.id);
    if (!report) return res.status(404).json({ error: 'No encontrado' });
    await report.update(req.body);
    res.json(report);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteReport = async (req, res) => {
  try {
    const report = await Report.findByPk(req.params.id);
    if (!report) return res.status(404).json({ error: 'No encontrado' });
    await report.destroy();
    res.json({ message: 'Eliminado' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

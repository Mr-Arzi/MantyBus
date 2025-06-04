const service = require('../services/maintenanceReportService');

exports.getAllReports = async (req, res) => {
  const data = await service.getAllReports();
  res.json(data);
};

exports.getReportById = async (req, res) => {
  const data = await service.getReportById(req.params.id);
  res.json(data);
};

exports.createReport = async (req, res) => {
  const data = await service.createReport(req.body);
  res.status(201).json(data);
};

exports.updateReport = async (req, res) => {
  await service.updateReport(req.params.id, req.body);
  res.sendStatus(204);
};

exports.deleteReport = async (req, res) => {
  await service.deleteReport(req.params.id);
  res.sendStatus(204);
};

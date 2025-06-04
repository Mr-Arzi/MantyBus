const repo = require('../repositories/maintenanceReportRepository');

async function getAllReports() {
  return await repo.getAll();
}

async function getReportById(id) {
  return await repo.getById(id);
}

async function createReport(data) {
  // Aquí podrías validar datos antes de guardar
  return await repo.create(data);
}

async function updateReport(id, data) {
  return await repo.update(id, data);
}

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

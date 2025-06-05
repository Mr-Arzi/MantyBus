const repo = require('../repositories/maintenanceReportRepository');
const MaintenanceReportDto = require('../dtos/maintenanceReport.dto');

async function getAllReports() {
  const reports = await repo.getAll();
  return reports.map(report => new MaintenanceReportDto(report));
}

async function getReportById(id) {
  const report = await repo.getById(id);
  return report ? new MaintenanceReportDto(report) : null;
}

async function createReport(data) {
  const report = await repo.create(data);
  return new MaintenanceReportDto(report);
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

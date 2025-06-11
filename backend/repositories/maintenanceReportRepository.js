const MaintenanceReport = require('../models/maintenanceReportModel');

/**
* El código define operaciones CRUD para un modelo MaintenanceReport en JavaScript.
*/
const getAll = () => MaintenanceReport.findAll();
const getById = (id) => MaintenanceReport.findByPk(id);
const create = (data) => MaintenanceReport.create(data);
const update = (id, data) => MaintenanceReport.update(data, { where: { id } });
const remove = (id) => MaintenanceReport.destroy({ where: { id } });

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};

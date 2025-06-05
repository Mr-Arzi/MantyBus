const Maintenance = require('../models/maintenanceModel');

const getAll = () => Maintenance.findAll();
const getById = (id) => Maintenance.findByPk(id);
const create = (data) => Maintenance.create(data);
const update = (id, data) => Maintenance.update(data, { where: { id } });
const remove = (id) => Maintenance.destroy({ where: { id } });

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};

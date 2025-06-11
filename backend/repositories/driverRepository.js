const Driver = require('../models/driverModel');

const getAll = () => Driver.findAll();
const getById = (id) => Driver.findByPk(id);
const create = (data) => Driver.create(data);
const update = (id, data) => Driver.update(data, { where: { id } });
const remove = (id) => Driver.destroy({ where: { id } });

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};

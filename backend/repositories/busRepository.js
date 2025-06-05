const Bus = require('../models/busModel');

const getAll = () => Bus.findAll();
const getById = (id) => Bus.findByPk(id);
const create = (data) => Bus.create(data);
const update = (id, data) => Bus.update(data, { where: { id } });
const remove = (id) => Bus.destroy({ where: { id } });

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};

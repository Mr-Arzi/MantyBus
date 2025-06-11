const SparePart = require('../models/sparePartModel');

const getAll = () => SparePart.findAll();
const getById = (id) => SparePart.findByPk(id);
const create = (data) => SparePart.create(data);
const update = (id, data) => SparePart.update(data, { where: { id } });
const remove = (id) => SparePart.destroy({ where: { id } });

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};

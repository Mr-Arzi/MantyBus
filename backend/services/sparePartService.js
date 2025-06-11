const repo = require('../repositories/sparePartRepository');
const SparePartDto = require('../dtos/response/sparePartResponse.dto');

async function getAll() {
  const repuestos = await repo.getAll();
  return repuestos.map(repuesto => new SparePartDto(repuesto));
}

async function getById(id) {
  const repuesto = await repo.getById(id);
  return repuesto ? new SparePartDto(repuesto) : null;
}

async function create(data) {
  const repuesto = await repo.create(data);
  return new SparePartDto(repuesto);
}

async function update(id, data) {
  return await repo.update(id, data);
}

async function remove(id) {
  return await repo.remove(id);
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};

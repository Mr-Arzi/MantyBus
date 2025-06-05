const repo = require('../repositories/maintenanceRepository');

async function getAll() {
  return await repo.getAll();
}

async function getById(id) {
  return await repo.getById(id);
}

async function create(data) {
  return await repo.create(data);
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

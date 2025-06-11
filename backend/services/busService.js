const repo = require('../repositories/busRepository');
const BusDto = require('../dtos/response/busResponse.dto');

async function getAll() {
  const buses = await repo.getAll();
  return buses.map(bus => new BusDto(bus)); 
}

async function getById(id) {
  const bus = await repo.getById(id);
  return bus ? new BusDto(bus) : null;
}

async function create(data) {
  const bus = await repo.create(data);
  return new BusDto(bus);
}

async function update(id, data) {
  await repo.update(id, data);
}

async function remove(id) {
  await repo.remove(id);
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};

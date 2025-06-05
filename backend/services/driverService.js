const repo = require('../repositories/driverRepository');
const DriverDto = require('../dtos/driver.dto');

async function getAll() {
  const drivers = await repo.getAll();
  return drivers.map(driver => new DriverDto(driver));
}

async function getById(id) {
  const driver = await repo.getById(id);
  return driver ? new DriverDto(driver) : null;
}

async function create(data) {
  const driver = await repo.create(data);
  return new DriverDto(driver);
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
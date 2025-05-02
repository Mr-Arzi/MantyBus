const Driver = require('../models/driverModel');

exports.getAllDrivers = async (req, res) => {
  const drivers = await Driver.findAll();
  res.json(drivers);
};

exports.createDriver = async (req, res) => {
  try {
    const { nombre, telefono, unidad } = req.body;
    const nuevo = await Driver.create({ nombre, telefono, unidad });
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateDriver = async (req, res) => {
  try {
    const driver = await Driver.findByPk(req.params.id);
    if (!driver) return res.status(404).json({ error: 'No encontrado' });
    await driver.update(req.body);
    res.json(driver);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteDriver = async (req, res) => {
  try {
    const driver = await Driver.findByPk(req.params.id);
    if (!driver) return res.status(404).json({ error: 'No encontrado' });
    await driver.destroy();
    res.json({ message: 'Eliminado' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

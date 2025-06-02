const Driver = require('../models/driverModel');
const Bus = require('../models/busModel');

exports.getAllDrivers = async (req, res) => {
  try {
    const drivers = await Driver.findAll({
      include: [{ model: Bus }]
    });
    res.json(drivers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener conductores' });
  }
};
exports.createDriver = async (req, res) => {
  try {
    const { nombre, telefono, unidad, busId } = req.body;

    // Validar que el bus exista
    const bus = await Bus.findByPk(busId);
    if (!bus) {
      return res.status(400).json({ error: 'El autobús no existe' });
    }

    // Crear chofer solo si el bus existe
    const nuevo = await Driver.create({ nombre, telefono, unidad, busId });
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

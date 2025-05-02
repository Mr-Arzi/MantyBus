const Bus = require('../models/busModel');

exports.getAllBuses = async (req, res) => {
  try {
    const buses = await Bus.findAll();
    res.json(buses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createBus = async (req, res) => {
  try {
    const { unidad, kmInicial, kmFinal, numViajes } = req.body;
    const nuevoBus = await Bus.create({ unidad, kmInicial, kmFinal, numViajes });
    res.status(201).json(nuevoBus);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateBus = async (req, res) => {
  try {
    const bus = await Bus.findByPk(req.params.id);
    if (!bus) return res.status(404).json({ error: 'Bus no encontrado' });
    await bus.update(req.body);
    res.json(bus);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteBus = async (req, res) => {
  try {
    const bus = await Bus.findByPk(req.params.id);
    if (!bus) return res.status(404).json({ error: 'Bus no encontrado' });
    await bus.destroy();
    res.json({ message: 'Bus eliminado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

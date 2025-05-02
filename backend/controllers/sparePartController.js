const SparePart = require('../models/sparePartModel');

exports.getAllSpareParts = async (req, res) => {
  const repuestos = await SparePart.findAll();
  res.json(repuestos);
};

exports.createSparePart = async (req, res) => {
  try {
    const { nombre, unidad, codigo, cantidad, fecha, vida } = req.body;
    const nuevo = await SparePart.create({ nombre, unidad, codigo, cantidad, fecha, vida });
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateSparePart = async (req, res) => {
  try {
    const repuesto = await SparePart.findByPk(req.params.id);
    if (!repuesto) return res.status(404).json({ error: 'No encontrado' });
    await repuesto.update(req.body);
    res.json(repuesto);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteSparePart = async (req, res) => {
  try {
    const repuesto = await SparePart.findByPk(req.params.id);
    if (!repuesto) return res.status(404).json({ error: 'No encontrado' });
    await repuesto.destroy();
    res.json({ message: 'Eliminado' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

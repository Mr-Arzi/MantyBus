const SparePart = require('../models/sparePartModel');
const Bus = require('../models/busModel');

exports.getAllSpareParts = async (req, res) => {
  try {
    const repuestos = await SparePart.findAll({
      include: [{ model: Bus }]
    });
    res.json(repuestos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener repuestos' });
  }
};

exports.createSparePart = async (req, res) => {
  try {
    const { nombre, codigo, cantidad, fecha, vida, busId } = req.body;

    // ✅ Verificar que el bus exista
    const bus = await Bus.findByPk(busId);
    if (!bus) {
      return res.status(400).json({ error: 'El autobús no existe' });
    }

    // ✅ Crear el repuesto
    const nuevo = await SparePart.create({ nombre, codigo, cantidad, fecha, vida, busId });
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

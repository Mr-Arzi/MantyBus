const Maintenance = require('../models/maintenanceModel');
const Bus = require('../models/busModel'); 

exports.getAllMaintenances = async (req, res) => {
  try {
    const mantenimientos = await Maintenance.findAll({
      include: [{ model: Bus }]
    });
    res.json(mantenimientos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener mantenimientos' });
  }
};

exports.createMaintenance = async (req, res) => {
  try {
    const { unidad, motivo, fecha, busId } = req.body;

    // ✅ Validar que el autobús exista
    const bus = await Bus.findByPk(busId);
    if (!bus) {
      return res.status(400).json({ error: 'El autobús no existe' });
    }

    // ✅ Crear el mantenimiento
    const nuevo = await Maintenance.create({ unidad, motivo, fecha, busId });
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateMaintenance = async (req, res) => {
  try {
    const mantenimiento = await Maintenance.findByPk(req.params.id);
    if (!mantenimiento) return res.status(404).json({ error: 'No encontrado' });
    await mantenimiento.update(req.body);
    res.json(mantenimiento);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteMaintenance = async (req, res) => {
  try {
    const mantenimiento = await Maintenance.findByPk(req.params.id);
    if (!mantenimiento) return res.status(404).json({ error: 'No encontrado' });
    await mantenimiento.destroy();
    res.json({ message: 'Eliminado' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

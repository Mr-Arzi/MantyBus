const service = require('../services/maintenanceService');
const MaintenanceRequestDTO = require('../dtos/request/maintenanceRequest.dto');
const MaintenanceResponseDTO = require('../dtos/response/maintenanceResponse.dto');
const { validateMaintenanceRequest } = require('../validators/maintenanceValidator');

exports.getAll = async (req, res) => {
  const data = await service.getAll();
  res.json(data);
};

exports.getById = async (req, res) => {
  const data = await service.getById(req.params.id);
  res.json(data);
};

exports.create = async (req, res) => {
try {
    validateMaintenanceRequest(req.body);
    const requestDto = new MaintenanceRequestDTO(req.body);

    const nuevoMantenimiento = await service.create(requestDto);
    const responseDto = new MaintenanceResponseDTO(nuevoMantenimiento);

    res.status(201).json(responseDto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  await service.update(req.params.id, req.body);
  res.sendStatus(204);
};

exports.remove = async (req, res) => {
  await service.remove(req.params.id);
  res.sendStatus(204);
};

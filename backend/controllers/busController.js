const service = require('../services/busService');
const BusRequestDTO = require('../dtos/request/busRequest.dto');
const BusResponseDTO = require('../dtos/response/busResponse.dto');
const { validateBusRequest } = require('../validators/busValidator');


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
    // Validar datos de entrada
    validateBusRequest(req.body);

    // Crear DTO de entrada
    const requestDto = new BusRequestDTO(req.body);

    // Crear autobús en el servicio
    const newBus = await service.create(requestDto);

    // Crear DTO de respuesta
    const responseDto = new BusResponseDTO(newBus);

    // Respuesta con código 201
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


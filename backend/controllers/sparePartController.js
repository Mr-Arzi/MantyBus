const service = require('../services/sparePartService');
const SparePartRequestDTO = require('../dtos/request/sparePartRequest.dto');
const SparePartResponseDTO = require('../dtos/response/sparePartResponse.dto');
const { validateSparePartRequest } = require('../validators/sparePartValidator');

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
    validateSparePartRequest(req.body);
    const requestDto = new SparePartRequestDTO(req.body);

    const nuevoRepuesto = await service.create(requestDto);
    const responseDto = new SparePartResponseDTO(nuevoRepuesto);

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

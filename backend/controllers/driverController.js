const service = require('../services/driverService');
const DriverRequestDTO = require('../dtos/request/driverRequest.dto');
const DriverResponseDTO = require('../dtos/response/driverResponse.dto');
const { validateDriverRequest } = require('../validators/driverValidator');

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
    validateDriverRequest(req.body);
    const requestDto = new DriverRequestDTO(req.body);

    const newDriver = await service.create(requestDto);
    const responseDto = new DriverResponseDTO(newDriver);

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



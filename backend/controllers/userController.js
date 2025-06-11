const service = require('../services/userService');

exports.getAll = async (req, res) => {
  const data = await service.getAll();
  res.json(data);
};

exports.getById = async (req, res) => {
  const data = await service.getById(req.params.id);
  res.json(data);
};

exports.create = async (req, res) => {
  const data = await service.create(req.body);
  res.status(201).json(data);
};

exports.update = async (req, res) => {
  await service.update(req.params.id, req.body);
  res.sendStatus(204);
};

exports.remove = async (req, res) => {
  await service.remove(req.params.id);
  res.sendStatus(204);
};

exports.login = async (req, res) => {
   

  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Usuario y contraseña requeridos" });
  }

  const user = await service.login(username, password);
  if (!user) {
    return res.status(401).json({ message: "Credenciales incorrectas" });
  }

  res.json(user);
};


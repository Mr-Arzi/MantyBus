const { User, getUserByUsername } = require('../models/userModel');



const getUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username } });

  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'Credenciales incorrectas' });
  }

  res.json({ username: user.username, role: user.role });
};

const createUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const exists = await User.findOne({ where: { username } });
    if (exists) return res.status(400).json({ error: 'Ya existe ese usuario' });

    const nuevo = await User.create({ username, password });
    res.json(nuevo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al crear usuario' });
  }
};

module.exports = { getUsers, login, createUser };
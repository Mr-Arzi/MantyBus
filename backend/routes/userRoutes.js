/*const express = require('express');
const router = express.Router(); //no tocar

const { getUsers } = require('../controllers/userController');
const { getUserByUsername } = require('../models/userModel');


// Endpoint: obtener lista de usuarios
router.get('/users', getUsers);

// Endpoint: login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await getUserByUsername(username);

  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'Usuario o contraseña incorrectos' });
  }

  res.json({ message: 'Inicio de sesión exitoso', username: user.username });
});

module.exports = router;
*/
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAll);
router.get('/:id', userController.getById);
router.post('/', userController.create);
router.put('/:id', userController.update);
router.delete('/:id', userController.remove);
router.post('/login', userController.login);


module.exports = router;

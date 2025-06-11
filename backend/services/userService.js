const repo = require('../repositories/userRepository');
const UserDto = require('../dtos/response/userResponse.dto');

async function getAll() {
  const users = await repo.getAll();
  return users.map(user => new UserDto(user));
}

async function getById(id) {
  console.log("📌 ID recibido:", id);
  const user = await repo.getById(id);
  return user ? new UserDto(user) : null;
}

async function create(data) {
  const user = await repo.create(data);
  return new UserDto(user);
}

async function update(id, data) {
  return await repo.update(id, data);
}

async function remove(id) {
  return await repo.remove(id);
}

async function login(username, password) {
  const user = await repo.getByUsername(username);
  
  if (!user) return null;
  if (user.password !== password) return null;

  return {
    id: user.id,
    usuario: user.username,
    role: user.role
  };
}


module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  login, 
};

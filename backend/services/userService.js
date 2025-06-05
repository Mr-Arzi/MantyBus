const repo = require('../repositories/userRepository');

async function getAll() {
  return await repo.getAll();
}

async function getById(id) {
  console.log("📌 ID recibido:", id);
  return await repo.getById(id);
}

async function create(data) {
  return await repo.create(data);
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

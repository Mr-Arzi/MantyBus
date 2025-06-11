function validateUserRequest(data) {
  if (!data.username || typeof data.username !== 'string') {
    throw new Error('El nombre de usuario es obligatorio.');
  }

  if (!data.password || typeof data.password !== 'string') {
    throw new Error('La contraseña es obligatoria.');
  }

  if (data.role && typeof data.role !== 'string') {
    throw new Error('El rol debe ser una cadena.');
  }
}

module.exports = { validateUserRequest };

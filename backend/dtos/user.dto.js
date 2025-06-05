// backend/dtos/user.dto.js

class UserDto {
  constructor({ id, usuario, rol }) {
    this.id = id;
    this.usuario = usuario;
    this.rol = rol;
  }
}

module.exports = UserDto;

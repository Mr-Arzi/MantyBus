class UserRequestDTO {
  constructor({ username, password, role }) {
    this.username = username;
    this.password = password;
    this.role = role || 'usuario'; // por si no lo mandan, usamos default
  }
}

module.exports = UserRequestDTO;

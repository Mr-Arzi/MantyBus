class UserResponseDTO {
  constructor({ id, username, role }) {
    this.id = id;
    this.username = username;
    this.role = role;
    // 🚫 No incluimos password por seguridad
  }
}

module.exports = UserResponseDTO;

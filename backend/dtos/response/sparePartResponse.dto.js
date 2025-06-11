// backend/dtos/response/sparePartResponse.dto.js

class SparePartResponseDTO {
  constructor({ id, nombre, codigo, cantidad, fecha, vida, busId }) {
    this.id = id;
    this.nombre = nombre;
    this.codigo = codigo;
    this.cantidad = cantidad;
    this.fecha = fecha;
    this.vida = vida;
    this.busId = busId;
  }
}

module.exports = SparePartResponseDTO;

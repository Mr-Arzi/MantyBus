// backend/dtos/request/sparePartRequest.dto.js

class SparePartRequestDTO {
  constructor({ nombre, codigo, cantidad, fecha, vida, busId }) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.cantidad = cantidad;
    this.fecha = fecha;
    this.vida = vida;
    this.busId = busId;
  }
}

module.exports = SparePartRequestDTO;


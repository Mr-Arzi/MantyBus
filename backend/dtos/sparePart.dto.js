// backend/dtos/sparePart.dto.js

class SparePartDto {
  constructor({ id, nombre, descripcion, cantidad, unidad }) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.cantidad = cantidad;
    this.unidad = unidad;
  }
}

module.exports = SparePartDto;

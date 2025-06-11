// backend/dtos/response/inventoryPartResponse.dto.js

class InventoryPartResponseDTO {
  constructor({ id, nombre, codigo, cantidad_disponible, fecha_ingreso, ubicacion, vida }) {
    this.id = id;
    this.nombre = nombre;
    this.codigo = codigo;
    this.cantidad_disponible = cantidad_disponible;
    this.fecha_ingreso = fecha_ingreso;
    this.ubicacion = ubicacion;
  }
}

module.exports = InventoryPartResponseDTO;

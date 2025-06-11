// backend/dtos/request/inventoryPartRequest.dto.js

class InventoryPartRequestDTO {
  constructor({ nombre, codigo, cantidad_disponible, fecha_ingreso, ubicacion, vida }) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.cantidad_disponible = cantidad_disponible;
    this.fecha_ingreso = fecha_ingreso;
    this.ubicacion = ubicacion;
    
  }
}

module.exports = InventoryPartRequestDTO;

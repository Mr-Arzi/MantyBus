// backend/dtos/bus.dto.js

class BusDto {
  constructor({ id, unidad, kmInicial, kmFinal, numViajes, vida }) {
    this.id = id;
    this.unidad = unidad;
    this.kmInicial = kmInicial;
    this.kmFinal = kmFinal;
    this.numViajes = numViajes;
    this.vida = vida;
  }
}

module.exports = BusDto;

// backend/dtos/response/busResponse.dto.js

class BusResponseDTO {
  constructor({ id, unidad, kmInicial, kmFinal, numViajes, vida }) {
    this.id = id;
    this.unidad = unidad;
    this.kmInicial = kmInicial;
    this.kmFinal = kmFinal;
    this.numViajes = numViajes;
    this.vida = vida;
  }
}

module.exports = BusResponseDTO;

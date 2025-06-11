// backend/dtos/request/busRequest.dto.js

class BusRequestDTO {
  constructor({ unidad, kmInicial, numViajes }) {
    this.unidad = unidad;
    this.kmInicial = kmInicial;
    this.numViajes = numViajes;
  }
}

module.exports = BusRequestDTO;

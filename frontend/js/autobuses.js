const apiURL = 'http://localhost:3000/api/buses';

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('guardarBtn').addEventListener('click', guardarBus);
  document.getElementById('limpiarBtn').addEventListener('click', limpiarFormulario);
  document.getElementById('buscador').addEventListener('input', buscarUnidad);

  cargarBuses();
});

async function cargarBuses() {
  const res = await fetch(apiURL);
  const buses = await res.json();
  const cuerpo = document.getElementById('cuerpoTabla');
  cuerpo.innerHTML = '';
  buses.forEach(bus => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${bus.unidad}</td>
      <td>${bus.kmInicial}</td>
      <td>${bus.kmFinal}</td>
      <td>${bus.numViajes}</td>
      <td>${bus.vida || ''}</td>
      <td>
        <button onclick='editarBus(${JSON.stringify(bus)})'>✏️</button>
        <button onclick='eliminarBus(${bus.id})'>🗑️</button>
      </td>
    `;
    cuerpo.appendChild(fila);
  });
}

async function guardarBus() {
  const id = document.getElementById('busId').value;
  const unidad = document.getElementById('unidad').value;
  const kmInicial = parseInt(document.getElementById('kmInicial').value);
  const kmFinal = parseInt(document.getElementById('kmFinal').value);
  const numViajes = parseInt(document.getElementById('numViajes').value);

  const bus = { unidad, kmInicial, kmFinal, numViajes };

  const url = id ? `${apiURL}/${id}` : apiURL;
  const method = id ? 'PUT' : 'POST';

  const res = await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bus)
  });

  if (res.ok) {
    limpiarFormulario();
    cargarBuses();
  } else {
    const error = await res.json();
    alert(`Error al guardar: ${error.error}`);
  }
}

function editarBus(bus) {
  document.getElementById('busId').value = bus.id;
  document.getElementById('unidad').value = bus.unidad;
  document.getElementById('kmInicial').value = bus.kmInicial;
  document.getElementById('kmFinal').value = bus.kmFinal;
  document.getElementById('numViajes').value = bus.numViajes;
}

async function eliminarBus(id) {
  if (!confirm('¿Estás seguro de eliminar este autobús?')) return;

  const res = await fetch(`${apiURL}/${id}`, { method: 'DELETE' });

  if (res.ok) {
    cargarBuses();
  } else {
    const error = await res.json();
    alert(`Error al eliminar: ${error.error}`);
  }
}

function limpiarFormulario() {
  document.getElementById('busId').value = '';
  document.getElementById('unidad').value = '';
  document.getElementById('kmInicial').value = '';
  document.getElementById('kmFinal').value = '';
  document.getElementById('numViajes').value = '';
}

function buscarUnidad() {
  const texto = document.getElementById('buscador').value.toLowerCase();
  const filas = document.querySelectorAll('#tablaBuses tbody tr');
  filas.forEach(fila => {
    const unidad = fila.children[0].textContent.toLowerCase();
    fila.style.display = unidad.includes(texto) ? '' : 'none';
  });
}

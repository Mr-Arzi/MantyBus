const apiURL = 'http://localhost:3000/api/drivers';

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('guardarBtn').addEventListener('click', guardarConductor);
  document.getElementById('limpiarBtn').addEventListener('click', limpiarFormulario);
  document.getElementById('buscador').addEventListener('input', buscarUnidad);
  cargarConductores();
});


async function cargarUnidades() {
  const respuesta = await fetch('http://localhost:3000/api/buses');
  const buses = await respuesta.json();
  const select = document.getElementById('busId');
  buses.forEach(bus => {
    const opcion = document.createElement('option');
    opcion.value = bus.id;
    opcion.textContent = `${bus.unidad} (ID: ${bus.id})`;
    select.appendChild(opcion);
  });
}

document.addEventListener('DOMContentLoaded', cargarUnidades);




async function cargarConductores() {
  const res = await fetch(apiURL);
  const drivers = await res.json();
  const cuerpo = document.getElementById('cuerpoTabla');
  cuerpo.innerHTML = '';
  drivers.forEach(driver => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${driver.nombre}</td>
      <td>${driver.telefono}</td>
      <td>${driver.unidad}</td>
      <td>
        <button onclick='editarConductor(${JSON.stringify(driver)})'>✏️</button>
        <button onclick='eliminarConductor(${driver.id})'>🗑️</button>
      </td>
    `;
    cuerpo.appendChild(fila);
  });
}

async function guardarConductor() {
  const id = document.getElementById('driverId').value;
  const nombre = document.getElementById('nombre').value;
  const telefono = document.getElementById('telefono').value;
  const busId = document.getElementById('busId').value;

  const conductor = { nombre, telefono, busId };
  const url = id ? `${apiURL}/${id}` : apiURL;
  const method = id ? 'PUT' : 'POST';

  const res = await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(conductor)
  });

  if (res.ok) {
    limpiarFormulario();
    cargarConductores();
  } else {
    const error = await res.json();
    alert(`Error al guardar: ${error.error}`);
  }
}

function editarConductor(driver) {
  document.getElementById('driverId').value = driver.id;
  document.getElementById('nombre').value = driver.nombre;
  document.getElementById('telefono').value = driver.telefono;
  document.getElementById('unidad').value = driver.unidad;
}

async function eliminarConductor(id) {
  if (!confirm('¿Estás seguro de eliminar este conductor?')) return;

  const res = await fetch(`${apiURL}/${id}`, { method: 'DELETE' });

  if (res.ok) {
    cargarConductores();
  } else {
    const error = await res.json();
    alert(`Error al eliminar: ${error.error}`);
  }
}

function limpiarFormulario() {
  document.getElementById('driverId').value = '';
  document.getElementById('nombre').value = '';
  document.getElementById('telefono').value = '';
  document.getElementById('unidad').value = '';
}

function buscarUnidad() {
  const texto = document.getElementById('buscador').value.toLowerCase();
  const filas = document.querySelectorAll('#tablaConductores tbody tr');
  filas.forEach(fila => {
    const unidad = fila.children[2].textContent.toLowerCase();
    fila.style.display = unidad.includes(texto) ? '' : 'none';
  });
}

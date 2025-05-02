const apiURL = 'http://localhost:3000/api/repuestos';

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('guardarBtn').addEventListener('click', guardarRepuesto);
  document.getElementById('limpiarBtn').addEventListener('click', limpiarFormulario);
  document.getElementById('buscador').addEventListener('input', buscarRepuesto);
  cargarRepuestos();
});

async function cargarRepuestos() {
  const res = await fetch(apiURL);
  const repuestos = await res.json();
  const cuerpo = document.getElementById('cuerpoTabla');
  cuerpo.innerHTML = '';
  repuestos.forEach(rep => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${rep.nombre}</td>
      <td>${rep.unidad}</td>
      <td>${rep.codigo}</td>
      <td>${rep.cantidad}</td>
      <td>${rep.fecha}</td>
      <td>${rep.vida || ''}</td>
      <td>
        <button onclick='editarRepuesto(${JSON.stringify(rep)})'>✏️</button>
        <button onclick='eliminarRepuesto(${rep.id})'>🗑️</button>
      </td>
    `;
    cuerpo.appendChild(fila);
  });
}

async function guardarRepuesto() {
  const id = document.getElementById('repuestoId').value;
  const nombre = document.getElementById('nombre').value;
  const unidad = document.getElementById('unidad').value;
  const codigo = document.getElementById('codigo').value;
  const cantidad = parseInt(document.getElementById('cantidad').value);
  const fecha = document.getElementById('fecha').value;

  const repuesto = { nombre, unidad, codigo, cantidad, fecha };
  const url = id ? `${apiURL}/${id}` : apiURL;
  const method = id ? 'PUT' : 'POST';

  const res = await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(repuesto)
  });

  if (res.ok) {
    limpiarFormulario();
    cargarRepuestos();
  } else {
    const error = await res.json();
    alert(`Error al guardar: ${error.error}`);
  }
}

function editarRepuesto(rep) {
  document.getElementById('repuestoId').value = rep.id;
  document.getElementById('nombre').value = rep.nombre;
  document.getElementById('unidad').value = rep.unidad;
  document.getElementById('codigo').value = rep.codigo;
  document.getElementById('cantidad').value = rep.cantidad;
  document.getElementById('fecha').value = rep.fecha;
}

async function eliminarRepuesto(id) {
  if (!confirm('¿Estás seguro de eliminar este repuesto?')) return;
  const res = await fetch(`${apiURL}/${id}`, { method: 'DELETE' });
  if (res.ok) {
    cargarRepuestos();
  } else {
    const error = await res.json();
    alert(`Error al eliminar: ${error.error}`);
  }
}

function limpiarFormulario() {
  document.getElementById('repuestoId').value = '';
  document.getElementById('nombre').value = '';
  document.getElementById('unidad').value = '';
  document.getElementById('codigo').value = '';
  document.getElementById('cantidad').value = '';
  document.getElementById('fecha').value = '';
}

function buscarRepuesto() {
  const texto = document.getElementById('buscador').value.toLowerCase();
  const filas = document.querySelectorAll('#tablaRepuestos tbody tr');
  filas.forEach(fila => {
    const nombre = fila.children[0].textContent.toLowerCase();
    fila.style.display = nombre.includes(texto) ? '' : 'none';
  });
}

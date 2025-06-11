const apiURL = 'http://localhost:3000/api/reportes';
let reporteSeleccionado = null;

document.addEventListener('DOMContentLoaded', () => {
  cargarReportes();
  document.getElementById('buscador').addEventListener('input', buscarUnidad);
});

async function cargarReportes() {
  const res = await fetch(apiURL);
  const datos = await res.json();
  const cuerpo = document.getElementById('cuerpoTabla');
  cuerpo.innerHTML = '';
  datos.forEach(r => {
    const fila = document.createElement('tr');
    fila.onclick = () => seleccionarFila(fila, r);
    fila.innerHTML = `
      <td>${r.unidad}</td>
      <td>${r.fecha_registro}</td>
      <td>${r.responsable}</td>
      <td>${r.tipo_mantenimiento}</td>
      <td>${r.verificado ? '✅' : '❌'}</td>
      <td>
        <button onclick="verReporte(${r.id}, event)">👁️</button>
      </td>
    `;
    cuerpo.appendChild(fila);
  });
}

function seleccionarFila(fila, reporte) {
  const filas = document.querySelectorAll('tr');
  filas.forEach(f => f.classList.remove('seleccionado'));
  fila.classList.add('seleccionado');
  reporteSeleccionado = reporte;
}

function nuevoReporte() {
  localStorage.removeItem('reporteSeleccionado');
  window.location.href = 'detalle_reporte.html';
}

function verReporte(id = null, event = null) {
  if (event) event.stopPropagation();
  const idReporte = id || (reporteSeleccionado && reporteSeleccionado.id);
  if (!idReporte) {
    alert('Selecciona un reporte primero');
    return;
  }
  localStorage.setItem('reporteSeleccionado', idReporte);
  window.location.href = 'detalle_reporte.html';
}

function buscarUnidad() {
  const texto = document.getElementById('buscador').value.toLowerCase();
  const filas = document.querySelectorAll('#tablaReportes tbody tr');
  filas.forEach(f => {
    const unidad = f.children[0].textContent.toLowerCase();
    f.style.display = unidad.includes(texto) ? '' : 'none';
  });
}

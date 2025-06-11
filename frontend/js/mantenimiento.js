const apiURL = 'http://localhost:3000/api/mantenimientos';

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('guardarBtn').addEventListener('click', guardarMantenimiento);
  document.getElementById('limpiarBtn').addEventListener('click', limpiarFormulario);
  document.getElementById('buscador').addEventListener('input', buscarUnidad);
  cargarMantenimientos();
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



async function cargarMantenimientos() {
    const res = await fetch(apiURL);
    const datos = await res.json();
    const cuerpo = document.getElementById('cuerpoTabla');
    cuerpo.innerHTML = '';
    mostrarNotificaciones(datos);
  
    datos.forEach(m => {
        const fila = document.createElement('tr');
        const fechaMant = new Date(m.fecha);
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);
        fechaMant.setHours(0, 0, 0, 0);
        const diff = Math.floor((fechaMant - hoy) / (1000 * 60 * 60 * 24));
      
        // Asignar clase por estado
        let clase = '';
        if (diff === 0) clase = 'hoy';
        else if (diff > 0 && diff <= 3) clase = 'proximo';
        else if (diff < 0) clase = 'pasado';
      
        fila.className = clase;
      
        fila.innerHTML = `
          <td>${m.unidad}</td>
          <td>${m.fecha}</td>
          <td>${m.motivo}</td>
          <td>
            <button onclick='editarMantenimiento(${JSON.stringify(m)})'>✏️</button>
            <button onclick='eliminarMantenimiento(${m.id})'>🗑️</button>
          </td>
        `;
        cuerpo.appendChild(fila);
      });
      
  }
  

async function guardarMantenimiento() {
  const id = document.getElementById('mantenimientoId').value;
  const busId = document.getElementById('busId').value;
  const motivo = document.getElementById('motivo').value;
  const fecha = document.getElementById('fecha').value;

  const data = { busId, motivo, fecha };
  const url = id ? `${apiURL}/${id}` : apiURL;
  const method = id ? 'PUT' : 'POST';

  const res = await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  if (res.ok) {
    limpiarFormulario();
    cargarMantenimientos();
  } else {
    const error = await res.json();
    alert(`Error: ${error.error}`);
  }
}

function editarMantenimiento(m) {
  document.getElementById('mantenimientoId').value = m.busId;
  document.getElementById('unidad').value = m.unidad;
  document.getElementById('motivo').value = m.motivo;
  document.getElementById('fecha').value = m.fecha;
}

async function eliminarMantenimiento(id) {
  if (!confirm('¿Eliminar mantenimiento?')) return;
  const res = await fetch(`${apiURL}/${id}`, { method: 'DELETE' });
  if (res.ok) {
    cargarMantenimientos();
  } else {
    const error = await res.json();
    alert(`Error: ${error.error}`);
  }
}

function limpiarFormulario() {
  document.getElementById('mantenimientoId').value = '';
  document.getElementById('unidad').value = '';
  document.getElementById('motivo').value = '';
  document.getElementById('fecha').value = '';
}

function buscarUnidad() {
  const texto = document.getElementById('buscador').value.toLowerCase();
  const filas = document.querySelectorAll('#tablaMantenimientos tbody tr');
  filas.forEach(f => {
    const unidad = f.children[0].textContent.toLowerCase();
    f.style.display = unidad.includes(texto) ? '' : 'none';
  });
}

function mostrarNotificaciones(mantenimientos) {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
  
    mantenimientos.forEach(m => {
      const fechaMant = new Date(m.fecha);
      fechaMant.setHours(0, 0, 0, 0);
      const diff = Math.floor((fechaMant - hoy) / (1000 * 60 * 60 * 24));
  
      if (diff === 0) {
        alert(`🚨 Mantenimiento programado HOY para la unidad ${m.unidad}`);
      } else if (diff > 0 && diff <= 3) {
        alert(`⏳ Mantenimiento en ${diff} día(s) para la unidad ${m.unidad}`);
      }
    });
  }
  
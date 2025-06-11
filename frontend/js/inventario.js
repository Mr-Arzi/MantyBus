const URL_API = 'http://localhost:3000/api/inventory';

document.addEventListener('DOMContentLoaded', () => {
  cargarInventario();

document.getElementById('form-inventario').addEventListener('submit', async e => {
  e.preventDefault();
  const form = e.target;
  const datos = Object.fromEntries(new FormData(form).entries());

  const id = datos.id;
  delete datos.id;

  const url = id ? `${URL_API}/${id}` : URL_API;
  const method = id ? 'PUT' : 'POST';

  try {
    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datos)
    });

    if (res.ok) {
      alert(id ? 'Repuesto actualizado ✅' : 'Repuesto registrado ✅');
      form.reset();
      document.getElementById('btn-guardar').textContent = '💾 Guardar';
      cargarInventario();
    } else {
      const err = await res.json();
      alert(`Error: ${err.error}`);
    }
  } catch (err) {
    alert('Error al conectar con el servidor.');
  }
  });
});

async function cargarInventario() {
  const tbody = document.querySelector('#tabla-inventario tbody');
  tbody.innerHTML = '';

  try {
    const res = await fetch(URL_API);
    const repuestos = await res.json();

repuestos.forEach(r => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${r.nombre}</td>
    <td>${r.codigo}</td>
    <td>${r.cantidad_disponible}</td>
    <td>${r.fecha_ingreso}</td>
    <td>${r.ubicacion || ''}</td>
    <td>
      <button onclick='editarRepuesto(${JSON.stringify(r)})'>✏️</button>
      <button onclick='eliminarRepuesto(${r.id})'>🗑</button>
    </td>
  `;
  tbody.appendChild(row);
});

  } catch (err) {
    console.error('Error cargando inventario:', err);
  }
}

async function eliminarRepuesto(id) {
  if (!confirm('¿Eliminar este repuesto?')) return;

  try {
    const res = await fetch(`${URL_API}/${id}`, { method: 'DELETE' });
    if (res.status === 204) {
      cargarInventario();
    } else {
      const err = await res.json();
      alert(`Error: ${err.error}`);
    }
  } catch (err) {
    alert('No se pudo eliminar');
  }
}

function limpiarFormulario() {
  document.getElementById('form-inventario').reset();
}

function buscarRepuesto() {
  const filtro = document.getElementById('buscador').value.toLowerCase();
  const filas = document.querySelectorAll('#tabla-inventario tbody tr');

  filas.forEach(fila => {
    const texto = fila.innerText.toLowerCase();
    fila.style.display = texto.includes(filtro) ? '' : 'none';
  });
}

function editarRepuesto(repuesto) {
  const form = document.getElementById('form-inventario');
  form.nombre.value = repuesto.nombre;
  form.codigo.value = repuesto.codigo;
  form.cantidad_disponible.value = repuesto.cantidad_disponible;
  form.fecha_ingreso.value = repuesto.fecha_ingreso;
  form.ubicacion.value = repuesto.ubicacion;
  document.getElementById('repuesto-id').value = repuesto.id;
  document.getElementById('btn-guardar').textContent = '✏️ Actualizar';
}


function cancelarEdicion() {
  document.getElementById('form-inventario').reset();
  document.getElementById('repuesto-id').value = '';
  document.getElementById('btn-guardar').textContent = '💾 Guardar';
}

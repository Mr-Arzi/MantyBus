const apiURL = 'http://localhost:3000/api/reportes';
const id = localStorage.getItem('reporteSeleccionado');

document.addEventListener('DOMContentLoaded', () => {
  if (id) cargarReporte(id);

  document.getElementById('guardarBtn').addEventListener('click', guardarReporte);
  document.getElementById('eliminarBtn').addEventListener('click', eliminarReporte);
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


async function cargarReporte(id) {
  const res = await fetch(`${apiURL}/${id}`);
  const r = await res.json();
  for (const key in r) {
    const el = document.getElementById(key);
    if (el) {
      if (el.type === 'checkbox') el.checked = r[key];
      else el.value = r[key] ?? '';
    }
  }
}

async function guardarReporte() {
  const datos = {};
  document.querySelectorAll('input, textarea, select').forEach(el => {
    if (el.type === 'checkbox') {
      datos[el.id] = el.checked;
    } else {
      datos[el.id] = el.value;
    }
  });


  datos.busId = parseInt(datos.busId);

  const res = await fetch(id ? `${apiURL}/${id}` : apiURL, {
    method: id ? 'PUT' : 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos)
  });

  if (res.ok) {
    alert('Reporte guardado correctamente');
    localStorage.removeItem('reporteSeleccionado');
    window.location.href = 'reportes.html';
  } else {
    const error = await res.json();
    alert(`Error: ${error.error}`);
  }
}

async function eliminarReporte() {
  if (!id || !confirm('¿Eliminar este reporte?')) return;

  const res = await fetch(`${apiURL}/${id}`, { method: 'DELETE' });
  if (res.ok) {
    alert('Reporte eliminado');
    localStorage.removeItem('reporteSeleccionado');
    window.location.href = 'reportes.html';
  } else {
    const error = await res.json();
    alert(`Error: ${error.error}`);
  }
}

function exportarPDF() {
  if (!window.jspdf || !window.jspdf.jsPDF) {
    console.error("jsPDF no está disponible.");
    return;
  }

  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF();

  const unidadSelect = document.getElementById('busId');
  const unidadTexto = unidadSelect?.options[unidadSelect.selectedIndex]?.textContent || "Desconocida";

  const datos = {
    fecha: document.getElementById('fecha_registro')?.value || "",
    responsable: document.getElementById('responsable')?.value || "",
    tipo: document.getElementById('tipo_mantenimiento')?.value || "",
    verificado: document.getElementById('verificado')?.checked ? 'Sí' : 'No',
    kilometraje: document.getElementById('kilometraje_actual')?.value || "",
    sintomas: document.getElementById('sintomas')?.value || "",
    condiciones: document.getElementById('condiciones')?.value || "",
    tiempo: document.getElementById('tiempo_reparacion')?.value || "",
    repuestos: document.getElementById('repuestos_usados')?.value || "",
    reparaciones: document.getElementById('reparaciones_realizadas')?.value || "",
    supervisor: document.getElementById('aprobacion_supervisor')?.value || "",
    proximo: document.getElementById('proximo_mantenimiento')?.value || "",
    resultados: document.getElementById('resultados_pruebas')?.value || ""
  };

  let y = 20;
  pdf.setFontSize(18);
  pdf.text("MANTI-BUS - Reporte de Mantenimiento", 15, y); y += 10;

  pdf.setFontSize(12);
  pdf.text(`Fecha: ${datos.fecha}`, 15, y);
  pdf.text(`Unidad: ${unidadTexto}`, 100, y); y += 8;
  pdf.text(`Responsable: ${datos.responsable}`, 15, y);
  pdf.text(`Tipo: ${datos.tipo}`, 100, y); y += 8;
  pdf.text(`Verificado: ${datos.verificado}`, 15, y);
  pdf.text(`Kilometraje: ${datos.kilometraje}`, 100, y); y += 12;

  const agregarParrafo = (titulo, texto) => {
    pdf.setFont(undefined, "bold");
    pdf.text(`${titulo}:`, 15, y); y += 6;
    pdf.setFont(undefined, "normal");
    const lines = pdf.splitTextToSize(texto, 180);
    pdf.text(lines, 15, y);
    y += lines.length * 6 + 4;
  };

  pdf.setFontSize(14); pdf.text("Descripción de la Falla", 15, y); y += 7;
  agregarParrafo("Síntomas", datos.sintomas);
  agregarParrafo("Condiciones", datos.condiciones);

  pdf.setFontSize(14); pdf.text("Solución Aplicada", 15, y); y += 7;
  agregarParrafo("Tiempo reparación", datos.tiempo);
  agregarParrafo("Repuestos usados", datos.repuestos);
  agregarParrafo("Reparaciones realizadas", datos.reparaciones);

  pdf.setFontSize(14); pdf.text("Pruebas y Verificación", 15, y); y += 7;
  agregarParrafo("Aprobación", datos.supervisor);
  agregarParrafo("Próximo mantenimiento", datos.proximo);
  agregarParrafo("Resultados", datos.resultados);

  pdf.save(`Reporte_Mantenimiento_Unidad_${unidadTexto}_${datos.fecha}.pdf`);
}







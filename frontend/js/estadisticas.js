async function generarGraficas() {
    const inicio = document.getElementById('fechaInicio').value;
    const fin = document.getElementById('fechaFin').value;
  
    if (!inicio || !fin) {
      alert("Selecciona un rango de fechas válido");
      return;
    }
  
    const res = await fetch(`http://localhost:3000/api/estadisticas?inicio=${inicio}&fin=${fin}`);
    const data = await res.json();
  
    renderBarChart(data.porFalla);
    renderLineChart(data.porFecha);
  }
  
  let barChartInstance, lineChartInstance;
  
  function renderBarChart(datos) {
    const ctx = document.getElementById('barChart').getContext('2d');
    if (barChartInstance) barChartInstance.destroy();
  
    barChartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: datos.map(d => d.tipo),
        datasets: [{
          label: 'Mantenimientos por Falla',
          data: datos.map(d => d.total),
          backgroundColor: '#3498db'
        }]
      }
    });
  }
  
  function renderLineChart(datos) {
    const ctx = document.getElementById('lineChart').getContext('2d');
    if (lineChartInstance) lineChartInstance.destroy();
  
    lineChartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: datos.map(d => d.fecha),
        datasets: [{
          label: 'Mantenimientos por Día',
          data: datos.map(d => d.total),
          borderColor: '#2ecc71',
          fill: false
        }]
      }
    });
  }
  
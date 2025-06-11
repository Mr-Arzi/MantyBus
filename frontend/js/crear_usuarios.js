

document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('usuarioLogueado'));
    if (!user || user.role !== 'admin') {
      alert("Acceso restringido solo a administradores");
      window.location.href = 'menu.html';
    }
  });
  
  async function crearUsuario() {
    const username = document.getElementById('nombre').value.trim();
    const password = document.getElementById('password').value.trim();
  
    if (!username || !password) {
      alert('Completa todos los campos');
      return;
    }
  
    const res = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
  
    const data = await res.json();
    if (res.ok) {
      alert('✅ Usuario creado con éxito');
      document.getElementById('nombre').value = '';
      document.getElementById('password').value = '';
    } else {
      alert('❌ Error: ' + data.error);
    }
  }
  
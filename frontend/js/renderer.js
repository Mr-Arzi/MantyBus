document.getElementById('login-form').addEventListener('submit', async (e) => {e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  const res = await fetch('http://localhost:3000/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();
  console.log('respuesta del backend', data);
  const messageEl = document.getElementById('login-message');

  if (res.ok) {
    messageEl.style.color = 'green';
    messageEl.textContent = 'Inicio de sesión exitoso';
    setTimeout(() => {
      window.location.href = 'menu.html';
    }, 1000);
  } else {
    messageEl.style.color = 'red';
    messageEl.textContent = data.error || 'Credenciales inválidas';
  }
});

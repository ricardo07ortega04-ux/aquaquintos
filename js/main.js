document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const nombre = data.get('nombre') || '';
  const telefono = data.get('telefono') || '';
  const correo = data.get('correo') || '';
  const tipo = data.get('tipo') || '';
  const mensaje = data.get('mensaje') || '';

  const tipoLabels = {
    residencial: 'Solución residencial',
    comercial: 'Solución comercial / industrial',
    mantenimiento: 'Mantenimiento / refacciones',
    otro: 'Otro'
  };

  const lines = [
    `Hola, soy ${nombre}.`,
    `Teléfono: ${telefono}`,
    correo ? `Correo: ${correo}` : null,
    `Interés: ${tipoLabels[tipo] || tipo}`,
    mensaje ? `Mensaje: ${mensaje}` : null
  ].filter(Boolean);

  const text = encodeURIComponent(lines.join('\n'));
  window.open(`https://wa.me/522224269464?text=${text}`, '_blank', 'noopener');
});

document.querySelectorAll('.habilidades').forEach(boton => {
  boton.addEventListener('click', () => {
    const detalles = boton.nextElementSibling;
    detalles.classList.toggle('oculto');
    boton.textContent = detalles.classList.contains('oculto') ? 'Habilidades' : 'Ver menos'; 
  });
});
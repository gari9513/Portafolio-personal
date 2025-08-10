// Limpiar formulario y mostrar mensaje de éxito si aplica
window.addEventListener("load", function() {
  const formulario = document.getElementById("contacto-form");
  const mensajeExito = document.getElementById("mensaje-exito");

  // Limpiar siempre los campos al cargar
  formulario.reset();

  // Si venimos de un envío exitoso, mostrar mensaje
  const params = new URLSearchParams(window.location.search);
  if (params.has("enviado")) {
    mensajeExito.textContent = "¡Tu mensaje ha sido enviado con éxito!";
  }
});
/* Contacto */
document.getElementById("contacto-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Detiene el envío del formulario

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();
  const mensajeError = document.getElementById("mensaje-error");
  const errores = [];

  // Validar nombre
  if (nombre === "") {
    errores.push("*El campo 'Nombre completo' es obligatorio. Intente de nuevo.");
  }

  // Validar correo
  if (email === "") {
    errores.push("*El campo 'Correo electrónico' es obligatorio. Intente de nuevo.");
  } else {
    const regexEmail = /^[\w.-]+@[\w-]+\.[a-z]{2,}$/i;
    if (!regexEmail.test(email)) {
      errores.push("*El correo electrónico ingresado no tiene un formato válido. Ingrese de nuevo.");
    }
  }

  // Validar mensaje
  if (mensaje === "") {
    errores.push("*El campo 'Mensaje' es obligatorio. Intente de nuevo.");
  }
 
  // Mostrar errores si existen
  if (errores.length > 0) {
    mensajeError.innerHTML = errores.join("<br>");
    return;
  }
 
  // Si todo es válido
  mensajeError.textContent = "";
  this.submit(); // Envío real a Formspree
});
document.getElementById('form-contacto').addEventListener('submit', function(e) {
  e.preventDefault();

  const boton = this.querySelector("button");
  boton.disabled = true;
  boton.textContent = "Enviando...";

  emailjs.sendForm('service_6m7prwn', 'template_072wipc', this)
    .then(function() {
      alert('✅ Mensaje enviado correctamente');
      document.getElementById('form-contacto').reset();
      boton.disabled = false;
      boton.textContent = "Enviar";
    }, function(error) {
      alert('❌ Ocurrió un error: ' + JSON.stringify(error));
      boton.disabled = false;
      boton.textContent = "Enviar";
    });
});

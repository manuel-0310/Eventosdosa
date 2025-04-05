document.getElementById('form-contacto').addEventListener('submit', function(e) {
  e.preventDefault();

  emailjs.sendForm('service_6m7prwn', 'template_wkbb3r9', this)
    .then(function() {
      alert('✅ Mensaje enviado correctamente');
      document.getElementById('form-contacto').reset();
    }, function(error) {
      alert('❌ Ocurrió un error: ' + JSON.stringify(error));
    });
});

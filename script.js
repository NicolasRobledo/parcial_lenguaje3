document.getElementById("registracion").addEventListener("submit", function (e) {
  e.preventDefault();

  if (
    validarApellido() &&
    validarNombre() &&
    validarDNI() &&
    validarFechaNacimiento() &&
    validarEmail()
  ) {
    alert("Formulario validado correctamente ✅");
  } else {
    alert("Error en los datos del formulario ❌");
  }
});
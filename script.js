function validarApellido() {
  const valor = document.getElementById("apellido").value;
  return /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(valor);
}

function validarNombre() {
  const valor = document.getElementById("nombre").value;
  return /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(valor);
}

function validarDNI() {
  const valor = document.getElementById("dni").value;
  return /^\d{8}$/.test(valor);
}

function validarFechaNacimiento() {
  const valor = document.getElementById("fechaNacimiento").value;
  const fecha = new Date(valor);
  const añoLimite = 2006;
  return fecha.getFullYear() > añoLimite;
}

function validarEmail() {
  const valor = document.getElementById("email").value;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(valor);
}

document.getElementById("botonPreguntas").addEventListener("click", function () {
  const nacionalidad = prompt("¿Cuál es tu nacionalidad?");
  const color = prompt("¿Cuál es tu color favorito?");
  const mascota = prompt("¿Cómo se llama tu mascota?");

  document.getElementById("respuestas").innerHTML = `
    <h4>Respuestas:</h4>
    <ul>
      <li><strong>Nacionalidad:</strong> ${nacionalidad}</li>
      <li><strong>Color favorito:</strong> ${color}</li>
      <li><strong>Nombre de la mascota:</strong> ${mascota}</li>
    </ul>
  `;
});
document.getElementById("registroForm").addEventListener("submit", function (e) {
  e.preventDefault();

  if (
    validarApellido() &&
    validarNombre() &&
    validarDNI() &&
    validarFechaNacimiento() &&
    validarEmail()
  ) {
    alert("Formulario ");
  } else {
    alert("Error en los");
  }
});

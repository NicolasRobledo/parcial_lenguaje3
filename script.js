function validarApellido() {
  const valor = document.getElementById("apellido").value;
  for (let i = 0; i < valor.length; i++) {
    const c = valor[i];
    const code = c.charCodeAt(0);
    
    if (
      !(c === ' ' ||
        (code >= 65 && code <= 90) || 
        (code >= 97 && code <= 122) || 
        (code >= 192 && code <= 255) ||
        c === 'Ñ' || c === 'ñ')
    ) {
      return false;
    }
  }
  return valor.length > 0;
}

function validarNombre() {
  const valor = document.getElementById("nombre").value;
  for (let i = 0; i < valor.length; i

}

document.geterelemento("botonPreguntas").addEvento("click", function () {
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
    alert("Formulario validado");
  } else {
    alert("Error");
  }
});

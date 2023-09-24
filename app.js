const color = document.getElementById("color");
const boton = document.getElementById("boton");
const copyIcon = document.getElementById("copy");
const copiadoMensaje = document.createElement("div");

const coloresHex = () => {
  let digitos = "ABCDEF0123456789";
  let caracter = "#";

  for (let i = 0; i < 6; i++) {
    let calculo = Math.floor(Math.random() * 16);
    caracter += digitos[calculo];
  }

  return caracter;
};

boton.addEventListener("click", () => {
  let generar = coloresHex();
  color.textContent = generar;
  boton.style.backgroundColor = generar;

  document.body.style.backgroundColor = generar;
});

copyIcon.addEventListener("click", () => {
  const colorHex = color.textContent;
  navigator.clipboard.writeText(colorHex);
  
  copiadoMensaje.textContent = "Copiado";
  copiadoMensaje.className = "copiado-mensaje";
  document.body.appendChild(copiadoMensaje);

  setTimeout(() => {
    copiadoMensaje.remove();
  }, 1000);
});


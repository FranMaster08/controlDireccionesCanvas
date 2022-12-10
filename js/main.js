let positionX = 0;
let positionY = 0;
const tazaDeRefresco = 1000;
let direccion = 1;

const main = () => {
  setInterval(() => {
    dibujar();
    controlDireccion();
  }, tazaDeRefresco);
};

const dibujar = () => {
  const canvas = document.querySelector("#myCanvas");
  let pincel = canvas.getContext("2d");
  pincel.clearRect(0, 0, 500, 500);
  pincel.fillRect(positionX, positionY, 125, 125);
};

const controlDireccion = () => {
  console.log("posicionX = ", positionX);
  console.log("posicionY = ", positionY);
  console.log("Direccion = ", direccion);

  if (positionX == 375) direccion = -1;
  if (positionX == 0) direccion = 1;

  if (positionX < 375 && direccion == 1) {
    positionX += 125;
  }
  if (positionX > 0 && direccion == -1) {
    positionX -= 125;
  }
};

window.onload = () => {
  main();
};

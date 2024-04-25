const leer = require("prompt-sync")();

const DAÑO_HORROCRUXES_CORDURA = 5.7;
const DAÑO_HORROCRUXES_SALUD = 10.4;
let horrocruxesDestruidos = 0;
let vidaPersonaje = 400;
let corduraPersonaje = 200;
let turnos = 0;
let codigoIngresado = "def codigo ingresado";
let codigoHorrocrux1 = "R1dd13";
let codigoHorrocrux2 = "G4unt!";
let codigoHorrocrux3 = "H3l?ga!";
let codigoHorrocrux4 = "?R4vena";
let codigoHorrocrux5 = "N@9ini?";
let posibilidadProteccion = 50;
let probabilidadEsquivo = 0;
let eleccion_esquivar = 0;
let numeroObtenido = 0;

function numeroAleatorio(min, max) {
  return Math.random() * (max - min) + min;
}
function main() {
  numeroObtenido =numeroAleatorio(-3, 21);
  console.log(numeroObtenido);
}
main();

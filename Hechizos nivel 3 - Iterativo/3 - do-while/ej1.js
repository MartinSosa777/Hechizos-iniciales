const leer = require("prompt-sync")();
const DAÑO_HORROCRUXES_CORDURA = 5.7;
const DAÑO_HORROCRUXES_SALUD = 10.4;
const PROBABILIDAD_MUERTE_INSTANTANEA = 5;
const AUMENTO_PROBABILIDAD_HORROCRUX_DESTRUIDO = 2.4;

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
let probabilidadEsquivo = 20;
let eleccion_esquivar = "def eleccion esquivo";
let secretoResuelto1 = 0;
let secretoResuelto2 = 0;
let secretoResuelto3 = 0;
let secretoResuelto4 = 0;
let secretoResuelto5 = 0;

function codigoSecretoRiddle(min, max) {
  return Math.random() * (max - min) + min;
}
function codigoSecretoGaunt(min, max) {
  return Math.random() * (max - min) + min;
}
function codigoSecretoHelga(min, max) {
  return Math.random() * (max - min) + min;
}
function codigoSecretoRavenclaw(min, max) {
  return String.fromCharCode(Math.random() * (max - min) + min);
}
function codigoSecretoNagini(min, max) {
  return String.fromCharCode(Math.random() * (max - min) + min);
}

function main() {

}

main();
function FINAL_BUENO() {
  console.log(
    "¡Victoria para el estudiante valiente que, con coraje y determinación, ha destruido todos los Horrocruxes!"
  );
  console.log(
    "Con cada fragmento de alma oscura eliminado, la luz de la esperanza ha brillado más brillante sobre el mundo mágico."
  );
  console.log(
    "¡Su sacrificio y valentía han salvado a nuestra comunidad de las sombras de la oscuridad, asegurando un futuro lleno de paz y prosperidad para todas las generaciones venideras!"
  );
}

function FINAL_MALO() {
  console.log("En el oscuro manto de la derrota...");
  console.log(
    "El estudiante enfrentó una verdad devastadora: a pesar de sus esfuerzos incansables, los Horrocruxes permanecen intactos, y la sombra del mal se alza triunfante sobre el mundo mágico."
  );
  console.log(
    "Aunque la batalla fue ardua y valiente, el destino ha dictado su veredicto, dejando al estudiante con el amargo sabor de la derrota."
  );
  console.log(
    "Pero incluso en la oscuridad más profunda, la llama de la esperanza aún arde, recordando que la lucha nunca termina y que el mañana siempre guarda la promesa de una nueva oportunidad para la redención y la victoria."
  );
}

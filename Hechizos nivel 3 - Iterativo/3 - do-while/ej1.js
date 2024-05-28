const leer = require("prompt-sync")();
const DAÑO_HORROCRUXES_CORDURA = 5.7;
const DAÑO_HORROCRUXES_SALUD = 10.4;
const AUMENTO_PROBABILIDAD_HORROCRUX_DESTRUIDO = 2.4;

let horrocruxesDestruidos = 0;
let vidaPersonaje = 400;
let corduraPersonaje = 200;
let turnos = 0;
let posibilidadProteccion = 50;
let probabilidadEsquivo = 20;
let probabilidadMuerteInstant = 5;
let eleccion_proteger = "def eleccion";
let secretoResuelto1=0;
let secretoResuelto2=0;
let secretoResuelto3=0;
let secretoResuelto4=0;
let secretoResuelto5=0;



function secretoResueltoNa9ini() {
  console.log(
    "Ingrese el caracter aleatorio donde se encontraría el código de N@9ini?"
  );
  let codigoIngresado = leer();
  let secretoResuelto = "H"; /*codigoSecretoNagini(72, 73);*/
  if (codigoIngresado == secretoResuelto) {
    console.log(
      `Adivinaste el numero, destruiste el Horrocrux N@9ini? ${secretoResuelto} `
    );
    horrocruxesDestruidos++;
    probabilidadMuerteInstant += AUMENTO_PROBABILIDAD_HORROCRUX_DESTRUIDO;
    turnos++;
  } else {
    dañoTotal();
  }
  console.log(secretoResuelto.toUpperCase());
  return codigoIngresado === secretoResuelto.toUpperCase();
}

function secretoResueltoR4vena() {
  console.log(
    "Ingrese el caracter aleatorio donde se encontraría el código de ?R4vena:"
  );
  let codigoIngresado = leer();
  let secretoResuelto = "a"; /*codigoSecretoRavenclaw(97, 98);*/
  if (codigoIngresado == secretoResuelto) {
    console.log(
      `Adivinaste el numero, destruiste el Horrocrux ?R4vena ${secretoResuelto} `
    );
    horrocruxesDestruidos++;
    probabilidadMuerteInstant += AUMENTO_PROBABILIDAD_HORROCRUX_DESTRUIDO;
    turnos++;
  } else {
    dañoTotal();
  }
  console.log(secretoResuelto.toLowerCase());
  return codigoIngresado === secretoResuelto.toLowerCase();
}

function secretoResueltoH3lga() {
  console.log(
    "Ingrese el número aleatorio donde se encontraría el código de H3l?ga!:"
  );
  let codigoIngresado = leer();
  let secretoResuelto = 3; /*codigoSecretoHelga(4, 13);*/
  if (codigoIngresado == secretoResuelto) {
    console.log(
      `Adivinaste el numero, destruiste el Horrocrux H3l?ga! ${secretoResuelto} `
    );
    horrocruxesDestruidos++;
    probabilidadMuerteInstant += AUMENTO_PROBABILIDAD_HORROCRUX_DESTRUIDO;
    turnos++;
  } else {
    dañoTotal();
  }
  console.log(secretoResuelto);
  return Number(codigoIngresado) === secretoResuelto;
}

function secretoResueltoG4aunt() {
  console.log(
    "Ingrese el numero aleatorio donde se encontraria el codigo ?G4aunt!"
  );
  let codigoIngresado = leer();
  let secretoResuelto = 2; /*codigoSecretoGaunt(-100, -71);*/
  if (codigoIngresado == secretoResuelto) {
    console.log(
      `Adivinaste el numero, destruiste el Horrocrux ?G4aunt! ${secretoResuelto} `
    );
    horrocruxesDestruidos++;
    probabilidadMuerteInstant += AUMENTO_PROBABILIDAD_HORROCRUX_DESTRUIDO;
    turnos++;
  } else {
    dañoTotal();
  }
  console.log(secretoResuelto);
  return Number(codigoIngresado) === secretoResuelto;
}

function secretoResueltoR1ddl3() {
  console.log(
    "Ingrese el numero aleatorio donde se encontraria el codigo R1dd13?"
  );
  let codigoIngresado = leer();
  let secretoResuelto = 1; /*codigoSecretoRiddle(-3, 21);*/
  if (codigoIngresado == secretoResuelto) {
    console.log(
      `Adivinaste el numero, destruiste el Horrocrux R1dd13 ${secretoResuelto} `
    );
    horrocruxesDestruidos++;
    probabilidadMuerteInstant += AUMENTO_PROBABILIDAD_HORROCRUX_DESTRUIDO;
    turnos++;
  } else {
    dañoTotal();
  }
  console.log(secretoResuelto);
  return Number(codigoIngresado) === secretoResuelto;
}
function probabilidadEsquivarEleccion() {
  if (probabilidadEsquivo > probabilidadNoEsquivar) {
    console.log("Esquivaste el ataque del horrocrux");
  if (posibilidadProteccion > probabilidadNoEsquivar) {
    console.log(
      "Elegi 1 si queres proteger tu cordura o 2 si queres proteger tu vida"
    );
  } else if (eleccion_proteger === 1) {
    vidaPersonaje -= DAÑO_HORROCRUXES_SALUD;;
    console.log(
      `Tu vida actual es: ${vidaPersonaje}`
    );
  } else {
    corduraPersonaje -= DAÑO_HORROCRUXES_CORDURA;;
    console.log(
      `Tu cordura actual es: ${corduraPersonaje}`
    );
  }
}}
function dañoTotal() {
  vidaPersonaje -= DAÑO_HORROCRUXES_SALUD;
  corduraPersonaje -= DAÑO_HORROCRUXES_CORDURA;
  console.log(
    `Numero no valido, el Horrocrux te infligio daño. Tu vida actual es: ${vidaPersonaje}, y tu cordura: ${corduraPersonaje}`
  );
  turnos++;
}
function probabilidadNoEsquivar(min, max) {
  return Math.floor(Math.random() * (100 - 1) + min);
}

function FINAL_BUENO() {
  console.log(
    "¡Victoria para el estudiante valiente que, con coraje y determinación, ha destruido todos los horrocruxes! Con cada fragmento de alma oscura eliminado, la luz de la esperanza ha brillado más brillante sobre el mundo mágico. ¡Su sacrificio y valentía han salvado a nuestra comunidad de las sombras de la oscuridad, asegurando un futuro lleno de paz y prosperidad para todas las generaciones venideras!"
  );
}

function FINAL_MALO() {
  console.log(
    "En el oscuro manto de la derrota, el estudiante enfrentó una verdad devastadora: a pesar de sus esfuerzos incansables, los horrocruxes permanecen intactos, y la sombra del mal se alza triunfante sobre el mundo mágico. Aunque la batalla fue ardua y valiente, el destino ha dictado su veredicto, dejando al estudiante con el amargo sabor de la derrota. Pero incluso en la oscuridad más profunda, la llama de la esperanza aún arde, recordando que la lucha nunca termina y que el mañana siempre guarda la promesa de una nueva oportunidad para la redención y la victoria."
  );
}
function probabilidadAleatoria() {
  return Math.floor(Math.random() * 100) + 1;
}

function main() {
  do {
    let probabilidadMuerte = probabilidadAleatoria();
    if (probabilidadMuerte <= probabilidadMuerteInstant) {
      vidaPersonaje = 0;
      corduraPersonaje = 0;
      console.log("El personaje ha perdido toda su vida y cordura");
      break;
    }
      switch (horrocruxesDestruidos) {
        case 0:
          secretoResuelto1 = secretoResueltoR1ddl3();
          probabilidadEsquivarEleccion();
          break;
        case 1:
          secretoResuelto2 = secretoResueltoG4aunt();
          probabilidadEsquivarEleccion();
          break;
        case 2:
          secretoResuelto3 = secretoResueltoH3lga();
          probabilidadEsquivarEleccion();
          break;
        case 3:
          secretoResuelto4= secretoResueltoR4vena();
          probabilidadEsquivarEleccion();
          break;
        case 4:
          secretoResuelto5 = secretoResueltoNa9ini();
          probabilidadEsquivarEleccion();
          break;
      }
      if (horrocruxesDestruidos === 5) {
        FINAL_BUENO();
      } else if (vidaPersonaje == 0 || corduraPersonaje == 0) {
        FINAL_MALO();
      }
    }
  while (
    turnos <= 30 &&
    horrocruxesDestruidos < 5 &&
    vidaPersonaje > 0 &&
    corduraPersonaje > 0
  );
  {
  }
}

main();


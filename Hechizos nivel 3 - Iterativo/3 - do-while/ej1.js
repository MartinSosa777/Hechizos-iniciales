const leer = require("prompt-sync")();
const DAÑO_HORROCRUXES_CORDURA = 5.7;
const DAÑO_HORROCRUXES_SALUD = 10.4;
const AUMENTO_PROBABILIDAD_HORROCRUX_DESTRUIDO = 2.4;

let horrocruxesDestruidos = 0;
let vidaPersonaje = 400;
let corduraPersonaje = 200;
let turnos = 0;
let codigoIngresado = "";
let posibilidadProteccion = 50;
let probabilidadEsquivo = 20;
let probabilidadMuerteInstant = 5;

function solicitarCodigo(mensaje) {
  console.log(mensaje);
  return leer();
}

function generarCodigoSecreto(min, max, esCaracter = false) {
  if (esCaracter) {
    return String.fromCharCode(Math.random() * (max - min) + min);
  }
  return Math.floor(Math.random() * (max - min) + min);
}

function dañoTotal() {
  vidaPersonaje -= DAÑO_HORROCRUXES_SALUD;
  corduraPersonaje -= DAÑO_HORROCRUXES_CORDURA;
  console.log(`
    Número no válido, el Horrocrux te infligió daño. Tu vida actual es: ${vidaPersonaje}, y tu cordura: ${corduraPersonaje}
    ` );
}

function intentarDestruirHorrocrux(codigoSecreto, mensaje) {
  codigoIngresado = solicitarCodigo(mensaje);
  if (codigoIngresado == codigoSecreto) {
    console.log(`Adivinaste el código, destruiste el Horrocrux ${codigoSecreto}`);
    horrocruxesDestruidos++;
    probabilidadMuerteInstant += AUMENTO_PROBABILIDAD_HORROCRUX_DESTRUIDO;
  } else {
    dañoTotal();
  }
  turnos++;
}

function FINAL_BUENO() {
  console.log("¡Victoria para el estudiante valiente que, con coraje y determinación, ha destruido todos los Horrocruxes!");
  console.log("Con cada fragmento de alma oscura eliminado, la luz de la esperanza ha brillado más brillante sobre el mundo mágico.");
  console.log("¡Su sacrificio y valentía han salvado a nuestra comunidad de las sombras de la oscuridad, asegurando un futuro lleno de paz y prosperidad para todas las generaciones venideras!");
}

function FINAL_MALO() {
  console.log("En el oscuro manto de la derrota...");
  console.log("El estudiante enfrentó una verdad devastadora: a pesar de sus esfuerzos incansables, los Horrocruxes permanecen intactos, y la sombra del mal se alza triunfante sobre el mundo mágico.");
  console.log("Aunque la batalla fue ardua y valiente, el destino ha dictado su veredicto, dejando al estudiante con el amargo sabor de la derrota.");
  console.log("Pero incluso en la oscuridad más profunda, la llama de la esperanza aún arde, recordando que la lucha nunca termina y que el mañana siempre guarda la promesa de una nueva oportunidad para la redención y la victoria.");
}

function main() {
  while (turnos <= 30 && horrocruxesDestruidos < 5 && corduraPersonaje > 0 && vidaPersonaje > 0) {
    if (Math.random() * 100 < probabilidadMuerteInstant) {
      vidaPersonaje = 0;
      corduraPersonaje = 0;
      console.log("El personaje ha perdido toda su salud y cordura");
      turnos=30;
    }

    if (Math.random() * 100 < probabilidadEsquivo) {
      console.log("Esquivaste el ataque del horrocrux");
    } else {
      console.log("No esquivaste el ataque del horrocrux");
      if (posibilidadProteccion > Math.random() * 100) {
        console.log("Elegi 1 si quieres proteger tu cordura o 2 si quieres proteger tu vida");
        let eleccion_proteger = Number(leer());
        if (eleccion_proteger === 1) {
          vidaPersonaje--;
        } else if (eleccion_proteger === 2) {
          corduraPersonaje--;
        } else {
          dañoTotal();
        }
      }
    }

    switch (horrocruxesDestruidos) {
      case 0:
        intentarDestruirHorrocrux(generarCodigoSecreto(-3, 21), "Ingrese el número aleatorio donde se encontraría el código R1dd13?");
        break;
      case 1:
        intentarDestruirHorrocrux(generarCodigoSecreto(-100, -71), "Ingrese el número aleatorio donde se encontraría el código ?G4aunt!");
        break;
      case 2:
        intentarDestruirHorrocrux(generarCodigoSecreto(4, 13), "Ingrese el número aleatorio donde se encontraría el código H3l?ga!");
        break;
      case 3:
        intentarDestruirHorrocrux(generarCodigoSecreto(97, 98, true).toLowerCase(), "Ingrese el caracter aleatorio donde se encontraría el código de ?R4vena:");
        break;
      case 4:
        intentarDestruirHorrocrux(generarCodigoSecreto(72, 73, true).toUpperCase(), "Ingrese el caracter aleatorio donde se encontraría el código de N@9ini?:");
        break;
    }
  }

  if (horrocruxesDestruidos === 5) {
    FINAL_BUENO();
  } else if (vidaPersonaje <= 0 || corduraPersonaje <= 0 || turnos >= 30) {
    FINAL_MALO();
  }
}

main();
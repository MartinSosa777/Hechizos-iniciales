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
let probabilidadEsquivo = 20;
let probabilidadQuitarTodo = 5;
let probabilidadAumentoQuitarTodo = 2.4;
let eleccion_esquivar = "def eleccion esquivo";

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
  return secretoResuelto4 = String.fromCharCode(Math.random() * (max - min) + min);
}
function codigoSecretoNagini(min, max) {
  return secretoResuelto5 = String.fromCharCode(Math.random() * (max - min) + min);;

}
function main() {
  do {
    if (horrocruxesDestruidos ==0) {
        console.log("Ingrese el numero aleatorio donde se encontraria el codigo R1dd13?");
        codigoIngresado = leer()
        secretoResuelto1 = codigoSecretoRiddle(-3, 21);
        console.log(secretoResuelto1);
        if (codigoIngresado == secretoResuelto1) {
          horrocruxesDestruidos++;
            console.log(`Adivinaste el numero, destruiste el Horrocrux R1ddl3${secretoResuelto1} `);
        } else {
          vidaPersonaje-=DAÑO_HORROCRUXES_SALUD;
          corduraPersonaje-=DAÑO_HORROCRUXES_CORDURA;  
          console.log(`Numero no valido, el Horrocrux te infligio daño. Tu vida actual es:${vidaPersonaje}, y tu cordura:${corduraPersonaje}`);
        }
      }else if (horrocruxesDestruidos==1) {
        console.log("Ingrese el numero aleatorio donde se encontraria el codigo ?G4unt!");
        secretoResuelto2 = codigoSecretoGaunt(-100, -71);
        console.log(secretoResuelto2);
      
    if (codigoIngresado == secretoResuelto2) {
    horrocruxesDestruidos++;
      console.log(`Adivinaste el numero, destruiste el Horrocrux ${secretoResuelto2} `);
    } else {
      vidaPersonaje-=DAÑO_HORROCRUXES_SALUD;
      corduraPersonaje-=DAÑO_HORROCRUXES_CORDURA;  
      console.log(`Numero no valido, el Horrocrux te infligio daño. Tu vida actual es:${vidaPersonaje}, y tu cordura:${corduraPersonaje}`);
    }
    }else if (horrocruxesDestruidos==2) {
      console.log("Ingrese el número aleatorio donde se encontraría el código de H3l?ga!:");
      secretoResuelto3 = codigoSecretoHelga(4, 13);
      console.log(secretoResuelto3);
    }
    if (codigoIngresado == secretoResuelto3) {
      horrocruxesDestruidos++;
      console.log(`Adivinaste el numero, destruiste el Horrocrux H3l?ga!${codigoHorrocrux3 + secretoResuelto3} `);
    } else {
      vidaPersonaje-=DAÑO_HORROCRUXES_SALUD;
      corduraPersonaje-=DAÑO_HORROCRUXES_CORDURA;
      console.log(`Numero no valido, el Horrocrux te infligio daño. Tu vida actual es:${vidaPersonaje}, y tu cordura:${corduraPersonaje}`);
    }}else if (horrocruxesDestruidos==3) {
      console.log("Ingrese el caracter aleatorio donde se encontraría el código de ?R4vena:");
      secretoResuelto4 = codigoSecretoRavenclaw(65, 70)
      console.log(secretoResuelto4.toLowerCase());
    if (codigoIngresado == secretoResuelto4) {
      horrocruxesDestruidos++;
      console.log(`Adivinaste el caracter, destruiste el Horrocrux ?R4vena${secretoResuelto4} `);
    } else {
      vidaPersonaje-=DAÑO_HORROCRUXES_SALUD;
      corduraPersonaje-=DAÑO_HORROCRUXES_CORDURA;
      console.log(`Caracter no valido, el Horrocrux te infligio daño.Tu vida actual es:${vidaPersonaje} y tu cordura es:${corduraPersonaje}`);
    }}else if (horrocruxesDestruidos==4) {
      console.log(`Ingrese el caracter aleatorio donde se encontraría el código de N@9ini?${secretoResuelto5}`);
      secretoResuelto5 = codigoSecretoNagini(72, 75)
      console.log(secretoResuelto5.toUpperCase());
    if (codigoIngresado == secretoResuelto5) {
      horrocruxesDestruidos++;
      console.log(`Adivinaste el caracter, destruiste el Horrocrux N@9ini?${secretoResuelto5}`);
    } else {
        console.log(`Caracter no valido, el Horrocrux te infligio daño.Tu vida actual es:${vidaPersonaje} y tu cordura es:${corduraPersonaje}`);
    }}
  
while (vidaPersonaje>0 && corduraPersonaje>0 && turnos<30);
if (horrocruxesDestruidos==5) {
  console.log("¡Victoria para el estudiante valiente que, con coraje y determinación, ha destruido todos los Horrocruxes!");
    console.log("Con cada fragmento de alma oscura eliminado, la luz de la esperanza ha brillado más brillante sobre el mundo mágico.");
    console.log("¡Su sacrificio y valentía han salvado a nuestra comunidad de las sombras de la oscuridad, asegurando un futuro lleno de paz y prosperidad para todas las generaciones venideras!");
}else{
    console.log("En el oscuro manto de la derrota...");
    console.log("El estudiante enfrentó una verdad devastadora: a pesar de sus esfuerzos incansables, los Horrocruxes permanecen intactos, y la sombra del mal se alza triunfante sobre el mundo mágico.");
    console.log("Aunque la batalla fue ardua y valiente, el destino ha dictado su veredicto, dejando al estudiante con el amargo sabor de la derrota.");
    console.log("Pero incluso en la oscuridad más profunda, la llama de la esperanza aún arde, recordando que la lucha nunca termina y que el mañana siempre guarda la promesa de una nueva oportunidad para la redención y la victoria.");
}}
main();
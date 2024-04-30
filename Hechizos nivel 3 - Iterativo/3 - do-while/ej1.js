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
        while (horrocruxesDestruidos == 0 && vidaPersonaje > 0 && corduraPersonaje > 0) {
            console.log(
                "Ingrese el numero aleatorio donde se encontraria el codigo R1dd13?"
            );
            codigoIngresado = leer();
            secretoResuelto1 = 1; //secretoResuelto1 = codigoSecretoRiddle(-3, 21);
            console.log(secretoResuelto1);
            if (codigoIngresado == secretoResuelto1) {
                console.log(
                    `Adivinaste el numero, destruiste el Horrocrux R1ddl3${secretoResuelto1} `
                );
                horrocruxesDestruidos++;
                turnos++;
            } else {
                vidaPersonaje -= DAÑO_HORROCRUXES_SALUD;
                corduraPersonaje -= DAÑO_HORROCRUXES_CORDURA;
                console.log(
                    `Numero no valido, el Horrocrux te infligio daño. Tu vida actual es:${vidaPersonaje}, y tu cordura:${corduraPersonaje}`
                );
                turnos++;
            }
        }
        while (horrocruxesDestruidos == 1 && vidaPersonaje > 0 && corduraPersonaje > 0) {
            console.log(
                "Ingrese el numero aleatorio donde se encontraria el codigo ?G4unt!"
            );
            codigoIngresado = leer();
            secretoResuelto2 = 2; //secretoResuelto2 = codigoSecretoGaunt(-100, -71);
            console.log(secretoResuelto2);
            if (codigoIngresado == secretoResuelto2) {
                console.log(
                    `Adivinaste el numero, destruiste el Horrocrux ${secretoResuelto2} `
                );
                horrocruxesDestruidos++;
                turnos++;
            } else {
                vidaPersonaje -= DAÑO_HORROCRUXES_SALUD;
                corduraPersonaje -= DAÑO_HORROCRUXES_CORDURA;
                console.log(
                    `Numero no valido, el Horrocrux te infligio daño. Tu vida actual es:${vidaPersonaje}, y tu cordura:${corduraPersonaje}`
                );
                turnos++;
            }
        }
        while (horrocruxesDestruidos == 2 && vidaPersonaje > 0 && corduraPersonaje > 0) {
            console.log(
                "Ingrese el número aleatorio donde se encontraría el código de H3l?ga!:"
            );
            codigoIngresado = leer();
            secretoResuelto3 = 3; //secretoResuelto3 = codigoSecretoHelga(4, 13);
            console.log(secretoResuelto3);
            if (codigoIngresado == secretoResuelto3) {
                console.log(
                    `Adivinaste el numero, destruiste el Horrocrux H3l?ga!${secretoResuelto3
                    } `
                );
                horrocruxesDestruidos++;
                turnos++;
            } else {
                vidaPersonaje -= DAÑO_HORROCRUXES_SALUD;
                corduraPersonaje -= DAÑO_HORROCRUXES_CORDURA;
                console.log(
                    `Numero no valido, el Horrocrux te infligio daño. Tu vida actual es:${vidaPersonaje}, y tu cordura:${corduraPersonaje}`
                );
                turnos++;
            }
        }
        while (horrocruxesDestruidos == 3 && vidaPersonaje > 0 && corduraPersonaje > 0) {
            console.log(
                "Ingrese el caracter aleatorio donde se encontraría el código de ?R4vena:"
            );
            codigoIngresado = leer();
            secretoResuelto4 = codigoSecretoRavenclaw(98, 99);
            console.log(secretoResuelto4.toLowerCase());
            if (codigoIngresado == secretoResuelto4) {
                console.log(
                    `Adivinaste el caracter, destruiste el Horrocrux ?R4vena${secretoResuelto4} `
                );
                horrocruxesDestruidos++;
                turnos++;
            } else {
                vidaPersonaje -= DAÑO_HORROCRUXES_SALUD;
                corduraPersonaje -= DAÑO_HORROCRUXES_CORDURA;
                console.log(
                    `Caracter no valido, el Horrocrux te infligio daño.Tu vida actual es:${vidaPersonaje} y tu cordura es:${corduraPersonaje}`
                );
                turnos++;
            }
        }
        while (horrocruxesDestruidos == 4 && vidaPersonaje > 0 && corduraPersonaje > 0) {
            console.log(
                `Ingrese el caracter aleatorio donde se encontraría el código de N@9ini?${secretoResuelto5}`
            );
            codigoIngresado = leer();
            secretoResuelto5 = codigoSecretoNagini(72, 73);
            console.log(secretoResuelto5.toUpperCase());
            if (codigoIngresado == secretoResuelto5) {
                console.log(
                    `Adivinaste el caracter, destruiste el Horrocrux N@9ini?${secretoResuelto5}`
                );
                horrocruxesDestruidos++;
                turnos++;
            } else {
                vidaPersonaje -= DAÑO_HORROCRUXES_SALUD;
                corduraPersonaje -= DAÑO_HORROCRUXES_CORDURA;
                console.log(
                    `Caracter no valido, el Horrocrux te infligio daño.Tu vida actual es:${vidaPersonaje} y tu cordura es:${corduraPersonaje}`
                );
                turnos++;
            }
        }
        console.log("Pasando al siguiente Horrocrux");
        while ((vidaPersonaje > 0 && corduraPersonaje > 0) && horrocruxesDestruidos == 5 && turnos <= 30);
        if (horrocruxesDestruidos == 5) {
            console.log(
                "¡Victoria para el estudiante valiente que, con coraje y determinación, ha destruido todos los Horrocruxes!"
            );
            console.log(
                "Con cada fragmento de alma oscura eliminado, la luz de la esperanza ha brillado más brillante sobre el mundo mágico."
            );
            console.log(
                "¡Su sacrificio y valentía han salvado a nuestra comunidad de las sombras de la oscuridad, asegurando un futuro lleno de paz y prosperidad para todas las generaciones venideras!"
            );
        } else {
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
    } 


main();

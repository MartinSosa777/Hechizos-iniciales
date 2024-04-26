const leer = require("prompt-sync")();
const DAÑO_HORROCRUXES_CORDURA = 5.7
const DAÑO_HORROCRUXES_SALUD = 10.4

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
    let horrocruxesDestruidos = 5;
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
    let secretoResuelto1 = 0;
    let secretoResuelto2 = 0;
    let secretoResuelto3 = 0;
    let secretoResuelto4 = "def secreto";
    let secretoResuelto5 = 0;

}

do {
    if (horrocruxesDestruidos => 5) {
        console.log("Ingrese el numero aleatorio donde se encontraria el codigo R1dd13?");
        codigoIngresado = leer()
        secretoResuelto1 = codigoSecretoRiddle(-3, 21);
        console.log(secretoResuelto1);
        if (codigoIngresado == secretoResuelto1) {
            console.log(`Adivinaste el numero, destruiste el Horrocrux${codigoHorrocrux1 + secretoResuelto1} `);
        } else {
            console.log(`Numero no valido, el Horrocrux te infligio${vidaPersonaje - DAÑO_HORROCRUXES_SALUD & corduraPersonaje - DAÑO_HORROCRUXES_CORDURA}`);
        }}
    secretoResuelto2 = codigoSecretoGaunt(-100, -71);
    console.log(secretoResuelto2);
    if (codigoIngresado == secretoResuelto2) {
        console.log(`Adivinaste el numero, destruiste el Horrocrux${codigoHorrocrux2 + secretoResuelto2} `);
    } else {
        console.log(`Numero no valido, el Horrocrux te infligio${vidaPersonaje - DAÑO_HORROCRUXES_SALUD & corduraPersonaje - DAÑO_HORROCRUXES_CORDURA}`);
    }
    secretoResuelto3 = codigoSecretoHelga(4, 13)
    console.log(secretoResuelto3);
    if (codigoIngresado == secretoResuelto3) {
        console.log(`Adivinaste el numero, destruiste el Horrocrux${codigoHorrocrux3 + secretoResuelto3} `);
    } else {
        console.log(`Numero no valido, el Horrocrux te infligio${vidaPersonaje - DAÑO_HORROCRUXES_SALUD & corduraPersonaje - DAÑO_HORROCRUXES_CORDURA}`);
    }
    secretoResuelto4 = codigoSecretoRavenclaw(65, 70)
    console.log(secretoResuelto4.toLowerCase());
    if (codigoIngresado == secretoResuelto4) {
        console.log(`Adivinaste el numero, destruiste el Horrocrux${codigoHorrocrux4 + secretoResuelto4} `);
    } else {
        console.log(`Numero no valido, el Horrocrux te infligio${vidaPersonaje - DAÑO_HORROCRUXES_SALUD & corduraPersonaje - DAÑO_HORROCRUXES_CORDURA}`);
    }
    secretoResuelto5 = codigoSecretoNagini(72, 75)
    console.log(secretoResuelto5.toUpperCase());
    if (codigoIngresado == secretoResuelto4) {
        console.log(`Adivinaste el numero, destruiste el Horrocrux${codigoHorrocrux4 + secretoResuelto4} `);
    } else {
        console.log(`Numero no valido, el Horrocrux te infligio${vidaPersonaje - DAÑO_HORROCRUXES_SALUD & corduraPersonaje - DAÑO_HORROCRUXES_CORDURA}`);
    }}






while (vidaPersonaje > 0 && corduraPersonaje > 0 && turnos < 30);


main();







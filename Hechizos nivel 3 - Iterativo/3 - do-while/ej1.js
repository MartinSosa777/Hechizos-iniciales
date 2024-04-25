const leer = require("prompt-sync")();

const DAÑO_HORROCRUXES_CORDURA=5.7
const DAÑO_HORROCRUXES_SALUD=10.4
function main() {
let horrocruxesDestruidos=0;
let vidaPersonaje=400;
let corduraPersonaje=200;
let turnos=0;
let codigoIngresado="def codigo ingresado";
let codigoHorrocrux1="R1dd13";
let codigoHorrocrux2="G4unt!";
let codigoHorrocrux3="H3l?ga!";
let codigoHorrocrux4="?R4vena";
let codigoHorrocrux5="N@9ini?";
let posibilidadProteccion=50;
let probabilidadEsquivo=0;
let eleccion_esquivar=0;







do {
    codigoHorrocrux1=Math.floor(Math.random(-3,20) *);
    console.log;
    console.log("Escribe correctamente el codigo secreto");
    
    codigoIngresado=leer()
    
    if (codigoIngresado=codigoHorrocrux1) {
        console.log("Has adivinado el codigo secreto");
        horrocruxesDestruidos=horrocruxesDestruidos+1
        posibilidadProteccion=posibilidadProteccion-11.875

        
    }else{
        console.log("Has fallado el codigo secreto");
        probabilidadEsquivo=Math.floor(Math.random() *101)
        if (probabilidadEsquivo<posibilidadProteccion) {
            console.log("Gracias a tu agilidad has podido evitar el ataque ingrese 1 para esquivar el daño de cordura y 2 para esquivar el daño de salud");
            eleccion_esquivar=leer();
        }
    }   
    
} 

while (vidaPersonaje>0 && corduraPersonaje>0 && turnos<30);

}



main();
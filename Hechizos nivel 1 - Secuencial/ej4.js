const leer = require("prompt-sync")();

/**
 * Ej 4 
 * Cálculo del Hechizo Patronus:
 * Solicita al usuario la edad del mago y la cantidad de días de práctica del hechizo Patronus, luego calcula la potencia del hechizo. La potencia se obtiene duplicando la edad sumado a la mitad de todos los días de practica realizados para dominar el Patronus
 * 
 * Por ejemplo si la edad es 25 y los días de practica son 158 entonces su potencia con el hechizo patronus es de 129
 */


function main() {
    let edadMago=0
    let cantDiasPract=0
    console.log("Que edad tiene el mago?:");
    edadMago=Number(leer())
    console.log("Cuantos dias de practica hay?:");
    cantDiasPract=Number(leer())
    potencia=edadMago*2
    console.log("La potencia de el hechizo es de", potencia+cantDiasPract/2);
    

}


main();
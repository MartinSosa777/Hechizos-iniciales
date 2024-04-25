const leer = require("prompt-sync")();

/**
 * Ej 1
 * Clasificación de Pociones:
 * Solicita al estudiante el nombre de una poción y muestra su nivel de dificultad de acuerdo a su complejidad.
 * 
 * Pociones conocidas: 
 * Felix Felicis - es extremadamente compleja y peligrosa.
 * Polvo de Flu - es compleja pero útil en la red de transportación.
 * Poción Multijugos - es complicada pero muy útil para transformaciones temporales.
 * Cualquier otro tipo de pocion indicar que: No tenemos información sobre esa poción en nuestros registros.
 * 
 */

const POCION_CORRECTA_1="Felix Felicis"
const POCION_CORRECTA_2="Polvo de Flu"
const POCION_CORRECTA_3="Pocion Multijugos"
function main() {
    let pocionIngresada=0;
    let pocionCorrecta1=POCION_CORRECTA_1
    let pocionCorrecta2=POCION_CORRECTA_2
    let pocionCorrecta3=POCION_CORRECTA_3
 console.log("Ingrese el nombre de la pocion");
 pocionIngresada=leer();
 switch (pocionIngresada) {
    case POCION_CORRECTA_1:
        console.log("Es extremadamente compleja y peligrosa");
        break
        case POCION_CORRECTA_2:
            console.log("Es compleja pero util en la red de transportacion");
            break
            case POCION_CORRECTA_3:
                console.log("Es complicada pero muy útil para transformaciones temporales");
                console.log("El nombre de la pocion es correcto");
        break;
 
    default:
        console.log("No tenemos informacion sobre esa pocion");
        break;
 }
}


main();
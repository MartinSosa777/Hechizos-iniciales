const leer = require("prompt-sync")();

/**
 * Ej 2
 * Elección de Varita Mágica:
 * Pide al estudiante el núcleo de una varita mágica y muestra un mensaje personalizado dependiendo del tipo de núcleo.
 * Fénix - ¡Excelente elección! Las varitas con núcleo de fénix son poderosas y leales.
 * Unicornio - Las varitas con núcleo de unicornio son conocidas por su pureza y fuerza.
 * Dragón - ¡Cuidado! Las varitas con núcleo de dragón son poderosas pero pueden ser temperamentales.
 * Cualquier otro tipo de nucleo - No reconocemos ese tipo de núcleo. Por favor, ingrese un núcleo válido.
 */
const VARITA_MAGICA_1="Fenix"
const VARITA_MAGICA_2="Unicornio"
const VARITA_MAGICA_3="Dragon"

function main() {
    let nucleoIngresado=0
    let nucleoVarita1=VARITA_MAGICA_1
    let nucleoVarita2=VARITA_MAGICA_2
    let nucleoVarita3=VARITA_MAGICA_3
    console.log("Ingrese el nucleo de una varita");
    nucleoIngresado=leer()
    switch (nucleoIngresado) {
        case VARITA_MAGICA_1:
            console.log("¡Excelente elección! Las varitas con núcleo de fénix son poderosas y leales.");
            break
            case VARITA_MAGICA_2:
                console.log("Las varitas con núcleo de unicornio son conocidas por su pureza y fuerza.");
                break
                case VARITA_MAGICA_3:
                    console.log("¡Cuidado! Las varitas con núcleo de dragón son poderosas pero pueden ser temperamentales.")
                    break
        default:
            console.log("No reconocemos el tipo de nucleo.Por favor, ingrese el nucleo valido");
    }
}


main();
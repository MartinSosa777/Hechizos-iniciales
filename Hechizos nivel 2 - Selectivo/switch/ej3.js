const leer = require("prompt-sync")();

/**
 * Ej 3
 * Permitir a los estudiantes lanzar hechizos mágicos utilizando un código numérico de 4 dígitos.

Instrucciones:

El programa solicitará al usuario que ingrese un código numérico de 4 dígitos.
Basado en el código ingresado, el programa determinará qué hechizo lanzar.
Utiliza la estructura de control switch para asociar cada código con un hechizo específico.
Si el código ingresado coincide con alguno de los códigos asignados, el programa mostrará el nombre del hechizo correspondiente.
Si el código no coincide con ninguno de los códigos asignados, el programa mostrará un mensaje indicando que el código es incorrecto.
El programa debe asegurarse de que el código ingresado sea un número entero de 4 dígitos.
Hechizos Disponibles:

Expecto Patronum
Wingardium Leviosa
Expelliarmus
Avada Kedavra
 */

const CODIGO_HECHIZO_1=7777
const CODIGO_HECHIZO_2=4543
const CODIGO_HECHIZO_3=4123
const CODIGO_HECHIZO_4=1234

function main() {
    console.log("Ingrese un codigo numerico de 4 digitos");
    codigoIngresado=Number(leer())
    switch (codigoIngresado) {
        case CODIGO_HECHIZO_1:
            console.log("Expecto Patronum");
            break
            case CODIGO_HECHIZO_2:
                console.log("Wingardium Leviosa");
                break
                case CODIGO_HECHIZO_3:
                    console.log("Expelliarmus");
                    break
                    case CODIGO_HECHIZO_4:
                        console.log("Avada Kedavra");
            break;
    
        default:
            console.log("El codigo ingresado es incorrecto");
            break;
    }

}


main();
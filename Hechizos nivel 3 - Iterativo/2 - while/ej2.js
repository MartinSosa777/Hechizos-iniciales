const leer = require("prompt-sync")();

/**
 * Ej 2
 * te enfrentarás a un desafío único y emocionante. Te encuentras en un oscuro y tormentoso bosque, rodeado de la neblina que parece estar cargada de misterio y peligro. En este bosque, los temidos Dementores, criaturas de la oscuridad que se alimentan de la felicidad y los recuerdos alegres, están acechando.

Eres un valiente estudiante de Hogwarts, y tu misión es defender tu propia felicidad y los recuerdos alegres al igual que de una persona querida contra los Dementores. Pero ten cuidado, estos seres malignos no dudarán en atacarte y tratar de absorber tu felicidad y la de tu ser querido.

El desafío comienza ahora. Te encontrarás en un enfrentamiento constante contra los Dementores. Para defenderte, deberás ingresar números aleatorios entre 0 y 3. Si adivinas correctamente el número aleatorio generado por los Dementores, lograrás defenderte y proteger tus recuerdos.

Pero aquí hay un giro: si los Dementores lanzan más de cinco ataques, existe la posibilidad de que aparezca una persona misteriosa para ayudarte a derrotar a los Dementores y restaurar la paz en el bosque.

Recuerda, tanto tú como tu ser querido pueden recibir ataques de los Dementores, pero solo uno a la vez, a menos que ocurra un número especial que permita atacar a los dos al mismo tiempo. Si tu felicidad y recuerdos alegres llegan a cero o la de tu ser querido entonces es el fin para ambos. Mantén tu concentración y tu valentía mientras te enfrentas a este desafío.

¿Estás listo para adentrarte en esta emocionante aventura y demostrar tu valentía contra las fuerzas oscuras? ¡Adelante, el destino del bosque dependen de vos!
 */

const AYUDA_ESPECIAL = "def ayuda especial";
const POSIBILIDAD_PERSONA_MIST = "def posibilidad persona mist";
const NUMERO_ALEATORIO = "def numero aleatorio";
const NUMERO_INGRESADO = "def num ingresado";
const ATAQUE_DEMENTORES = "def ataque dem";
const DAÑO_DEMENTORES = 2;
const NUMERO_ESPECIAL = 15;

function main() {
    let vidaPersonaje = 12;
    let vidaSerQuerido = 10;
    let numeroEspecial = NUMERO_ESPECIAL;
    let personaMisteriosa = POSIBILIDAD_PERSONA_MIST;
    let numeroAleatorio = NUMERO_ALEATORIO;
    let numeroIngresado = NUMERO_INGRESADO;
    let ataqueDem = 0;
    let turnoAlternado = 5;
    let dañoDem = DAÑO_DEMENTORES;
    while (vidaPersonaje > 0 && vidaSerQuerido > 0) {
        numeroAleatorio = Math.floor(Math.random() * 4);
        personaMisteriosa = Math.floor(Math.random() * 11);
        console.log("Ingresa un numero del 0 al 3");
        numeroIngresado = leer()
        if (numeroIngresado == numeroAleatorio) {
            console.log("Lograste defenderte y a tu ser querido");
            ataqueDem = ataqueDem + 1
        } else if (ataqueDem = 5 && numeroIngresado == personaMisteriosa) {
            console.log("Llego alguien a ayudarte")
        } if (numeroIngresado != numeroAleatorio) {
        } else if (numeroIngresado == numeroEspecial) {
            vidaSerQuerido = vidaSerQuerido - dañoDem
            console.log("El dementor te ataco a ti y a tu ser querido, su felicidad y sus recuerdos estan disminuyendo", vidaPersonaje, vidaSerQuerido);
        }
            if (turnoAlternado == 0) {
                vidaPersonaje = vidaPersonaje - dañoDem
                console.log("El dementor te ataco, tu felicidad y tus recuerdos estan disminuyendo", vidaPersonaje);
                turnoAlternado = 1
            } else {
                vidaSerQuerido = vidaSerQuerido - dañoDem
                console.log("El dementor ataco a tu ser querido, su felicidad y sus recuerdos estan disminuyendo", vidaSerQuerido);
                turnoAlternado = 0
            }
        


    }
}


main();
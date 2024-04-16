const leer = require("prompt-sync")();

/**
 * Ej 1
 * En este ejercicio, te convertirás en un joven mago o bruja que se enfrenta a la misión más importante de todas: derrotar a Lord Voldemort. Sin embargo, para hacerlo, necesitarás afinar tus habilidades mágicas y tu astucia.

Tu tarea es programar un simulador de batalla mágica donde tú, como estudiante de Hogwarts, puedas lanzar hechizos contra Voldemort.

El mecanismo es el siguiente: cada vez que lanzas un hechizo, ingresarás un número que representa tu hechizo. Si ese número coincide con un número aleatorio el cual simula acertar un ataque, lograrás un ataque exitoso contra Voldemort y reducirás su vida. Sin embargo, si no logras acertar el número, Voldemort contraatacará y perderás puntos de vida.

El simulador debe seguir funcionando hasta que alguno de los dos, tú o Voldemort, llegue a sus puntos mínimos de vida. Para el estudiante, los puntos de vida son 1, mientras que para Voldemort son -1 (sí, él es un ser oscuro, después de todo).

¡Prepárate para enfrentar la oscuridad y demuestra que eres digno de portar la varita de sauco!

Recuerda, en Hogwarts la valentía, la inteligencia y el trabajo en equipo son fundamentales. ¡Buena suerte!

Vidas iniciales/minimas, daño jugador/enemigo y hechizos a usar (minimo 3) quedan a su propia eleccion
Considerar que:
- la vida del enemigo no puede ser menor que la del jugador
- cada hechizo tiene un valor de daño unico y el enemigo tiene 1 solo hechizo de ataque
 */
const VIDA_MAX_VOLDEMORT = 300;
const VIDA_MAX_MAGO = 250;
const HECHIZO_ENEMIGO = 50;
const HECHIZO_CORRECTO = 20 ;
const HECHIZO_CORRECTO2 = 25;
const HECHIZO_CORRECTO3 = 50;

function main() {
    let vidaMaxEnemigo=VIDA_MAX_VOLDEMORT;
    let vidaMaxMago=VIDA_MAX_MAGO;
    let hechizoVoldemort=HECHIZO_ENEMIGO
    let hechizoIngresado=HECHIZO_CORRECTO
    let segundoHechizoIngresado=HECHIZO_CORRECTO2
    let tercerHechizoIngresado=HECHIZO_CORRECTO3
    let numeroIngresado=0
    let numeroAleatorio=Math.floor(Math.random() * 4);
    while (vidaMaxEnemigo>0 & vidaMaxMago>0) {
        console.log("Ingrese el hechizo correcto en base a un numero");
        numeroIngresado=leer()
        if (numeroIngresado==numeroAleatorio) {
            vidaMaxEnemigo=vidaMaxEnemigo-hechizoIngresado
            console.log("Acertaste tu hechizo, la vida actual de Voldemort es",vidaMaxEnemigo);

            
        }
    }
}


main();


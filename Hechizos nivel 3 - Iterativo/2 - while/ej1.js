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
const VIDA_MAX_VOLDEMORT = 700;
const VIDA_MAX_MAGO = 500;
const HECHIZO_ENEMIGO = 50;
const HECHIZO_CORRECTO_0 = 20;
const HECHIZO_CORRECTO_1 = 25;
const HECHIZO_CORRECTO_2 = 50;
const DEF_NUMERO_INGRESADO = 0;
function main() {
    let vidaMaxEnemigo = VIDA_MAX_VOLDEMORT;
    let vidaMaxMago = VIDA_MAX_MAGO;
    let hechizoVoldemort = HECHIZO_ENEMIGO
    let hechizoIngresado = HECHIZO_CORRECTO_0
    let segundoHechizoIngresado = HECHIZO_CORRECTO_1
    let tercerHechizoIngresado = HECHIZO_CORRECTO_2
    let numeroIngresado = DEF_NUMERO_INGRESADO
    let numeroAleatorio = "def numero aleatorio"
    while (vidaMaxEnemigo > 0 & vidaMaxMago > 0) {
        console.log("Ingrese 0 para usar el primer hechizo, 1 para el segundo y 2 para el tercero");
        numeroIngresado = leer()
        numeroAleatorio = Math.floor(Math.random() * 4);
        if (numeroIngresado == numeroAleatorio) {
            console.log("Ambos fallaron sus hechizos");
        } else if (numeroIngresado == 0) {
            vidaMaxEnemigo = vidaMaxEnemigo - hechizoIngresado
            console.log("Acertaste tu hechizo, la vida actual de Voldemort es", vidaMaxEnemigo);
        } else if (numeroIngresado == 1) {
            vidaMaxEnemigo = vidaMaxEnemigo - segundoHechizoIngresado
            console.log("Acertaste tu hechizo, la vida actual de Voldemort es", vidaMaxEnemigo);

        } else if (numeroIngresado == 2) {
            vidaMaxEnemigo = vidaMaxEnemigo - tercerHechizoIngresado
            console.log("Acertaste tu hechizo, la vida actual de Voldemort es", vidaMaxEnemigo);
        } else if (numeroIngresado != numeroAleatorio) {
            vidaMaxMago = vidaMaxMago - hechizoVoldemort
            console.log("Fallaste tu hechizo, tu vida actual es de", vidaMaxMago);
        } else {
            
        }
    }
}
main();
const leer = require("prompt-sync")();

/**
 * Ej 1
 * Es crucial que los estudiantes aprendan los nombres de los hechizos correctamente para realizar magia de manera efectiva. En la clase de Encantamientos, los estudiantes deben demostrar su habilidad para recordar y lanzar los hechizos correctamente. Ayuda a simular este proceso creando un programa que solicite al usuario el nombre de un hechizo y le dé un número limitado de intentos para ingresarlo correctamente. Si el usuario ingresa el nombre del hechizo correctamente, el programa lo felicitará y finalizará. Si el usuario no logra ingresar el hechizo correctamente después de los intentos permitidos, el programa lo informará y finalizará.
 * 
 * 
 * Por ejemplo: hechizo "Wingardium leviosa", cantidad de intentos maximos 4
 * 
 * Extra: permitir que el programa acepte 3 hechizos diferentes
 */

function main() {
    for (let i = 0; i < 5; i++) {
        let nombreHechizo="Patronus"
        let otroHechizo="Alohomora"
        let difHechizo="Leviosa"
        let nombreHechizoUsuario="def hechizo"
        console.log("Ingrese el nombre del hechizo correctamente");
        nombreHechizoUsuario=leer();
         if (nombreHechizoUsuario==nombreHechizo) {;
            console.log("Felicitaciones ingresaste correctamente el nombre del hechizo");
            i=5
        }   else if (nombreHechizoUsuario==otroHechizo) {
            console.log("Felicitaciones ingresaste correctamente el nombre del hechizo");
            i=5
        }else if (nombreHechizoUsuario==difHechizo) {
                console.log("Felicitaciones ingresaste correctamente el nombre del hechizo");
            i=5
            }
            else
            console.log("Segui intentando");   
            }}
main(); 

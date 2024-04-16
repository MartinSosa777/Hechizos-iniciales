const leer = require("prompt-sync")();

/**
 * Ej 3
 * La preparación de pociones es una habilidad esencial enseñada en la clase de Pociones de Hogwarts. Cada poción requiere una combinación precisa de ingredientes y una ejecución exacta de los pasos para ser exitosa. En este ejercicio, nos sumergiremos en la atmósfera de la clase de Pociones, donde los estudiantes aprenderán a preparar una de las pociones más icónicas: la poción Multijugos. Para preparar esta poción, los estudiantes deben seguir la receta exacta y medir cuidadosamente las cantidades de cada ingrediente. Cada ingrediente tiene un límite de intentos definido, y solo si se logra ingresar la cantidad correcta del ingrediente previo, el estudiante puede avanzar al siguiente. Si el estudiante no logra ingresar la cantidad correcta de un ingrediente dentro de los intentos permitidos, la preparación de la poción fallará y el proceso se verá interrumpido. Solo aquellos estudiantes que sean precisos y persistentes podrán dominar la preparación de la poción Multijugos y disfrutar de sus efectos transformadores.
 * 
 * Receta de la Poción Multijugos:
 * Ingredientes:
 * 3 sanguijuelas reventadas
 * 5 unidades de pulverizado de cuerno de Bicornio
 * 1 pelo de gato negro
 * 2 colas de serpiente
 * 
 * Instrucciones:
    Agrega las 3 sanguijuelas reventadas a la caldera.
    Agita la mezcla lentamente durante 30 segundos en dirección horaria.
    Incorpora las 5 unidades de pulverizado de cuerno de Bicornio y remueve con la cuchara de palo.
    Añade el pelo de gato negro y mezcla suavemente en sentido antihorario durante 1 minuto.
    Por último, agrega las 2 colas de serpiente y revuelve vigorosamente durante 2 minutos.
    Deja que la poción repose durante 5 minutos antes de su uso.
 * 
 */

const SANGUIJUELAS_REV=3;
const PULVERIZADO_DE_CUERNO=5;
const PELO_DE_GATO=1;
const COLAS_DE_SERPIENTES=2;
function main() {
let sanguijelasRev=SANGUIJUELAS_REV
let pulverizadoCuerno=PULVERIZADO_DE_CUERNO
let peloGato=PELO_DE_GATO
let colaSerpiente=COLAS_DE_SERPIENTES

for (let  i= 0; i < 5; i++) {
    console.log("Agrega a la pocion las sanguijelas reventadas");
    
    
}


}


main();



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
    for (let i = 0; i > 5; i++) {
        console.log("Ingrese el nombre del hechizo correctamente");
        let nombreHechizo="def hechizo"
        nombreHechizo=leer();
         if (nombreHechizo=="Patronus") {;
            console.log("Felicitaciones ingresaste correctamente el nombre del hechizo");
            i=5
        }   else{  
            console.log("Segui intentando");   
            }}}
main(); 

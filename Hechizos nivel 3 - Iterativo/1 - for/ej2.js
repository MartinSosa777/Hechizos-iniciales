const leer = require("prompt-sync")();


/**
 * Ej 2
 * Los Dementores son criaturas oscuras que se alimentan de la felicidad de las personas, dejándolas con recuerdos dolorosos y desesperación. Para protegerse de los Dementores, los estudiantes de Hogwarts aprenden el hechizo Patronus, que repele a estas criaturas y los aleja con recuerdos felices. En este ejercicio, simularemos un encuentro con un Dementor en un mini juego donde un estudiante debe lanzar el hechizo Patronus correctamente para repeler al Dementor y proteger su felicidad. Dependiendo de la cantidad de vida del estudiante, se necesitará ingresar el hechizo Patronus varias veces para vencer al Dementor. Si el estudiante no ingresa el hechizo correctamente, perderá turnos y el Dementor consumirá su felicidad y recuerdos felices, acercándose más a la derrota del estudiante. En otro caso si el estudiante ingresa bien los hechizos y logra vencer al dementor entonces se mostrar un mensaje de victoria
 * 
 * Vida maxima del dementor: 1000
 * Vida maxima del estudiante: 350
 * Daño por turno perdido del dementor al estudiante: 75
 * Daño por hechizo acertado del estudiante contra dementor: 267
 * Turnos totales: 5 
 */
const VIDA_MAX_DEM = 1000;

const VIDA_MAX_EST = 350;
const DAÑO_TURNO_PERDIDO = 75;
const DAÑO_HECHIZO_CERTERO = 267;
const HECHIZO_CORRECTO = "Patronus";
function main() {
    

    let vidaDem=VIDA_MAX_DEM
    let vidaMaxEst=VIDA_MAX_EST
    let dañoTurnoPerdido=DAÑO_TURNO_PERDIDO
    let dañoHechizoCertero=DAÑO_HECHIZO_CERTERO
    let hechizoCorrecto=HECHIZO_CORRECTO
    let hechizoIngresado="def hechizo"
    for (let i = 0; i < 5; i++) {
       
        console.log("Ingrese el hechizo correctamente");
        hechizoIngresado=leer()
        if (hechizoIngresado==hechizoCorrecto) {
            console.log("Acertaste el hechizo, el daño fue",dañoHechizoCertero);
           vidaDem=vidaDem-dañoHechizoCertero
            console.log("La vida del dementor actualmente es",vidaDem);

        }else{
        console.log("Fallo");
        vidaMaxEst=vidaMaxEst-dañoTurnoPerdido
        console.log("El dementor te ataco, tu vida actual es",vidaMaxEst);

        
    }}
}


main();
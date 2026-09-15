// Ejercicio: entrada de datos con prompt()

let nombre = prompt("¿Cuál es tu nombre?");
let edad = prompt("¿Cuántos años tienes?");

// Convertimos la edad de texto a número
edad = Number(edad);

console.log("Hola,", nombre);
console.log("Tu edad es:", edad);
console.log("El próximo año tendrás:", edad + 1);

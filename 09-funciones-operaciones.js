// Ejercicio: funciones con parámetros

function calcularTotal(precio, cantidad) {
    return precio * cantidad;
}

let precioProducto = 15000;
let cantidadProducto = 4;

let total = calcularTotal(precioProducto, cantidadProducto);

console.log("Precio:", precioProducto);
console.log("Cantidad:", cantidadProducto);
console.log("Total a pagar:", total);

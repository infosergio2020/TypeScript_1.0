"use strict";
// Tipos Primitivos o Tipos Basicos
//Boolean
var estaConectado = true;
var estaInscripto;
estaInscripto = false;
estaInscripto = true;
// estaInscripto = 2; NO es valido
function tieneDescuento(curso) {
    if (curso === 'typescript')
        return true;
    return false;
}
console.log("tienenDescuento('angular):", tieneDescuento('angular'));
//Number
var estudiantes = 100;
// let estudiantes = '100' NO es valido
var cantidadEstudiantes;
cantidadEstudiantes = 120;
function getCantidadEstudiantes(curso) {
    if (curso === 'typescript')
        return 100;
    return 0;
}
var inscritosCursoTypescript = 100;
// Type: number, hexadecimales
var decimal = 10;
var hexadecimal = 0xf00d;
console.log('hexadecimal', hexadecimal);
console.log('decimal', decimal);
//Type: number, binario
var binario = 10;
console.log('binario', binario);
//Type: Number , octal
var octal = 493;
console.log('octal', octal);

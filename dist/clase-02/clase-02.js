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
//STRING
var nombre = 'Sergio';
var apellido = 'Aguilar';
var nombreCompleto = nombre + ' ' + apellido;
console.log('nombreCompleto', nombreCompleto);
//String + ES6 Template literals
var nombreCompleto2 = nombre + " " + apellido;
console.log('nombreCompleto2', nombreCompleto2);
var arregloCursos = ['Typescript', 'Angular'];
var mensaje = "\nMi nombre es  " + nombreCompleto + " y tengo " + arregloCursos.length + " cursos.\n\u00A1Gracias por asistir!\n";
var mensaje2 = '\n Mi nombre es ' + nombreCompleto + ' y tengo ' + arregloCursos.length + '\n ¡Gracias por asistir!';
//los tipos especiales en Typescript
// Tipo: any
var desconocido;
desconocido = 2;
var desconocido2 = 2;
//Tipo: Void
var vacio;
function mostrarContenido(curso) {
    var mensaje = curso ? "Bienvenido al curso " + curso : 'Suscribete al curso!';
    console.log('mensaje', mensaje);
}
mostrarContenido('typescript');
//Tipo: Never
var nunca;
function retornaError(error) {
    throw new Error("Error TypeScript. " + error);
    //Nunca retorna un valor!
}
// retornaError('Valor inesperado');
function cicloInfinito() {
    while (true) { }
}
//Tipo: Null y Undefined
var variableUndefined = undefined;
var variableNull = null;
function retornoNull() {
    return null;
}
function retornoUndefined() {
    return undefined;
}
//Funciones en TypeScript
function hola(nombre) {
    if (nombre)
        return 'Hola ' + nombre;
    return '¡Hola!';
}
console.log(hola(nombreCompleto));
console.log(hola());
//Arreglos en Typescript
var cursos123;
cursos123 = ['typescript', 'Angular'];
//arreglos con generics
var nombres;
nombres = ['Luis Alvares', 'Alvaro Felipe'];
var arreglo = [2, 'cadena', true]; //solo deberia usarse cuando interactuamos con librerias externas
//Tuplas
var infoCursos = ['typescript', 100];
infoCursos = ['angular', 200];
var curso1234 = ['typescript', 150, '08/2019'];
console.log('curso', curso1234);
var nuevosInscritos = 10;
console.log('fecha de inicio', (curso1234[2]));
console.log('Total de inscritos', curso1234[1] + nuevosInscritos);
var tuplaTest = ['a', 'b'];
var tuplaTemp = ['c', 'd'];
tuplaTemp = tuplaTest;
console.log('tuplaTemp', tuplaTemp);

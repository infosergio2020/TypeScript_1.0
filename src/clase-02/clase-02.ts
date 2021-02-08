// Tipos Primitivos o Tipos Basicos
//Boolean
let estaConectado = true;
let estaInscripto: boolean;
estaInscripto = false;
estaInscripto = true;
// estaInscripto = 2; NO es valido

function tieneDescuento(curso) {
    if(curso === 'typescript')
        return true;
    return false; 
}

console.log(`tienenDescuento('angular):`, tieneDescuento('angular'));

//Number
let estudiantes = 100;
// let estudiantes = '100' NO es valido
let cantidadEstudiantes: number;
cantidadEstudiantes = 120;

function getCantidadEstudiantes(curso):number {
    if(curso === 'typescript')
        return 100;
    return  0;
}

let inscritosCursoTypescript: number = 100;

// Type: number, hexadecimales
let decimal: number = 10;
let hexadecimal: number = 0xf00d;
console.log('hexadecimal', hexadecimal);
console.log('decimal',decimal);

//Type: number, binario

let binario:number = 0b1010
console.log('binario',binario);


//Type: Number , octal
let octal = 0o755;
console.log('octal',octal);


//STRING

let nombre = 'Sergio';
let apellido: string = 'Aguilar';
let nombreCompleto = nombre + ' ' + apellido;
console.log('nombreCompleto', nombreCompleto);

//String + ES6 Template literals
let nombreCompleto2 = `${nombre} ${apellido}`;
console.log('nombreCompleto2', nombreCompleto2);
let arregloCursos = ['Typescript','Angular'];
let mensaje = `
Mi nombre es  ${nombreCompleto} y tengo ${arregloCursos.length} cursos.
¡Gracias por asistir!
`;
let mensaje2 = '\n Mi nombre es ' + nombreCompleto + ' y tengo ' +arregloCursos.length + '\n ¡Gracias por asistir!'

//los tipos especiales en Typescript
// Tipo: any
let desconocido;
desconocido = 2;
let desconocido2:any = 2;

//Tipo: Void
let vacio:void;
function mostrarContenido(curso:string):void {
    const mensaje = curso ? `Bienvenido al curso ${curso}`: 'Suscribete al curso!'
    console.log('mensaje',mensaje);
}
mostrarContenido('typescript');

//Tipo: Never

let nunca:never;

function retornaError(error:string): never {
    throw new Error("Error TypeScript. "+ error);
    //Nunca retorna un valor!
}

// retornaError('Valor inesperado');
function cicloInfinito():never {
    while (true) {}
}

//Tipo: Null y Undefined

let variableUndefined: undefined = undefined;
let variableNull: null = null;

function retornoNull():null {
    return null;
}
function retornoUndefined():undefined {
    return undefined;
}

//Funciones en TypeScript

function hola(nombre?:string): string {
    if (nombre)
        return 'Hola '+ nombre;
    return '¡Hola!'
}
console.log(hola(nombreCompleto));
console.log(hola());


//Arreglos en Typescript
let cursos123:string[];
cursos123 = ['typescript','Angular'];
//arreglos con generics
let nombres: Array<string>
nombres = ['Luis Alvares','Alvaro Felipe'];
let arreglo: any[] = [2,'cadena',true]; //solo deberia usarse cuando interactuamos con librerias externas


//Tuplas
let infoCursos: [string,number] = ['typescript',100];
infoCursos = ['angular',200];

let curso1234: [string,number,string] = ['typescript',150,'08/2019']
console.log('curso',curso1234);

let nuevosInscritos = 10

console.log('fecha de inicio',(curso1234[2]));
console.log('Total de inscritos', curso1234[1] + nuevosInscritos);

let tuplaTest: [string,string] = ['a','b'];
let tuplaTemp: [string,string] = ['c','d'];

tuplaTemp = tuplaTest;
console.log('tuplaTemp',tuplaTemp);




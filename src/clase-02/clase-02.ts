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



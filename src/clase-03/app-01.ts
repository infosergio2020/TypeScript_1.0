export {}; //Modulo en TS
//ALIAS para tipos en Typescript
let curso: string = 'TypeScript';
let cursoNuevo: string | number;
cursoNuevo = 'javaScript'
cursoNuevo = 2;

function getCurso(): string | number {
    // return 'javaScript'
    return 1
}

//arreglos

let cursos: string[] = ['Javascript','TypeScript'];
let cursos2: (string | number)[] = ['Javascript','TypeScript',1];

console.log('cursos',cursos);
console.log('cursos2',cursos2);

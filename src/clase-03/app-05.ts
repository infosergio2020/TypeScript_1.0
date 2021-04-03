// INTERFACES EN TYPESCRIPT

interface ICurso{
    nombre: string;
    identificador?: number;
}


//aca lo que hace typescript es inferir en el tipo de dato
//para que el compilador no infiera, debemos ser mas explicitos por lo que vamos a utilizar la interfaz como un tipo de dato
// let cursoTypeScript: ICurso = {
//     nombre: 'TypeScript',
//     identificador: 1
// }

// let cursoTypeScript = {
//     nombre: 'JavaScript',
//     identificador: 2
// }

// console.log('cursoTypeScript',cursoTypeScript);

//

// let curso2: ICurso;
// curso2 = {
//     nombre:'Angular'
// }

// curso2={
//     nombre:'TypeScript',
//     identificador: 100
// }

// console.log('curso2',curso2);


//Extendiendo interface | Herencia de interfaces

interface CursoEDteam extends ICurso {
    costo: number;
}

const primerCurso: CursoEDteam = {
    nombre: 'TypeScript desde Cero',//ICurso
    identificador: 200,//ICurso
    costo:100//CursoEDteam
}


console.log('primerCurso',primerCurso);

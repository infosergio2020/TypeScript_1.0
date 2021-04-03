export {};
//ASERCIONES DE TIPO

let codigoCurso: any;
codigoCurso = 100;
//aca este casting <> se conoce como asercion
let numeroCurso: number = <number>codigoCurso;
console.log('numeroCurso', numeroCurso);

//este obj no tiene propiedades definidas (por eso debemos definirlos tipos en el {})
// let estudiante: { nombre:string, curso:string}; //asi
// estudiante.nombre='Jorge';
// estudiante.curso='javaScript';

//aca definimos un tipo que podemos reutilizar
type Estudiante = {nombre:string,curso:string};
let estudiante2 = <Estudiante>{};
estudiante2.nombre = 'Roberto';
estudiante2.curso = 'Typescript';
console.log('estudiante',estudiante2);


//ahora con JSON + uso de asercion de tipos
let estudiante3 = `{"nombre":"sergio", "curso":"Javascript"}`;
let objetoEstudiante:Estudiante = <Estudiante>JSON.parse(estudiante3);
console.log('estudiante3', objetoEstudiante);


let cursos = ['TypeScript desde cero','Angular desde cero']
console.log('cursos',cursos);

const inscriptos = 20;

function suma(a: number,b: number) {
    return a + b
}

const resultado = suma(2, 3);
console.log('2+3= ',resultado);


//template literal

let codigo = `
    <button>hola</button>
    <div></div>
`
console.log('codigo', codigo);

let curso = 'TypeScript'
let saludo2 = `Bienvenidos al curso de ${curso}`
console.log('saludo',saludo2);

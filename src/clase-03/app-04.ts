// ENUMERADOS EN TYPESCRIPT

// type Curso: string | number;

enum Curso {
    JavaScript,
    TypeScript,
    Angular
}

let curso: Curso = Curso.JavaScript;
console.log('curso', curso);
console.log('curso', Curso[curso]);


//Otro Ejemplo

enum Dia {
    Lunes, // i=0
    Martes,
    Miercoles,
    Jueves,
    Viernes // i=4
}

console.log('Viernes',Dia.Viernes);

enum FinSemana {
    Sabado = 5,
    Domingo
}

console.log('Sabado',FinSemana.Sabado);
console.log('Domingo',FinSemana.Domingo);


//control sobre los valores para enumerados

enum Mes {
    Enero = 'Ene',
    Febrero = 'Feb',
    Marzo = 'Mar',
    Abril = 'Abr',
    Mayo = 'May',
    Junio = 'Jun',
    Julio= 'Jul'
}

console.log('Marzo', Mes.Marzo);



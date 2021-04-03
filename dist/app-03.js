"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//ASERCIONES DE TIPO
var codigoCurso;
codigoCurso = 100;
//aca este casting <> se conoce como asercion
var numeroCurso = codigoCurso;
console.log('numeroCurso', numeroCurso);
var estudiante2 = {};
estudiante2.nombre = 'Roberto';
estudiante2.curso = 'Typescript';
console.log('estudiante', estudiante2);
//ahora con JSON + uso de asercion de tipos
var estudiante3 = "{\"nombre\":\"sergio\", \"curso\":\"Javascript\"}";
var objetoEstudiante = JSON.parse(estudiante3);
console.log('estudiante3', objetoEstudiante);

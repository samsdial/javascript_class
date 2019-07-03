### Javascript Clases

Este es el nuevo proyecto de clases de Javascript.
paradigamas de programacion
Imperativo vs Declarativo

Imperativo
Indico el ¿Como?
En Terminos de instrucciones.
Declarativo
Indico el ¿Que?
En Terminos de proporsiciones y afirmaciones.
Evitar el cambio del estado
```js
const numbers = [1, 2, 3, 4]
/*Imperativo*/
function squared() {
  let arr = [];
  for (let i = 0; i < numbers.length;i+){
    arr.push(numbers[i] * numbers[i]);
  }
  return console.log(arr);
}
squared(numbers);
/*Declarativo*/
console.log(numbers.map(num=>num*num));
```

Programación Síncrona
- programación Paralela
- Acciones Bloqueantes
- Paralelismo: varios objetos realizando una accion
Programación Asíncrona
- programación Concurrente
- Acciones No bloqueantes
- Concurrencias: un solo objeto con varias tareas al mismo tiempo

/*Gramatica Javascript*/
Nomenclatura:
- En Archivos
```
js_style_guide.js
```
- En Objetos, primitivos, funciones e instacias (camelCase)
```js
const myObj ={}
const myNum = 1
const myMap = new Map()
function myFn() {}
```
- En Clases y contructores (PascalCase)
```js
class MyClass {}
function MyClass() {}
```
- En constantes Usa UPPER_CASE
```js
const MY_CONSTANT = 1;
```
- Palabras reservadas
```js
A: abstract
B: boolean, break, byte
C: case, catch, char, class, const, continue
D: debugger, default, delete, do, double
E: else, enum, export, extends
F: false, final, finally, float, for, function
G: goto
I: if, implements, import, in, instanceof, int, interface
L: long
N: native, new, null
P: package, private, protected, public
R: return
S: short, static, super, switch, synchronized
T: this, throw, throws, transient, true, try, typeof
V: var, volatile, void
W: while, with
```

Buenas Practicas

--Orientado a objetos
4 formas de crear objetos en JS:

1. Objetos Literales
2. Prototipos
3. Funciones Constructoras
4. Clases


**Funciones como objetos de primera clase,
**Tipado Blando
**Alcance(scoping)
**Elevacion(Hoistung)
    let variables de bloque
    const valores que no van a cambiar
**Modo Estrícto(strict Mode) deprecado del version 5
**Funciones anónimas: Declaradas dinámicamente en tiempo de ejecución:

### Javascript Clases

Este es el nuevo proyecto de clases de Javascript.

Paradigama:
Ejemplo, modelo o patrón


Tipos de Programación:
Procedural
Orientada a objetos
Funcional
Reactiva

Formas de Programación:

Como se escribe

- Imperativa
- Declarativa

Como se ejecuta
- Programación Síncrona
- Programación Asíncrona




Imperativo vs Declarativo

Imperativo (Por ordenes)

Indico el ¿Como?
Describo un problema en terminos de instruciones y condiciones para llegar a un resultado.

Modifica el estado de un programa al permitir la Mutación


Declarativo (Compositivo el codigo)

Indico el ¿Que?
En Terminos de proporsiciones y afirmaciones.
Evitar el cambio de estado de un programa al prevenir la Mutación de valores

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

### Closure
Patron de diseño, que nos permite matener privacidad en atributos y métodos.

```
let contador = (() => {
	// funcion privada
	let _contador = 0
	function incrementar (){
		return _contador++
	}
	function decrementar (){
		return _contador--
	}
	function valor (){
		return _contador
	}
	return {
		incrementar: incrementar,
		decrementar: decrementar,
		valor: valor
	}
})();

console.log( contador.valor() )


```

### Tipos de datos:

1. Primitivos
	- string
	- number
	- boolean
	- null
	- undefined
2. Complejos (accedemos a una referencia del valor)
	- Object
	- array
	- function

### Conceptos Basicos de POO

1. Conceptos basicos
	- Paradigma de programacion plasmar o representar lo concreto a lo abstracto
	- vivimos en el mundo de las ideas y los objetos son representaciones físicas de esas ideas

	1.1 Clase
		Es un modelo a seguir
		Sintax: 
		```javascript
			class Perro {...}
		```
	1.2 Objeto
		Representación o instacia de una clase
		sintax:
		kenai = new Perro()


	1.3 Métodos
		Son las cosas o Acciones que hacen los objetos
		- Sintax:
			objeto.metodo()
		los métodos fuera de los objetos se llaman funciones
		- Sintax:
			function ladrar() {...}
		Los parametros son argumentos (datos) que se pueden pasar o no
		a una función
		- Sintax:
			function comer(comida) {...}
	1.4 Atributos
		Son las caracteristicas o Propiedades que tienen los objetos
		- Sintax:
			Objeto.atributo = Valor 

***(instancia un objeto que pertenece a un tipo de clase)***
### Creando Objetos: Objeto Literal

### Ceando Objetos con función Constructora

### Creando Objetos con clases ES6

### This. Asignacion Implicita

### This. Asignacion Expicita y con new

### This. Asignacion con new y contexto global

### Arrow fuctions y el problema de this  
//////// 1. Javascript ////////

// cual es la salida de cada console.log
class Color {
  constructor(value) {
    this.color = value;
  }

  print() {
    console.log(this.color);
  }
}

const colorFactory = (value) => {
  const color = value;

  return {
    print: () => console.log(color)
  }
}

const color1 = new Color('cyan');
const color2 = colorFactory('red');

color1.color = 'yellow';
color2.color = 'purple';

color1.print();//yellow
color2.print();//red

// cual es la salida de este código 
// hoisting
function a() {
  console.log("a");
}
var b; // undefined
a(); // a
b(); // b is not a function
b = function() {
  console.log("b");
}

// cual es la salida de este object.hi()??
const foo = 'Ren';
const bar = 'Stimpy';
this.foo = 'red';
this.bar = 'white';
let object = {
  foo: 'Batsy',
  bar: 'Robin',
  hi: () => {
    console.log(`Hi, ${this.foo} & ${this.bar}`)
  }
};

object.hi();//Hi, Ren & Stimpy
// Hi, undefined undefined

// cual es la salida de estos ciclos?
const a = { foo: 'bar', baz: 'yell', res: 'bal'};
const b = ['kool', 'botz', 'tezt'];

for(let some in a) {
  console.log(some);
  a[some]
  a.foo
}//error
// foo, baz, res

for(let some in b) {
  console.log(some);
}// 'kool' 'botz' 'tezt'
// 0, 1, 2
for(let some of a) {
  console.log(some);
}//foo: 'bar', baz: 'yell', res: 'bal'
// next: () => ({ value: 'X', done: true })
// a is not iterable
for(let some of b) {
  console.log(some);
} // 'kool' 'botz' 'tezt'

// en que orden se ejecutan los console.log y que imprimen?
var a = 6;
(function() {
  const foo = true;
  let a = 2;

  console.log(1);
  setTimeout(() => {
    console.log(foo == 1 ? 3 : 'bar');
  }, 1000);
  console.log(a);
  setTimeout(() => {
    console.log(4);
  }, 0);
  console.log(foo === 1 ? 5 : 'baz');
  a = 'tezt';
})(); // IIFE
console.log(a);

//1
//2
//baz
//6
//4
//3

// 1, 2, baz, 6, 4, 3

// puedes completar el codigo para que fileReader tenga este comportamiento?
const fileReader = new Promise((res, err)=> {
  res('hola')
});
async hola(){
  const fileReader = await
}

const fileReader = (async () => 'some')();
const fileReader = Promise.resolve('some');

fileReader.then((data) => console.log(data, 'content')); // some, content

// puedes completar la implementacion de la clase Foo?
class Foo {
  
  constructor() {
    this.sum = 0
  }

  add(number){
    this.sum = this.sum+number
    return this; // 
  }

  getTotal(){
    return this.sum
  }
}

const foo = new Foo();

foo.add(1).add(2).add(3).add(4).getTotal();// should return 10

// Punto extra!
// puedes escribir una funcion que tenga este comportamiento ?
sum(3)(5) // 8
sum(3,5) // 8

//////// 2. NPM ////////

// Conoces que es NPM? que comandos conoces? has escuchado de npm link? npm pack?
// admin de paquetes de node: repo de libs, inicializacion de projectos JS, generacion de modulos.

// npm i
// npm init
// npm build
//

// sabes que diferencia hay entre 1.2.3, ~1.2.3 y ^1.2.3 al instalar dependencias?
// 1.2.3 -> exacta
// ^ -> version en adelante: ^1.2.3 -> 4.5.6
// ~ -> // 1.2.X
// ^ -> // 1.X.X 
// major.minor.path

// dependencies y devDependencies???
// dependencies: se usan en prod
// devDependencies: solo dev (nodemon)

// peer dependencies??
// 

//////// 3. Node.js ////////

// Qué es Node.js??
// es un ambiente virtual en el que podemos correr js del lado del servidor. Node.js corre sobre el motor v8 de chrome. non-blocking I/O.

// Qué librerias nativas de Node.js has utilizado??
// fs
// http
// Utils

// Streams
// 

// Event emmiter
// un event emmiter es el encargado de emitir y permitir suscripciones a la emision de los eventos. Es interesante para implementar aplicaciones orientadas a eventos.

// Event loop
// es una funcion de Node.js que se encarga de revisar el call stack y el callback queue. Si el call stack esta vacio, verifica del callback queue que puede ejecutar.


// Profiling
// 

// Debug
// Inspect chrome. 

// Cómo manejas variables de entorno y secretos para usarlos en la ejecución de tu programa Node.js?
// env vars.

// Express.js

// middleware


//////// 4. Fundamentos ////////

// OOP?
// herencia, polimorfismo, // abstraccion y encapsulamiento
// crear objetos con diferentes metodos y propiedades.

// Imperative programming?
// instrucciones que estan explicitamente escritas en el codigo.

// FP?

// reactive Programming?

// por qué es mejor componer objetos en lugar de herencia clasica?
// depende del size del project: small: hieracy, big composition

//////// 5. Principios de diseño ////////

// SOLID
// single resp.
// Open/close
// liskov
// interface segregation
// Dependency Injection

// DRY
// Dont repeat yourself: usar abstracciones para evitar replicacion de codigo.

// Dependency Injection / IoC
// Es un patron el en cual podemos inyectar alguna dependencia a las clases que lo requieren.

//////// 6. Unit testing ////////

// Podrías definir qué es un Unit Test?? Has utilizado Unit Tests en tu trabajo??
// No
// Qué frameworks de Unit Tests conoces??
// Mockito (Java), Mocka. 

// Que ventajas ofrecen las pruebas unitarias en el proceso de desarrollo de software?
// entre mayor cobertura, voy a tener mayor confianza en que van a aparecer menos bugs. Verificar funcion a funcion que las funciones respondan a los edge cases como se espera.

// Por qué una prueba unitaria debe ejecutarse de forma aislada?


//////// 7. Misc ////////

// Git (repos, branching strategies, tools)
// Si, 
// prod, QA, Dev, sobre dev se crean los branches (fix/dev_name/)

// CI/CD (Steps, pipelines, tools)
// Gitlab

// NoSQL
// mayor fuerte con sistemas transaccionales. 
// MongoDB.
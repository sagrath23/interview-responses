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

color1.print(); //yellow
color2.print(); //red

// cual es la salida de este código 
function a() {
  console.log("a");
}
var b; // undefined
a();
b(); // error
b = () => {
  console.log("b");
}

// cual es la salida de este object.hi()??
const foo = 'Batsy';
const bar = 'Robin'
let object = {
  
  hi: () => {
    
    console.log(`Hi, ${this.foo} & ${this.bar}`)
  }
};

object.hi();

// Hi, Batsy & Robin
// params 
// Hi, undefined, undefined

// cual es la salida de estos ciclos?
const a = { foo: 'bar', baz: 'yell', res: 'bal'};
const b = ['kool', 'botz', 'tezt'];

for(let some in a) {
  console.log(some);
} //bar yell bal
// foo, baz, res

for(let some in b) {
  console.log(some);
}//kool botz tezt
// 0, 1, 2

// next = () => ({ vaule: 'x', next: true })
for(let some of a) {
  console.log(some);
}// a is not iterable

for(let some of b) {
  console.log(some);
}// kool, botz, tezt

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
})();
console.log(a);

//1, 2, 4, bar,  baz, tezt
// 1, 2, baz, 6, 4, 3

// puedes completar el codigo para que fileReader tenga este comportamiento?
const fileReader = Servicio.imprimir(data);
const fileReader = new Promise((resolve) => resolve('some'));
const fileReader = Promise.resolve('some');
const fileReader = (async () => 'some')();

fileReader.then((data) => console.log(data, 'content')); // some, content

// puedes completar la implementacion de la clase Foo?
class Foo {
  constructor() {}
  let total = 0;
  add(value){
    value += value;
    return this;
  }

  getTotal() {
    return total;
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
// manejador de paquetes de node.
// npm start
// npm i
// npm run

// sabes que diferencia hay entre 1.2.3, ~1.2.3 y ^1.2.3 al instalar dependencias?


// dependencies y devDependencies???
// dependencies: proyecto en general
// devDependency: proceso de desarrollo

// peer dependencies??
// 

//////// 3. Node.js ////////

// Qué es Node.js??
// plataforma de codigo abierto para ejecutar JS del lado del servidor. muy usado en contextos de data intense.

// Qué librerias nativas de Node.js has utilizado??
// express - no
// mongoose - no
// nodemon - no
// fs - si
// Process
// http / http2

// Streams

// Event emmiter

// Event loop

// Profiling

// Debug

// Cómo manejas variables de entorno y secretos para usarlos en la ejecución de tu programa Node.js?

// Express.js
// API de servicios para CRUD, 
// middleware
// access-control, un componente que permite comunicacion entre dos plataformas diferentes



//////// 4. Fundamentos ////////

// OOP?
// composicion~abstraccion, herencia, implementacion~polimorfismo, encapsulamiento
// Imperative programming?

// FP?

// reactive Programming?

// por qué es mejor componer objetos en lugar de herencia clasica?
// herencia puede dificultar el flujo de la aplicacion
Class Foo {
  constructor(){}
}

Class Some {
  add() {
    const foo = new Foo()
  }

  setFoo(foo) {
    this.foo = foo
  }

  add(foo) {
    this.foo
  }
}

//////// 5. Principios de diseño ////////

// SOLID
// Single Resp. 
// Open/Close 
// Liskov
// Inteface strategies
// Dependency injection

// DRY
// Dont repeat yourself

// Dependency Injection / IoC


//////// 6. Unit testing ////////

// Podrías definir qué es un Unit Test?? Has utilizado Unit Tests en tu trabajo??

// Qué frameworks de Unit Tests conoces??
// 

// Que ventajas ofrecen las pruebas unitarias en el proceso de desarrollo de software?
// como son pruebas para secciones pequeñas de codigo, te permite un desarrollo mas fluido y no tienes que hacer validaciones posteriores

// Por qué una prueba unitaria debe ejecutarse de forma aislada?


//////// 7. Misc ////////

// Git (repos, branching strategies, tools)
// Si
// 
// CI/CD (Steps, pipelines, tools)
// NO
// NoSQL
// MongoDB
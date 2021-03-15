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
color2.color = 'purple'; // { color: purple, hi: ()=> console.log(color))}

color1.print(); // {color: yellow} // yellow
color2.print(); // purple // red

// cual es la salida de este código 
a(); //a
function a() {
  console.log("a");
}
b(); // no function
var b = function() {
  console.log("b");
}

// cual es la salida de este object.hi()??
const foo = 'Ren';
const bar = 'Stimpy';
this.foo = 'Wanda';
this.bar = 'Vision';
let object = {
  foo: 'Batsy',
  bar: 'Robin',
  hi: () => {
    console.log(`Hi, ${this.foo} & ${this.bar}`)
  }
};

object.hi();// Hi, Ren & Stimpy // Hi, undefined & undefined

// cual es la salida de estos ciclos?
const a = { foo: 'bar', baz: 'yell', res: 'bal'};
const b = ['kool', 'botz', 'tezt'];

for(let some in a) {
  console.log(some);
  a[some];
}  // foo: 'bar', baz: 'yell', res: 'bal'
// foo, baz, res

for(let some in b) {
  console.log(some);
}  // 0 ,1 , 2

for(let some of a) {
  console.log(some);
}  // no es iterable

for(let some of b) {
  console.log(some);
} // 'kool', 'botz', 'tezt'

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
// 1
// 2
// baz
// 3 // 6
// 4
// 6 // 3

// puedes completar el codigo para que fileReader tenga este comportamiento?
const fileReader = new Promise(){
  resolve("Some, content")
};
const fileReader = (async() => 'some')();
const fileReader = Promise.resolve('some');

Promise.allSettled
Promise.race
Promise.all

fileReader.then((data) => console.log(data, 'content')); // some, content



// puedes completar la implementacion de la clase Foo?
class Foo {
  constructor() {
    total = this.total
  }
  add(num){
    this.total = this.total + num
    return this
  }

  getTotal(){
    return this.total
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

// sabes que diferencia hay entre 1.2.3, ~1.2.3 y ^1.2.3 al instalar dependencias?

// dependencies y devDependencies???

// peer dependencies??


//////// 3. Node.js ////////

// Qué es Node.js??
// es una subrutina (runtime) de JS. Funciona sobre V8. permite ejecutar codigo asincrono de JS. Esta ligado fuertemente en eventos.  

// Qué librerias nativas de Node.js has utilizado??
// utils, Stream, fs

// Streams
// para recibir o enviar datos constantemente (realtime). 

// Event emmiter
// es donde se ponen todo lo que se llame por eventos. 
// 

// Event loop
// es lo que hace que se pueda ejecutar codigo async en JS. al ejecutar el codigo, las instrucciones async se pasan a un stack donde se estan monitoreando las respuestas.

// Profiling
// 

// Debug
// 

// Cómo manejas variables de entorno y secretos para usarlos en la ejecución de tu programa Node.js?
// .env -> dotenv

// Express.js

// middleware


//////// 4. Fundamentos ////////

// OOP?

// Imperative programming?

// FP?

// reactive Programming?

// por qué es mejor componer objetos en lugar de herencia clasica?


//////// 5. Principios de diseño ////////

// SOLID

// DRY

// Dependency Injection / IoC


//////// 6. Unit testing ////////

// Podrías definir qué es un Unit Test?? Has utilizado Unit Tests en tu trabajo??

// Qué frameworks de Unit Tests conoces??

// Que ventajas ofrecen las pruebas unitarias en el proceso de desarrollo de software?

// Por qué una prueba unitaria debe ejecutarse de forma aislada?


//////// 7. Misc ////////

// Git (repos, branching strategies, tools)

// CI/CD (Steps, pipelines, tools)

// NoSQL
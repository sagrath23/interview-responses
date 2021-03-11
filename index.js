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
  const color = value; //red 

  return {
    print: () => console.log(color) // red
  }
}

const color1 = new Color('cyan'); 
const color2 = colorFactory('red');

color1.color = 'yellow';
color2.color = 'purple'; // { color: purple, hi: () => {}}

color1.print();  //yellow
color2.print();  //red

// cual es la salida de este código 
function a() {
  console.log("a"); //a
}
var b; // undefined
a();// a
// b();// b is not a function -> error
b = function() {
  console.log("b");  // Error 
}
b();// b

// cual es la salida de este object.hi()??
const foo = 'Ren';
const bar = 'Stimpy';

this.foo = 'Wanda';
this.bar = 'Vision';

let object = {
  foo: 'Batsy',
  bar: 'Robin',
  hi: () => {
    console.log(`Hi, ${this.foo} & ${this.bar}`) //   Hi, Ren & Stimpy
  }
};

object.hi(); // // Hi, undefined & undefined

// cual es la salida de estos ciclos?
const a = { foo: 'bar', baz: 'yell', res: 'bal'};
const b = ['kool', 'botz', 'tezt'];

for(let some in a) {
  console.log(some);
}
// foo baz res

for(let some in b) {
  console.log(some);
}
// 0 1 2

for(let some of a) {
  console.log(some);
}
// Error // a is not iterable
// next: () => ({ value: 'X', done: true })
for(let some of b) {
  console.log(some);
}
// kool botz tezt

// en que orden se ejecutan los console.log y que imprimen?
var a = 6;
(function() {
  const foo = true;
  let a = 2;

  console.log(1);
  setTimeout(() => {
    console.log(foo == 1 ? 3 : 'bar');  //3
  }, 1000);
  console.log(a);
  setTimeout(() => {
    console.log(4);  //4
  }, 0);
  console.log(foo === 1 ? 5 : 'baz'); //
  a = 'tezt';
})();
console.log(a);//6
// 1 2 baz 6 4 3

// puedes completar el codigo para que fileReader tenga este comportamiento?
//const fileReader = void 0;
const fileReader = new Promise((res, err) => {
  res('some');
});
fileReader.then((data) => console.log(data)); // some

async promesa((res, err) => {
  if(res) 
    return res('some');
  if(err)
    return 'Error';
})
const fileReader = (async() => 'some')();
Promise.race();
Promise.all();

// let, var, const
// let -> var de alcance limitado, se elimina apenas se alcanza el final del bloque 
// var -> variable de bloque, persiostente en la ejecucion del archivo.

//   z1.2.3  1 = Versión exacta, 2 = cambios no extremos 3. Path 


function a() {
  var foo ='3';
  function b() {
    var foo = '5';

    return foo;
  }

  console.log(b());
}
b();
let b = () => {};
// const -> no cambia valor de asignacion dentro del codigo

// puedes completar la implementacion de la clase Foo?
class Foo {
  constructor() {}
}

const foo = new Foo();

foo.add(1).add(2).add(3).add(4).getTotal();// should return 10

// Punto extra!
// puedes escribir una funcion que tenga este comportamiento ?
sum(3)(5) // 8
sum(3,5) // 8

//////// 2. NPM ////////

// Conoces que es NPM? que comandos conoces? has escuchado de npm link? npm pack?
// herramienta para generar interaccion con el codigo en node y la consola que va a interpretar el proyecto.

// npm i 
// npm init
// npm build
// 

// link: carga paquetes locales en proyectos

// sabes que diferencia hay entre 1.2.3, ~1.2.3 y ^1.2.3 al instalar dependencias?
// 1.2.3 - exacta
// ~1.2.3 - mayor patch -> 1.2.x
// ^1.2.3 - mayor minor -> 1.x.x

// dependencies y devDependencies???
// dep: se generan de manera global. 
// devDep: se generan solo en entorno de desarrollo.

// peer dependencies??
// 

//////// 3. Node.js ////////

// Qué es Node.js??
// es un motor que permite interpretar y ejecutar la escritura de JS. permite trabajo por eventos almacenados.
// single thread. 

// Qué librerias nativas de Node.js has utilizado??
// utils, http, fs 
// crypto

// Streams
// 

// Event emmiter
// 

// Event loop
// hilo de ejecucion
// // tick

// Profiling
// 

// Debug
// 

// Cómo manejas variables de entorno y secretos para usarlos en la ejecución de tu programa Node.js?
// // env vars: Process.env.nombreVariable
// SET nombreVariable='some' & node .
// dotfiles -> .env

// Express.js

// middleware


//////// 4. Fundamentos ////////

// OOP?
// abstraccion, encapsulamiento, herencia y polimorfismo.

class X {
  sum(x: int, y: int){

  }
  sum(x: Imaginary, y: Imaginary) {

  }
}

x.sum(2,4); // 6
x.sum(3i, 4i); // 7i

// Imperative programming?
// son instrucciones de control explicitas en el codigo 

// FP?
// 

// reactive Programming?

// por qué es mejor componer objetos en lugar de herencia clasica?


//////// 5. Principios de diseño ////////

// SOLID
// principios que genran una mejor calidad en el codigo.

// DRY
// evita la repeticion de codigo en el desarrollo. se busca hacer una buena abstraccion al iniciar el proceso de desarrollo para evitar duplicar codigo.

// Dependency Injection / IoC
// 

class X {
  x: A

  @Injectable
  setA(a: A) {
    this.x = a;
  }

  function sum(val: int) {
    // this.x = new A(val);

    return this.x;
  }
}

//////// 6. Unit testing ////////

// Podrías definir qué es un Unit Test?? Has utilizado Unit Tests en tu trabajo??
// es una verificacion en "tiempo real" del codigo escrito, que busca verificar que el codigo sea robusto y confiable.

// Qué frameworks de Unit Tests conoces??
// mocha, jest

// Que ventajas ofrecen las pruebas unitarias en el proceso de desarrollo de software?
// code coverage.
// con el code coverage se puede garantizzar la correctitud del codigo. 

// Por qué una prueba unitaria debe ejecutarse de forma aislada?
// para garantizar que el codigo escrito cumpla con las especificaciones requeridas.

//////// 7. Misc ////////

// Git (repos, branching strategies, tools)

// CI/CD (Steps, pipelines, tools)

// NoSQL
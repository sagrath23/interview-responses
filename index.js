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

color1.print(); // yellow
color2.print(); // red

// cual es la salida de este código 
function a() {
  console.log("a");
}
var b; // undefined
a(); // a
b(); // undefined // b is not a fuction
b = function() {
  console.log("b");
}

// cual es la salida de este object.hi()??
const foo = 'Ren';
const bar = 'Stimpy'
let object = {
  foo: 'Batsy',
  bar: 'Robin',
  hi: function() { //
    console.log(`Hi, ${this.foo} & ${this.bar}`)
  }
};

object.hi(); // Hi, Ren & Stimpy // Hi, undefined & undefined

// cual es la salida de estos ciclos?
const a = { foo: 'bar', baz: 'yell', res: 'bal' };
const b = ['kool', 'botz', 'tezt'];

for (let some in a) {
  console.log(some);
  a[some];
}
// bar
// yell
// res
// foo, baz, res
for (let some in b) {
  console.log(some);
}
// hool
// botz
// tezt
// 0, 1, 2

// next: () => ({ value: 'x', done: true });
for (let some of a) {
  console.log(some);
}
// foo
// baz
// res
// a is not iterable

for (let some of b) {
  console.log(some);
}
// 0
// 1
// 2
// kool, botz, tezt

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
// 6
// 2
// 4
// 5
// bar

// IIFE
// 1, 2, baz, 6, 4, 3

// puedes completar el codigo para que fileReader tenga este comportamiento?
const fileReader = new Promise((resolve, reject) => {
  resolve(callback('some'));
});
const fileReader = new Promise((resolve, reject) => resolve('some'));

const fileReader = (async function() {
  return 'some';
})()

fileReader.then((data) => console.log(data, 'content')); // some, content

// puedes completar la implementacion de la clase Foo?
class Foo {
  constructor() {
    this.value = 0;
  }

  add(value) {
    this.value += value;
    return this;
  }

  getTotal() {
    return this.value;
  }
}

const foo = new Foo();

foo.add(1).add(2).add(3).add(4).getTotal();// should return 10

// Punto extra!
// puedes escribir una funcion que tenga este comportamiento ?
sum(3)(5) // 8
sum(3, 5) // 8

//////// 2. NPM ////////

// Conoces que es NPM? que comandos conoces? has escuchado de npm link? npm pack?
// node package manager: es un programa/servicio que guarda libs de node/js para poder usarlas despues.
// npm init, npm i, npm update,  npm run, npm audit
// 

// sabes que diferencia hay entre 1.2.3, ~1.2.3 y ^1.2.3 al instalar dependencias?
// 1.2.3 -> 1.2.3
// ~1.2.3 -> // 1.2.X
// ^1.2.3 -> 1.2.X // 1.X.X

// dependencies y devDependencies???
// dependencies: 
// devDependencies:
// basicamente definen si quiero instalar dependencias de dev o no. 

// peer dependencies??
// 

//////// 3. Node.js ////////

// Qué es Node.js??
// es un entorno sobre el que se ejecuta JS. sirve para crear servers web, CLI o programas escritos en JS de forma general.


// Qué librerias nativas de Node.js has utilizado??
// fs, http, cripto, URL.  

// Streams
// 

// Event emmiter
// 

// Event loop
// es el que se encarga de verificar las instrucciones sync/async durante la ejecucion del programa.

// Profiling
//

// Debug
// 

// Cómo manejas variables de entorno y secretos para usarlos en la ejecución de tu programa Node.js?
// pasarlas por consola, .env -> dotenv, Process.env.nopmbreVariable

// Express.js

// middleware


//////// 4. Fundamentos ////////

// OOP?
// herencia, polimorfismo, abstraccion, encapsulamiento

// Imperative programming?

// FP?
// 

// reactive Programming?
// 

// por qué es mejor componer objetos en lugar de herencia clasica?
const a = new Foo(param1, param2);

setA(a) {
  this.a = a;
}

//////// 5. Principios de diseño ////////

// SOLID

// DRY
// es un principio para evitar repetir codigo, si lo voy a usar mas de una vez, lo pongo en un sitio donde me permita reutilizarlo.

// Dependency Injection / IoC


//////// 6. Unit testing ////////

// Podrías definir qué es un Unit Test?? Has utilizado Unit Tests en tu trabajo??
// se verifica que el codigo cumple con su proposito. 

// Qué frameworks de Unit Tests conoces??
// mocha, jest

// Que ventajas ofrecen las pruebas unitarias en el proceso de desarrollo de software?
// dismimuye la prob. de errores. ayuda a mejorar la calidad del sw.

// Por qué una prueba unitaria debe ejecutarse de forma aislada?


//////// 7. Misc ////////

// Git (repos, branching strategies, tools)
// github, bitbucket, gitlab, (main branch, staging, testing, branches for features/fixes.)

// CI/CD (Steps, pipelines, tools)
// github actions (commit al main -> build deploy)

// NoSQL
// MongoDB (DynamoDB) -> mongoose 

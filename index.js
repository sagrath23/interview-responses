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
color2.print(); // purple
// yellow
// red

// cual es la salida de este código 
a();
function a() {
  console.log("a");
}
// "a"

b();
var b = function() {
  console.log("b");
}
//"Error"
// b is not a function

// cual es la salida de este object.hi()??
const foo = 'Ren';
const bar = 'Stimpy'
let object = {
  foo: 'Batsy',
  bar: 'Robin',
  hi: function () {
    console.log(`Hi, ${this.foo} & ${this.bar}`)
  }
};

object.hi();
// "Hi, Batsy & Robin"
// Hi, undefined & undefined

// cual es la salida de estos ciclos?
const a = { foo: 'bar', baz: 'yell', res: 'bal'};
const b = ['kool', 'botz', 'tezt'];

for(let some in a) {
  console.log(some);
}
// foo, baz, res

for(let some in b) {
  console.log(some);
}
// 0, 1, 2

for(let some of a) {
  console.log(some);
}
// Error
// a is not iterable

for(let some of b) {
  console.log(some);
}
// kool, botz, tezt

// next: () => ({ value: 'X', done: true })

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
// 'baz'
// tezt
// 4
// 3

// 1, 2, baz, 6, 4, 3

// puedes completar el codigo para que fileReader tenga este comportamiento?
const fileReader = new Promise((resolve, reject) => {
  resolve('some');
});

const fileReader = async () => {
  const a = await http
  return a.data 
}
//
const fileReader = (async () => 'some')();

fileReader.then((data) => console.log(data, 'content')); // some, content

// puedes completar la implementacion de la clase Foo?
class Foo {
  constructor(num = 0) {
    this.num = num
  }

  set add(n) {
    this.num += n
    return this;
  }

  get getTotal() {
    return this.num
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
// node package management // manejo de paquetes de node
// permite utilizar caracteristicas que ofrece el motor de node.

// npm run
// npm run build / npm test

// sabes que diferencia hay entre 1.2.3, ~1.2.3 y ^1.2.3 al instalar dependencias?
// 1.2.3 -> 1.2.3
//~1.2.3 -> 1.2.X
// ^1.2.3 -> 1.X.X

// dependencies y devDependencies???
// dep: son usadas para la ejecucion del programa
// devDep: no requeridas despues de compilado el codigo

// peer dependencies??


//////// 3. Node.js ////////

// Qué es Node.js??
// es un motor para ejecutar JS del lado del server. 

// Qué librerias nativas de Node.js has utilizado??
// fs, http, 
// events, Process, Crypto

// Streams
// para manejo de archivos -> buffers
// Axios -> data as streams

// Event emmiter
// 

// Event loop
// es la forma en la que se procesa las distintas tareas que se van encolando al momento de ejecutar el codigo. 

// Profiling


// Debug
// breakpoints

// Cómo manejas variables de entorno y secretos para usarlos en la ejecución de tu programa Node.js?
// .env -> Process.env 
// config 

// Express.js

// middleware


//////// 4. Fundamentos ////////

// OOP?
// herencia, // polimorfismo, encapsulamiento y abstraccion. 

// Imperative programming?

// FP?
// en lugar de escribir clases como en OOP, todo se escribe a traves de funciones. encapsular codigo a traves de funciones.

// reactive Programming?


// por qué es mejor componer objetos en lugar de herencia clasica?
// al extender una clase, se heredan propiedades y metodos en las implementaciones, lo que genera un solapamiento de nombramiento. 


//////// 5. Principios de diseño ////////

// SOLID
// 
// DRY
// Dont repeat yourself

// Dependency Injection / IoC
// Nest.js

//////// 6. Unit testing ////////

// Podrías definir qué es un Unit Test?? Has utilizado Unit Tests en tu trabajo??

// Qué frameworks de Unit Tests conoces??
// jest, mocha, jasmine, supertest (escuchado)
// Que ventajas ofrecen las pruebas unitarias en el proceso de desarrollo de software?
// el codigo queda mas robusto, mas dificil de romper.  

// Por qué una prueba unitaria debe ejecutarse de forma aislada?
// me interesa saber si el codigo funciona de acuerdo a lo especificado, no me interesa como interactua con otros componentes.


//////// 7. Misc ////////

// Git (repos, branching strategies, tools)
// Si, Bitbucket, branches para develop, features 
// CI/CD (Steps, pipelines, tools)
// Si, 
// NoSQL
// MongoDB -> mongoose.

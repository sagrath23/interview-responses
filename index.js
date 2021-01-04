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
console.log(b) // undefined
b(); // b // b is not a function
b = function() {
  console.log("b"); 
}

// cual es la salida de este object.hi()??
const foo = 'Ren';
const bar = 'Stimpy'
let object = {
  foo: 'Batsy',
  bar: 'Robin',
  hi: function() {
    console.log(`Hi, ${this.foo} & ${this.bar}`)
  }
};

object.hi(); // Hi, Batsy & Robin // Hi, undefined & undefined

// cual es la salida de estos ciclos?
const a = { foo: 'bar', baz: 'yell', res: 'bal'};
const b = ['kool', 'botz', 'tezt'];

for(let some in a) {
  console.log(some);
}
// foo, baz, res
// {foo:'bar'}
// {baz: 'yell'}
// {res: 'bal'}

for(let some in b) {
  console.log(some);
}
// 0, 1, 2
// 'kool'
// 'botz'
// 'tezt'

// next() => ({ value: 'X', done: true })
for(let some of a) {
  console.log(some);
}// error: a is not iterable

for(let some of b) {
  console.log(some);
}
// kool, botz, tezt
// en que orden se ejecutan los console.log y que imprimen?
var a = 6;
(function(val) {
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
})(a);
console.log(a);

// 1
// 2 
// 'baz'
// 6
// 4
// 3

// var, let, const
// const -> constante no cambia
console.log(a); // undefined // error a is not defined
var a = {};
a.b = 'foo';
a = [];
// let -> variables que son reasignables
// var -> variables globales en el ambito de ejecucion

// puedes completar el codigo para que fileReader tenga este comportamiento?
function getFileData() {
  const fileReader = new Promise((resolve, reject) => {
    resolve('some');
  });
  return fileReader;
}

async function init() {
  fileReader = await getFileData();

  console.log(fileReader, 'content'); // some, 'content'
}

const fileReader = (async () => 'some')();

fileReader.then((value) => console.log(value, 'content'));
//fileReader  = await 
//.then((data) => console.log(data, 'content'));// 4
// 3

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
// Node package manager, permite reutilizar paquetes como express para crear nuevas libs
// npm install, uninstall, 
// sabes que diferencia hay entre 1.2.3, ~1.2.3 y ^1.2.3 al instalar dependencias?
// 1.2.3 -> fija
// ~1.2.3 -> 1.2.x
// ^ -> igual o mayor sin romper compatibilidad ^1.2.3 -> 2.1.0
// ^1.2.3 -> 1.x.x

// dependencies y devDependencies???
// devDependencies: son paquetes usados para la etapa de desarrollo
// dependencies: son necesarias para el funcionamiento del paquete.
// peer dependencies??
// 

//////// 3. Node.js ////////

// Qué es Node.js??
//es un entorno de desarrollo que permite ejecutar JS en el backend. 
// Qué librerias nativas de Node.js has utilizado??
// fs -> file system
// http, // http2
// asserts
// path

// Streams
// 

// Event emmiter
// se pueden crear eventos que respondan a un control, y realizar oeraciones a partir de los eventos emitidos.

// Event loop
// 

// Profiling

// Debug
// docker 

// Cómo manejas variables de entorno y secretos para usarlos en la ejecución de tu programa Node.js?

// Express.js
// si
// middleware
// son acciones de codigo que realizan operaciones antes de la ejecucion de un controlador. Si se tiene un ruta en express, antes de hacer la operacion, se debe verificar los permisos, estas validaciones se pueden hacer usando middlewares.

//////// 4. Fundamentos ////////

// OOP?
// Si, 
// Herencia, // Polimorfismo, abstraccion     y encapsulamiento.

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
// si, Mocha 
// Qué frameworks de Unit Tests conoces??
// mocha & chai, Jest 
// Que ventajas ofrecen las pruebas unitarias en el proceso de desarrollo de software?
// te esta entregando funcionalidades completas, ya que confirman qu eel codigo funciona.
// cambios mayores no afectan despliegues.

// Por qué una prueba unitaria debe ejecutarse de forma aislada?
// no es reeelevante probar el codigo de libs, porque no es codigooo gestionado en el proyecto. 

//////// 7. Misc ////////

// Git (repos, branching strategies, tools)
// si, se crean branches para tareas especificas, que puedan ser desplegadas en ammbientes pra validar su funcionamiento.

// CI/CD (Steps, pipelines, tools)
// circleCI, permite ejecutar unit tests
//  y ejecutar depoyments

// NoSQL
// MongoDB, Firebase (curso de React JS con backend en firebase).
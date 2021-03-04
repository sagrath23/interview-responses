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
a(); //Error // a
b(); //Error -> b is not a function
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

object.hi(); // Hi Batsy & Robin 
// Hi , udefined & undefined

// cual es la salida de estos ciclos?
const a = { foo: 'bar', baz: 'yell', res: 'bal'};
const b = ['kool', 'botz', 'tezt'];

for(let some in a) {
  console.log(some); //[Object object] {foo: bat}
  a[some];
}// foo, baz, res

for(let some in b) {
  console.log(some); // kool, botz, tezt
}// 0, 1, 2

// next: () => ({ value: 'X', done: true })
for(let some of a) {
  console.log(some);
} // // a is not iterable

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
})(); //1, 2, 'baz', 4, 'bar'
console.log(a);// 6
// 1, 2, 'baz', 6, 4, 3

// puedes completar el codigo para que fileReader tenga este comportamiento?
const fileReader = async() => {
  return 'some';
}
fileReader().then((data) => console.log(data, 'content'));

let some = await fileReader()
console.log(fileReader)

const fileReader = Promise.resolve('some');
const fileReader = (async() => 'some')();
const fileReader = new Promise((resolve) => resolve('some'));
 // some, content

// puedes completar la implementacion de la clase Foo?
class Foo {
  constructor() {
    this.value = 0;
  }

  add(x){
    this.value += x;
    return this;
  }

  getTotal(){
    return this.value;
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
// Gestor de paquetes de JS.  
// npm i
// npm start
// npm init


// sabes que diferencia hay entre 1.2.3, ~1.2.3 y ^1.2.3 al instalar dependencias?
// 1.2.3 -> 1.2.3
// ^1.2.3 -> 4.3.5?? 4.3.5 // 1.X.X
// ~1.2.3 -> 4.3.5?? 1.X.X // 1.2.X 

// dependencies y devDependencies???
// dependencias: son las que se usan en prod. las que si llegan al producto final
// devdep: solo apoyan en el proceso de desarrollo, ej. nodemon

// peer dependencies??
// 

//////// 3. Node.js ////////

// Qué es Node.js??
// permite ejecutar JS en el servidor. 
// 

// Qué librerias nativas de Node.js has utilizado??
// express, fs, path, 
// Process, OS, Cripto, utils

// Streams
// manejo de archivos, front
// request -> se maneja el archivo con blob -> se especifica en los headers respuesta  

// Event emmiter
// se emiten valores y se obtienen para manejar en otras partes del codigo

// Event loop
// 

// Profiling

// Debug

// Cómo manejas variables de entorno y secretos para usarlos en la ejecución de tu programa Node.js?
// variables de entorno: .env o variables de entorno accedidas desde Process.env

// Express.js

// middleware


//////// 4. Fundamentos ////////

// OOP?
// // Herencia, polimorfismo, encapsulamiento y abstraccion.

// Imperative programming?

// FP?
// basada en flujo definido.  

// reactive Programming?

// por qué es mejor componer objetos en lugar de herencia clasica?


//////// 5. Principios de diseño ////////

// SOLID
// Single res
// Open/Close
// Liskov -> posibilidad de reemplazar una clase padre por algun hijo que implemente esta clase sin romper esta aplicacion.
// Interface inversion
// Dependency injection

// DRY
// 

// Dependency Injection / IoC
// es no usar el paquete en la declaracion de la clase, sino pasar a la clase la clase que se necesita usar.

//////// 6. Unit testing ////////

// Podrías definir qué es un Unit Test?? Has utilizado Unit Tests en tu trabajo??
// sirven para probar partes de la app. aplicar unit test sobre los metodos para verificar que funcionen correctamente.
// No

// Qué frameworks de Unit Tests conoces??
// Jest, phpunit

// Que ventajas ofrecen las pruebas unitarias en el proceso de desarrollo de software?
// calidad, planeacion del proceso de desarrollo, efectividad al momento de entregar las apps.

// Por qué una prueba unitaria debe ejecutarse de forma aislada?


//////// 7. Misc ////////

// Git (repos, branching strategies, tools)
// si, 

// CI/CD (Steps, pipelines, tools)
//jenkins - pipelines no, 
// pull - run unit tests - smoke test 

// NoSQL
// MongoDB, redis, elastic
// Docs -> key/value -> columnar

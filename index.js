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
function a() {
  console.log("a");
}
var b; // undefined
a();

b();
b = function() {
  console.log("b");
}
//a
//b // error

// const, let & var
// var -> global scope in block
// const & let -> scope local
// const -> no deja modificar referencia
// let -> permite reasignar referencia
// cual es la salida de este object.hi()??
const foo = 'Ren';
const bar = 'Stimpy'
let object = {
  foo: 'Batsy',
  bar: 'Robin',
  hi: function ()  {
    console.log(`Hi, ${this.foo} & ${this.bar}`)
  }
};

object.hi();
//Hi, Batsy & Robin
// Hi, undefined & undefined
// cual es la salida de estos ciclos?
const a = { foo: 'bar', baz: 'yell', res: 'bal'};
const b = ['kool', 'botz', 'tezt'];

for(let some in a) {
  console.log(some);
}
//foo, baz, res
for(let some in b) {
  console.log(some);
}
//0,1,2
// next() => ({ value: 'x', done: true })
for(let some of a) {
  console.log(some);
}// a is not iterable
//
for(let some of b) {
  console.log(some);
}
//kool, botz, tezt

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
//1, 2, baz, 6, 4, 3
// puedes completar el codigo para que fileReader tenga este comportamiento?
const fileReader = Promise.resolve('some');
const fileReader = async ()=>"some";

fileReader().then((data) => console.log(data, 'content')); // some, content

// puedes completar la implementacion de la clase Foo?
class Foo {
  value = 0;
  constructor() {
  }
  add(v){
    this.value+=v;
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
// Administrador de paquetes para Node. Sirve para manejar dependencias. Permite descargar y publicar paquetes
// npm publish -> publicar dependencias
// npm i/uninstall -> instalar/desinstalar
// 

// sabes que diferencia hay entre 1.2.3, ~1.2.3 y ^1.2.3 al instalar dependencias?

// dependencies y devDependencies???
// dep -> dependencias del proyecto para usar en el proyecto
// devDep -> solo para desarollo, se omiten en el deploy 
// peer dependencies??


//////// 3. Node.js ////////

// Qué es Node.js??
// es un runtime de JS, para backend. Utiliza el mismo runtima de Chrome (v8). 
// Qué librerias nativas de Node.js has utilizado??
// path, workers, fs, childProcess, Process, OS

// Event emmiter
// se declaran eventos y con el eventEmitter se pueden disparar eventos que son escuchados por suscriptores.

// Event loop
// Node al ser single thread, las tareas se procesan en este hilo. Para manejar la concurrencia, uno usa metodos asincronos, lo que permite encolar estos procesos mientras se continua la ejecucion del proceso actual.
// nextTick -> programa una ejecucion para el siguiente espacio disponible en la cola de eventos.

// Profiling
// 

// Debug
// Browser & VSCode 
// 


// Cómo manejas variables de entorno y secretos para usarlos en la ejecución de tu programa Node.js?
// envcmd 

// Express.js
// SI

// middleware
// son funciones intermedias que van transformando los datos que reciben.

//////// 4. Fundamentos ////////

// OOP?
// Si
// // Herencia, Polimorfismo, Abstraccion & encapsulamiento.
// Abstracciones: definen propiedades y metodos en comun para las implementaciones. Cada clase que use esa abstraccion debe implementar estos metodos. , clases
// Imperative programming?
// 

// FP?
// Si
// Utilizar funciones puras, datos inmutables.

// reactive Programming?
// orientada por eventos, al detectar un cambio, se dispara un evento, y los que estan suscritos a ese evento realizan las acciones que tengan definidas.

// por qué es mejor componer objetos en lugar de herencia clasica?
// 

//////// 5. Principios de diseño ////////

// SOLID
// Permiten hacer un diseño de software desacoplado, limpio y seguro. Se use una abstraccion usando interfaces.
// DRY
// 

// Dependency Injection / IoC
// diseño dependiente de dependencias de alto nivel y no de interfaces de bajo nivel.

class A {
  constructor() {
    this.b = new B();
  }
}

class A {
  setB(b: B){
    this.b = b;
  }
}

//////// 6. Unit testing ////////

// Podrías definir qué es un Unit Test?? Has utilizado Unit Tests en tu trabajo??
// es una forma de garantizar el comportamiento de una seccion de código. 

// Qué frameworks de Unit Tests conoces??
// Jest, Mocha

// Que ventajas ofrecen las pruebas unitarias en el proceso de desarrollo de software?
// para refactors, se puede validar que no se hay afectado el comportamiento del codigo.
// deteccion temprana de errores.
// al ser automaticas, aumenta la velocidad en la revision y pueden mejorar el feedback del proceso de CI.

// Por qué una prueba unitaria debe ejecutarse de forma aislada?
// para no afectar el comportamiento de lo que se esta probando por el efecto de las dependencias.
// velocidad, al no llamar las dependencias reales, se mejora el tiempo de respuesta.

//////// 7. Misc ////////

// Git (repos, branching strategies, tools)
// Bitbucket, Github.
// se crean ramas x feature - al terminar se integra la rama del feature en la rama ppal. 
// dev -> uat -> master
// feature -> release -> hotfix.

// CI/CD (Steps, pipelines, tools)
// Jenkins
// clone, build, tests (unit, integration, e2e), artifacts, publish.

// NoSQL
// Firestore & MongoDB.
// NoSQL -> documents, query & definition.

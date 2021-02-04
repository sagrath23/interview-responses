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

//color1.print(); //yellow
//color2.print(); //red

// cual es la salida de este código 
function a() {
  console.log("a");
}
var b; // undefined
a();
b();
b = function() {
  console.log("b");
}// error

// let, const y var
const a = [];
a.push('foo');
const b = {};
b.foo = '';

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

object.hi();// Hi, Batsy & Robin
// Hi, undefined & undefined

// cual es la salida de estos ciclos?
const a = { foo: 'bar', baz: 'yell', res: 'bal'};
const b = ['kool', 'botz', 'tezt'];
// key - value
// next = () => ({ done: true, value: 'x' })
for(let some in a) {
  console.log(some);
}// foo, baz, res

for(let some in b) {
  console.log(some);//'kool', 'botz', 'tezt'
}// 0, 1, 2

for(let some of a) {
  console.log(some);//foo, baz, res
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

//1
//2
//baz
//6
//4
//3

// puedes completar el codigo para que fileReader tenga este comportamiento?
const fileReader = async ()=>{ return 'some'};

fileReader().then((data) => console.log(data, 'content')); // some, content

// puedes completar la implementacion de la clase Foo?
class Foo {
  count = 0;
  constructor() {}

  add(numberToAdd){
    count += numberToAdd;
    return this;
  }

  getTotal(){
    console.log(count);
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
// Node package manager, 
// npm install -g

// sabes que diferencia hay entre 1.2.3, ~1.2.3 y ^1.2.3 al instalar dependencias?
// 1.2.3 -> exacta
//// ~1.2.3 -> 1.2.x
//// ^1.2.3 -> 1.x.x
// ^1.2.3 -> 4.5.6 
// dependencies y devDependencies???
// dev env -> instala ambas
// prod -> dependencies

// peer dependencies??
// 

//////// 3. Node.js ////////

// Qué es Node.js??
// es un entorno de desarrollo en el que se usa JS para escribir codigo.

// Qué librerias nativas de Node.js has utilizado??
// fs, 

// Streams

// Event emmiter

// Event loop

// Profiling

// Debug

// Cómo manejas variables de entorno y secretos para usarlos en la ejecución de tu programa Node.js?

// Express.js
// js
// middleware
// 

const foo = {}

foo && foo.bar && foo.bar.baz ||

foo?.bar?.baz || uuu; //
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
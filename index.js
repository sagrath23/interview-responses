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

color1.print(); // cyan
color2.print(); // purple
// yellow
// red
// cual es la salida de este código 
function a() {
  console.log("a");
}
var b; // undefined
a();
// "a"
b();
b = function() {
  console.log("b");
}
// definicion de la funcion 
// b is not a function.
// Let, var & Const
// var = scope global // bloque // hoisting
// No-hoisting
// let = 
// const = constante que no cambia
// referencia a memoria
const b = {};

b.foo = 'some';

// cual es la salida de este object.hi()??
let object = {
  foo: 'baz',
  bar: 'some',
  hi: () => {
    console.log(`Hi, ${object.foo} ${object.bar}`)
  }
};

object.hi();
// Hi, undefined undefined

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
// 
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
// 6 // 2
// baz 
// tezt // 6
// 4 
// 3 

// puedes completar el codigo para que fileReader tenga este comportamiento?
const fileReader =  async function () {
  return 'some'
}

const fileReader = new Promise((resolve, reject) => resolve('some'));

fileReader().then((data) => console.log(data, 'content')); // some, content

// puedes completar la implementacion de la clase Foo?
class Foo {
  
  constructor() {
    this.total = 1
  }
  add(number){
    this.total += number

    return this; //
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

const sum = (a,b) => {
  if(b){
    return a + b;
  }

  return (c) => a + c;
};
//////// 2. NPM ////////

// Conoces que es NPM? que comandos conoces? has escuchado de npm link? npm pack?
// gestor de paquetes para Node
// npm init
// npm install
// npm install paquetes
// npm upgrade 
// npm uninstall paquete
// 

// sabes que diferencia hay entre 1.2.3, ~1.2.3 y ^1.2.3 al instalar dependencias?
// 1.2.3 => specific
// ~1.2.3 => 1.2.x
// ^1.2.3 => 1.x.x
// dependencies y devDependencies???
// dependencies = install prod & dev
// devDep = install prod
// peer dependencies??
// dependencias de las que dependen mis dependencias
// 

//////// 3. Fundamentos ////////

// qué  de programación conoces?
// OOP => Herencia, polimorfismo, encapsulamiento & abstraccion.
// 
// por qué es mejor componer objetos en lugar de herencia clasica?
// por rendimiento, al tener la herencia clasica, se heredan funcionalidades que no sean necesarias, que terminan siendo comportamientos de mas, mientras que la composicion te reduce este comportamiento.

//////// 4. Diseño ////////

// SOLID
//
//Single resp.
// open/close 
// liskov => 
// Dependency injection
// DRY
// Dont repeat yourself 


//////// 9. Node.js ////////

// Qué es Node.js??
// ambiente de desarrollo de JS, runtime env para JS

// Qué librerias nativas de Node.js has utilizado??
// path, fs

// Cómo manejas variables de entorno y secretos para usarlos en la ejecución de tu programa Node.js?
// libreria dot.env
// crear archivos .env => en el .gitignore *.env 
// process.env.VARIABLE

// Express.js
// API rest
// middleware
// algo por lo que pasa una solicitud (verificar auth) 
// prisma / graphQL
// Qué diferencia existe entre un path  y un query param??

//////// 2. Generalidades ////////

// Sabes que es una REST API??? Conoces los niveles de madurez de una RESTful API?

// Sabes que diferencia hay entre localStorage y sessionStorage?

// Sabes que es CORS?

// Cómo aseguras que tu API solo sea utilizada por un usuario verificado?

// Sabes que es un patron de diseño? Conoces alguno?





//////// 5. Unit testing ////////

// Podrías definir qué es un Unit Test?? Has utilizado Unit Tests en tu trabajo??

// Qué frameworks de Unit Tests conoces??

// Sabes qué diferencias existen entre un mock y un stub?

// Por qué una prueba unitaria debe ejecutarse de forma aislada?

// Conoces sobre Shallow Render??


//////// 6. React ////////
// sabes que es el vitualDOM?

// sabes que es el lifecycle de React? Puedes describirlo?

// qué diferencia hay entre estos??
class Component extends React.Component {
  ...

  render() {
    return (<div>Hi</div>);
  }
}

class Component extends React.PureComponent {
  ...

  render() {
    return (<div>Hi</div>);
  }
}

const Component = () => {
  return (<div>Hi</div>);
}
// Hooks

// que consideras que es un hook? con cuales has trabajado??

// cuantas veces se imprime el valor de a?
const Component = ({ a }) => {
  useEffect(() => {
    console.log(a);
  });

  return (<div>Hi</div>);
};

// Puedes describir que es un HOC?

// Has trabajado con Context en React?

// Que papel cumple el Provider al usar Context en React?

// y el Consumer?

// Sabes para que se sirven los refs en React? 

// portals: 

// suspense: 


//////// 7. Redux ////////

// Puedes describir el patron arquitectonico que sigue redux?

// Puedes describir los conceptos base de redux?

// Que usas para conectar redux con un componente React?

// Sabes que es un middleware?


//////// 8. CSS ////////
// flexbox: 
// flex-grow? flex-direction

// grid

// preprocesadores

// puedes describir como se comportan estos selectores CSS?
.div {
  color: cyan;

  &:hover {
    color: red
  }
}



//////// 10. Algoritmia ////////

/*
John trabaja en una tienda de medias, y tiene un enrome monton de medias que debe emparejar para 
venderlos. Dado un arreglo de enteros que representan el color de cada media, determine cuantos pares de medias del mismo color hay.

Por ejmplo, hay 7 medias con colores 1,2,3 socks=[1,2,1,2,1,3,2]. Hay un par de color 1 y un par de color 2. Hay tres medias "nonas"
(sin par) de cada color. Por lo tanto, el número de pares es 2.
*/

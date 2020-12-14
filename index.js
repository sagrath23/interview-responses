//////// 1. Fundamentos ////////

// qué  de programación conoces?
// OOP -> C++, Java, C#
// Herencia, 
// Herencia, Polimorfismo, Abstraccion y Encapsulamiento.
// 


// por qué es mejor componer objetos en lugar de herencia clasica?
// 
// herencia
class A extends B {
  ...
}

// composicion
class A {
  constructor() {
    this.b = new B();
  }
}


//////// 2. Generalidades ////////

// Sabes que es una REST API??? Conoces los niveles de madurez de una RESTful API?
// es la que va por HTML, los mas usados son GET y POST, PUT y DELETE. 

// api/v1/users -> 1
// GET api/v1/users -> list users -> 2
// HATEOAS -> [{ detail: 'http:'}] next, prev

// Sabes que diferencia hay entre localStorage y sessionStorage?
// session: variables de sesion. tokens
// local: no tan general como el session.

// session -> tab
// local -> browser

// Sabes que es CORS?
// permisos a rutas de terceros que estan en otra ubicacion. 

// Cómo aseguras que tu API solo sea utilizada por un usuario verificado?
// tokens -> authToken & refreshToken.
// JWT -> 

// Sabes que es un patron de diseño? Conoces alguno?
// Facade, Singleton, DTO
// orchestration.

// creacionales -> instanciaciones -> singleton, factory.
// comportamiento -> runtime -> Command 
// estructurales -> conectar entre components -> Facade, Adapter, Bridge

//////// 3. NPM ////////

// Conoces que es NPM? que comandos conoces? has escuchado de npm link? npm pack?
// repo de libs de js
// npm i 
// npm run
// 

// sabes que diferencia hay entre 1.2.3, ~1.2.3 y ^1.2.3 al instalar dependencias?
// ^ de esa version hacia arriba -> ^1.2.3 -> 2.1.4?
// ~ -> igual o hacia abajo.
// 1.2.3 -> exacta

//~ -> 1.2.x 
//^ -> 1.x.x


// dependencies y devDependencies???
// 

// peer dependencies??


//////// 4. Javascript ////////

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
a();
b();
b = function() {
  console.log("b");
}

//a
//[funcion] // error: b is not a function

// let, var y const
// let & const -> seguridad
// const -> constante = no re-instanciacion

// cual es la salida de este object.hi()??
let object = {
  foo: 'baz',
  bar: 'some',
  hi: () => {
    console.log(`Hi, ${object.foo} ${object.bar}`)
  }
};

object.hi(); //'Hi baz some'
// Hi undefined undefined

// this.
function() {} // bind
() => {} // 

// cual es la salida de estos ciclos?
const a = { foo: 'bar', baz: 'yell', res: 'bal'};
// next() => ({ value: 'X', done: false })
const b = ['kool', 'botz', 'tezt'];

for(let some in a) {
  console.log(some);
}
// foo, baz y res
//bar, yell, ball

for(let some in b) {
  console.log(some);
}
// 0, 1 y 2
//kool, botz, tezt

for(let some of a) {
  console.log(some);
}
// a is not iterable
//foo, baz, res

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

//1
//2
//baz
//4
//3
//tezt
// 1, 2, baz, 6, 4, 3    

// puedes completar el codigo para que fileReader tenga este comportamiento?
const fileReader = Promise.resolve('some');
const fileReader = new Promise((resolve, reject) => resolve('some'));
const fileReader = (async () => 'some')();
//const fileReader = Promise('some, content')
fileReader.then((data) => console.log(data, 'content')); // some, content

// puedes completar la implementacion de la clase Foo?
class Foo {
  constructor() {
    this.x = 0;
  }

  add(param) {
    x = x + param
    return this;
  }

  getTotal() {
    return x;
  }
}

const foo = new Foo();

foo2.add(1).add(2).add(3).add(4).getTotal();// should return 10

// Punto extra!
// puedes escribir una funcion que tenga este comportamiento ?
sum(3)(5) // 8
sum(3,5) // 8


//////// 5. Unit testing ////////

// Podrías definir qué es un Unit Test?? Has utilizado Unit Tests en tu trabajo??
// te sirven para probar la logica del codigo, para aislar comportamientos.
// Qué frameworks de Unit Tests conoces??
// jest + @testing-library/react
// winautomation
// Sabes qué diferencias existen entre un mock y un stub?
// 
// Por qué una prueba unitaria debe ejecutarse de forma aislada?
// sabes si la logica de la funcion tiene errores. Se atacan los componentes de forma simple y se van aumentando las integraciones para verificar que todo funcione.

// Conoces sobre Shallow Render??
// <Table /> // shallow
// <Table> ... </Table>

//////// 6. React ////////
// sabes que es el vitualDOM?
// 
// sabes que es el lifecycle de React? Puedes describirlo?
// mounting -> constructor
// updating -> componentDidUpdate
// unmounting -> componentWillUnmount

// qué diferencia hay entre estos??
class Component extends React.Component {
  ...

  render() {
    return (<div>Hi</div>);
  }
} // class function

class Component extends React.PureComponent {
  ...

  componentDidMount()

  render() {
    return (<div>Hi</div>);
  }
} // PureComponent -> ts

const Component = () => {
  return (<div>Hi</div>);
} // componente funcion

// Hooks

// que consideras que es un hook? con cuales has trabajado??
// es una simplificacion del codigo, orientado a programacion funcional. 
// useState, useEffect, useMemo, useRef

// cuantas veces se imprime el valor de a?
const Component = ({ a }) => {
  useEffect(() => {
    console.log(a);
  },[a]);

  return (<div>Hi</div>);
};
//


// Puedes describir que es un HOC?
// connect(mapStateToProps, mapDispatchToProps)(Component)
// 
// Has trabajado con Context en React?
// poder compartir props entre componentes en el mismo arbol.

// Que papel cumple el Provider al usar Context en React?

// y el Consumer?

// Sabes para que se sirven los refs en React? 
// es la referencia a un Objeto, por el que puedes acceder al DOM del objeto
// portals: 
// 
// suspense: 
// 

//////// 7. Redux ////////

// Puedes describir el patron arquitectonico que sigue redux?
// 
// Puedes describir los conceptos base de redux?

// Que usas para conectar redux con un componente React?

// Sabes que es un middleware?


//////// 8. CSS ////////
// flexbox: 
// flex-grow? flex-direction

// grid

// preprocesadores
// SaSS
// puedes describir como se comportan estos selectores CSS?
.div {
  color: cyan;

  &:hover {
    color: red
  }
}
// 

// HTML
// semantic HTML -> usar la etiqueta adecuada para el contenido
// video
// header, footer, section, aside
// 

// SOLID
// Single Resp.
// Open Close 
// Liskov 
// I IoC
// D Dependency Injection
// DRY

class A {
  constructor() {
    this.b = new B(a,z,c); 
  }
}

class A {
  setB(b) {
    this.b = b;
  }
}
//////// 9. Node.js ////////

// Qué es Node.js??

// Qué librerias nativas de Node.js has utilizado??
   
// Cómo manejas variables de entorno y secretos para usarlos en la ejecución de tu programa Node.js?

// Express.js

// middleware

// Qué diferencia existe entre un path  y un query param??

//////// 10. Algoritmia ////////

/*
John trabaja en una tienda de medias, y tiene un enrome monton de medias que debe emparejar para 
venderlos. Dado un arreglo de enteros que representan el color de cada media, determine cuantos pares de medias del mismo color hay.

Por ejmplo, hay 7 medias con colores 1,2,3 socks=[1,2,1,2,1,3,2]. Hay un par de color 1 y un par de color 2. Hay tres medias "nonas"
(sin par) de cada color. Por lo tanto, el número de pares es 2.
*/
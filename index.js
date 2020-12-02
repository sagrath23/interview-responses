//////// 1. Fundamentos ////////

// qué  de programación conoces?
// OOP
// Functional

// por qué es mejor componer objetos en lugar de herencia clasica?



//////// 2. Generalidades ////////

// Sabes que es una REST API??? Conoces los niveles de madurez de una RESTful API?
// fetch de data (operaciones CRUD), usan formato JSON. usando Axios para consumir la API y usando promesas para resolver los llamados asincronos. 
// Sabes que diferencia hay entre localStorage y sessionStorage?
// 
// Sabes que es CORS?
// 
// Cómo aseguras que tu API solo sea utilizada por un usuario verificado?
// auth. 
// Sabes que es un patron de diseño? Conoces alguno?
// HOC, => Decorator
// 
// creacionales => Singleton, Factory, Abstract Factory
// estructurales => Fachada, Adapters
// comportamiento => Command 
//////// 3. NPM ////////

// Conoces que es NPM? que comandos conoces? has escuchado de npm link? npm pack?
// node package manager
// npm i, npm start, npm audit fix
// sabes que diferencia hay entre 1.2.3, ~1.2.3 y ^1.2.3 al instalar dependencias?
// ^ => versiones mas actuales 1.x.x
// ~ => 1.2.x
// 1.2.3 => version puntual

// dependencies y devDependencies???
// dependencies: obligatorias para el desarrollo / funcionamiento de la app
// devDependencies: no son esenciales para el funcionamiento de la app
{
  dependencies: {
    react: '^16.8.1',
    redux: '~1.0.0'
  },
  devDepencies: {
    jest: '~1.2.3',
    typescript: '2.3.4'
  },
  peerDependencies: {
    react: '~16.0.0'
  }
}
// peer dependencies??
// dependencias que dependen de otras.
// 

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

color1.print();
color2.print();
// c1 => cyan c2 => red
// yellow red
// cual es la salida de este código 
function a() {
  console.log("a");
}
var b;//undefined
console.log(c);
const c;
a(); // a
b();
b = function() {
  console.log("b");
} 
// b
// error
// let var const
// const: scope de bloque, no redefinible
// var: global, se puede redefinir, mutable
// let: se puede redefinir 

// cual es la salida de este object.hi()??
let object = {
  foo: 'baz',
  bar: 'some',
  hi: () => {
    console.log(`Hi, ${this.foo} ${this.bar}`)
  }
};

object.hi();
// hi, baz some
// hi, undefined, undefined
console.log(1,2,3,4,5);
console.log(1);
// params 
// cual es la salida de estos ciclos?
const a = { foo: 'bar', baz: 'yell', res: 'bal'};
const b = ['kool', 'botz', 'tezt'];
// enumerable => objetc o array
// iterable => next() => ({ value: x, done: true })
for(let some in a) {
  console.log(some);
}
// bar, yell, bal
// foo, baz, res

for(let some in b) {
  console.log(some);
}
// undefined, undefined, undefined
// 0, 1, 2

for(let some of a) {
  console.log(some);
}
// bar, yell, bal
// a is not iterable
for(let some of b) {
  console.log(some);
}
// undefined, undefined, undefined
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

// puedes completar el codigo para que fileReader tenga este comportamiento?
const fileReader = new Promise((resolve, reject) => (resolve('some')));
const fileReader = (async () => 'some')();


fileReader.then((data) => console.log(data, 'content')); // some, content

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


//////// 5. Unit testing ////////

// Podrías definir qué es un Unit Test?? Has utilizado Unit Tests en tu trabajo??
// ayuda a depurar su codigo, deteccion temprana de bugs, control sobre el desarrollo mientras se escala la app  
// Qué frameworks de Unit Tests conoces??
// jest 
// Sabes qué diferencias existen entre un mock y un stub?

// Por qué una prueba unitaria debe ejecutarse de forma aislada?

// Conoces sobre Shallow Render??


//////// 6. React ////////
// sabes que es el vitualDOM?
// feature de react que permite hacer operaciones antes de renderizar, sin que se materialicen en el DOM real. 
// 
// 
// sabes que es el lifecycle de React? Puedes describirlo?
// son etapas del flujo de datos que ocurren en react. es importante saber que etapas ocupen antes del renderizado y cuales ocurren despues.
// 

// qué diferencia hay entre estos??
class Component extends React.Component {
  ...

  render() {
    return (<div>Hi</div>);
  }
}// class component

class Component extends React.PureComponent {
  ...

  componentShouldUpdate() {

  }

  componentDidMount() {

  }

  render() {
    return (<div>Hi</div>);
  }
}// class component, siempre va a tener el mismo output

const Component = () => {
  return (<div>Hi</div>);
} // functional component
// Hooks

// que consideras que es un hook? con cuales has trabajado??
// es una forma de usar estados en componentes funcionales. Los componentes funcionales consument menos recursos que las clases. con Hooks puedes reemplazar ciertas funciones del lifecycle. 

// cuantas veces se imprime el valor de a?
const Component = ({ a }) => {
  useEffect(() => {
    console.log(a);
  });

  return (<div>Hi</div>);
};

// Puedes describir que es un HOC?
// es un componente que "abraza" a otro y le hereda funcionalidades. puede ser reusable para componer nuevos componentes.
// Has trabajado con Context en React?
// sirve para lograr estados globales, reusable por varios componentes para evitar prop-drilling
// Que papel cumple el Provider al usar Context en React?

// y el Consumer?

// Sabes para que se sirven los refs en React? 
// 
// portals: 
// 
// suspense: 
// 

//////// 7. Redux ////////

// Puedes describir el patron arquitectonico que sigue redux?
// es un modelo de desarrollo muy usado con react, maneja un store donde se tiene el estado, un reducer que se encarga de la logica, y las acciones que se despachan para que el reducer tome la accion pertinente.
// Puedes describir los conceptos base de redux?

// Que usas para conectar redux con un componente React?

// Sabes que es un middleware?


//////// 8. CSS ////////
// flexbox: 
// flex-grow? flex-direction
// column - row
// grid

// preprocesadores
// 

// puedes describir como se comportan estos selectores CSS?
.div {
  color: cyan;

  &:hover {
    color: red
  }
}

// !important.
// inline class, #id, .class, tag 

// HTML
// utilizar HTML de una forma que tenga coherencia semantica, que no todo sean devDepencies
// section, footer, 

// 

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
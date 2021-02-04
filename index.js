//////// 1. Generalidades ////////

// Sabes que es una REST API??? Conoces los niveles de madurez de una RESTful API?
// se basa en la arq. rest, me permite la comunicacion usando el modelo http, stateless.
// // HATEOAS

// Sabes que diferencia hay entre localStorage y sessionStorage?
// local: mantiene data en el browser,
// session: solo mientras este abierto el browser, solo por tab.

// Sabes que es CORS?
// Cross Domain: se tiene un dominio en el cliente diferente al de la API. 


//////// 2. Javascript ////////

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
color2.print(); // red

// cual es la salida de este código 
a(); // a
function a() {
  console.log("a");
}
b();// b is not a function
var b = function() {
  console.log("b");
}

// cual es la salida de este object.hi()??
const foo = 'Ren';
const bar = 'Stimpy'
let object = {
  foo: 'Batsy',
  bar: 'Robin',
  hi() {
    console.log(`Hi, ${this.foo} & ${this.bar}`)
  }
};

object.hi(); // Hi, Ren Stimpy
// Hi undefined undefined

// cual es la salida de estos ciclos?
const a = { foo: 'bar', baz: 'yell', res: 'bal'};
const b = ['kool', 'botz', 'tezt'];

for(let some in a) {
  console.log(some); // ...
  a[some];
}

for(let some in b) {
  console.log(some); // 0 ,1 ,2 
}

// next: () => ({ value: 'x', done: true })
for(let some of a) {
  console.log(some); // foo, baz, res
} // a is not iterable

for(let some of b) {
  console.log(some);// kool, botz , tezt
}

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
console.log(a); // 1, 2, 'baz', 6, 4, 3 

// var, let y const
// var: old way -> hoisting
// let: por bloques de scope, si permite cambiar valor 
// const: no puede cambiar valor
const a = {};
a.foo = 'some';
a = { foo: 1 };

// puedes completar el codigo para que fileReader tenga este comportamiento?
const fileReader =  new Promise((resolve, reject) => {
  resolve('result')
});

const fileReader = (async () => {
  return  'some';
})(); // Promise.resolve('some') 

fileReader.then((data) => console.log(data, 'content')); // some, content

// puedes completar la implementacion de la clase Foo?
class Foo {
  constructor() {
    this.num = 0
  }

  add(num){
    this.num + num;
    return this;
  }

  getTotal(){
    return this.num;
  }
}

const foo = new Foo();

foo.add(1).add(2).add(3).add(4).getTotal();// should return 10

// Punto extra!
// puedes escribir una funcion que tenga este comportamiento ?
sum(3)(5) // 8
sum(3,5) // 8


//////// 3. NPM ////////

// Conoces que es NPM? que comandos conoces? has escuchado de npm link? npm pack?
// manejador de paquetes de node. 
// package.json -> scripts
// npm i
// npm test
// npm cache clean
// npm init
// npm start
// / npm run

// sabes que diferencia hay entre 1.2.3, ~1.2.3 y ^1.2.3 al instalar dependencias?
// ^1.X.X
// ~1.2.X
// 1.2.3

// dependencies y devDependencies???
// dependencias: necesarias para funcion
// devDependencies: necesarias para desarrollo - node-sass

// peer dependencies??
// son referencias de dependencias que estan dentro de un monorepo

//////// 4. HTML ////////

// qué entiendes por HTML semántico??

// conoces sobre accesibilidad en ambientes web??

// qué es el DOM?? 


//////// 5. CSS ////////
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


//////// 6. React ////////
// sabes que es el vitualDOM?
// es una estrategia para reducir el impacto de accesar al DOM. Es una copia del DOM, donde se verifican los cambios para saber que renderizar. 
// diff ~ conciliacion de DOM
// React Fiber

// sabes que es el lifecycle de React? Puedes describirlo?
// se divide en 3 etapas
// mount 
// update
// unmount

// qué diferencia hay entre estos??
class Component extends React.Component {
  ...

  render() {
    return (<div>Hi</div>);
  }
}// hereda todo de React.Component

class Component extends React.PureComponent {
  ...

  render() {
    return (<div>Hi</div>);
  }
}// shouldComponentUpdate

const Component = () => {
  return (<div>Hi</div>);
}
// Hooks

// que consideras que es un hook? con cuales has trabajado??
// es una funcion que te permite controlar states, manejar side effects
// useState
// useEffect -> side effects
// useMemo -> memoization
// useRef -> acceder a referencias al DOM
// useCallback ?


// cuantas veces se imprime el valor de a?
const Component = ({ a }) => {
  useEffect(() => {
    console.log(a);
  }, []);

  return (<div>Hi</div>);
};

// Puedes describir que es un HOC?
// con redux se usa bastante HOC, el Connect
// Stateful/stateless 

// Has trabajado con Context en React?
// te sirve para poder usar valores en un nivel superior en componentes mas abajo dentro del DOM, evita el prop drilling

// Que papel cumple el Provider al usar Context en React?
// se garantiza que solo se guarden ciertos valores de ese nivel

// y el Consumer?
// garantiza que solo se usen los valores puestos por el provider.

// Sabes para que se sirven los refs en React? 
// sirve para obtener una referencia al elemento renderizado en el DOM.

// portals: 
// 
// suspense: 
// react-lazy : sirve para crear un fallback para la carga de componentes de forma lazy

//////// 7. Redux ////////

// Puedes describir el patron arquitectonico que sigue redux?
// Flux, 

// Puedes describir los conceptos base de redux?
// acciones, reducer, store, state inmutable.

// Que usas para conectar redux con un componente React?
// se crea un provider de redux, y cada componente conectado al store de redux, se usa el connect para recibir los props y dispatchers para interactuar con redux.

// Sabes que es un middleware?
// son funciopnes de orden superior que se pueden usar para componer nuevas funciones.
// redux-thunks

//////// 8. Fundamentos ////////

// OOP?

// Imperative programming?

// FP?

// reactive Programming?

// por qué es mejor componer objetos en lugar de herencia clasica?


//////// 9. Principios de diseño ////////

// SOLID

// DRY

// Dependency Injection / IoC


//////// 10. Unit testing ////////

// Podrías definir qué es un Unit Test?? Has utilizado Unit Tests en tu trabajo??

// Qué frameworks de Unit Tests conoces??

// Que ventajas ofrecen las pruebas unitarias en el proceso de desarrollo de software?

// Por qué una prueba unitaria debe ejecutarse de forma aislada?


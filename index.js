//////// 1. Generalidades ////////

// Sabes que es una REST API??? Conoces los niveles de madurez de una RESTful API?
// son peticiones que se pueden hacer a una API. 

// Sabes que diferencia hay entre localStorage y sessionStorage?
// local: se almacena en el navegador
// session: 

// Sabes que es CORS?
// Cross Origin Resource sharing
// 

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

color1.print(); // "yellow" 
color2.print(); //  "red"

// cual es la salida de este código 
a(); // "a"
function a() {
  console.log("a");
}
b(); // undefined // b is not a function
var b = function() {
  console.log("b");
}

// let var const
function() {
  console.log(a); // undefined
  console.log(b);// b is not defined
  var a = 'some';
  let b = 'foo';
  const b = '';
}
// const -> constantes, no permiten ser cambiadas
const b = [];
b.push('a');//
// let -> permite reasignar 
// var -> permite reasignar, pero hace hoisting 

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

object.hi(); // "Hi, Batsy & Robin"
// Hi, undefined, undefined

// cual es la salida de estos ciclos?
const a = { foo: 'bar', baz: 'yell', res: 'bal'};
const b = ['kool', 'botz', 'tezt'];

for(let some in a) {
  console.log(some);
} //
// foo, baz, res
for(let some in b) {
  console.log(some);
} // kool botz tezt
// 0, 1, 2
// next: () => ({ value: 'x', done: true })
for(let some of a) {
  console.log(some);
} // bar yell bal
// a is not iterable
for(let some of b) {
  console.log(some);
} //
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

//  1 2 3 4 baz 6
// 1 2 baz 6 4 3

// puedes completar el codigo para que fileReader tenga este comportamiento?
const fileReader = void 0;
const fileReader = Promise.resolve('some');
const fileReader = new Promise((resolve, reject) => resolve('some'));
const fileReader = (async () => 'some')();

fileReader.then((data) => console.log(data, 'content')); // some, content

// puedes completar la implementacion de la clase Foo?
class Foo {
  constructor() {
    this.suma =0;
    this.add = (valor)=>{this.suma=this.suma+valor; return this};
    this.getTotal=()=>{return this.suma}
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
// npm i
// npm start
// npm run
// npm eject


// sabes que diferencia hay entre 1.2.3, ~1.2.3 y ^1.2.3 al instalar dependencias?
// 1.2.3 exacta
// ^1.2.3 -> 3.2.4 = 3.2.4? // 1.X.X 
// ~1.2.3 -> // 1.2.X
// major.minor.patch

// dependencies y devDependencies???
// dev -> solo para desarrollo
// dep -> prod & dev

// peer dependencies??
// 

//////// 4. HTML ////////

// qué entiendes por HTML semántico??
// 
// conoces sobre accesibilidad en ambientes web??
// 
// qué es el DOM?? 


//////// 5. CSS ////////
// flexbox: 
// flex-grow? flex-direction
// 
// grid
// 
// preprocesadores
// sass
// puedes describir como se comportan estos selectores CSS?
.div {
  color: cyan;

  &:hover {
    color: red
  }
}


//////// 6. React ////////
// sabes que es el vitualDOM?
// es como el DOM que genera React para evitar actiualizar el dom real, verificando que solo se actualice el DOM cuando se presente un cambio que le requiera. 
//

// sabes que es el lifecycle de React? Puedes describirlo?
// es el ciclo de vida en el que se montan y desmontan los componentes (se ponen o se quitan del DOM).
// Mount
// Update
// Unmount

// qué diferencia hay entre estos??
class Component extends React.Component {
  ...

  render() {
    return (<div>Hi</div>);
  }
} // class component

class Component extends React.PureComponent {
  ...

  render() {
    return (<div>Hi</div>);
  }
}// solo se actualiza cuando hay cambios en los props

const Component = () => {
  return (<div>Hi</div>);
}// functional component

// Hooks

// que consideras que es un hook? con cuales has trabajado??
// son herramientas para agregar funcionalidades de componentes de clase a componentes funcionalidades
// emulando el lifecycle de los componentes de clase.

// useState
// useEffect
// useReducer
// 
// useMemo
// useCallback
// useRef
// useContext

// cuantas veces se imprime el valor de a?
const Component = ({ a }) => {
  useEffect(() => {
    console.log(a);
  },[a]);

  return (<div>Hi</div>);
};

// Puedes describir que es un HOC?
// es un componentes que se usa para envolver otros componentes y darles otras funcionalidades.

// Has trabajado con Context en React?
// Si, se utiliza para facilitar el paso del estado cuando se tiene muchos componentes anidados.


// Que papel cumple el Provider al usar Context en React?
// es el que se pasa el contexto
// y el Consumer?
// es el que usa el contexto

// Sabes para que se sirven los refs en React? 
// es una referencia a cualquier objeto especifico.


// portals: 
// 

// suspense: 
// 

//////// 7. Redux ////////

// Puedes describir el patron arquitectonico que sigue redux?
// 
// flux

// Puedes describir los conceptos base de redux?
// acciones
// reducers
// store
// dispatch

// Que usas para conectar redux con un componente React?
//
// useSelector, useDispatch -> react-redux
// connect -> react-redux -> connect(mapStateToProps, mapDispatchToProps)(Components)

// Sabes que es un middleware?
//
// redux-thunks
// redux-saga

//////// 8. Fundamentos ////////

// OOP?
// 
// herencia, polimorfismo, abstraccion y encapsulamiento
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
// es una prueba para verificar que un componente funcione como se espera
// Qué frameworks de Unit Tests conoces??
// jest, junit.
// Que ventajas ofrecen las pruebas unitarias en el proceso de desarrollo de software?
// te vas asegurando que lo que haces funcione, sin recurrir a validaciones manuales o hacer debugs complicados.

// Por qué una prueba unitaria debe ejecutarse de forma aislada?
// para verificar solo el codigo que se escribe y no codigo externo (dependencias, libs)

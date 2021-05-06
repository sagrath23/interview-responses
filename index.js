//////// 1. Generalidades ////////

// Sabes que es una REST API??? Conoces los niveles de madurez de una RESTful API?

// Sabes que diferencia hay entre localStorage y sessionStorage?

// Sabes que es CORS?

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

color1.print();// yellow
color2.print();// red

// cual es la salida de este código 
let b; //
a(); // a
function a() {
  console.log("a");
}
console.log(b);
b(); // b is not a function
b = function() {
  console.log("b");
}

// cual es la salida de este object.hi()??
const foo = 'Ren';
const bar = 'Stimpy';
let object = {
  foo: 'Batsy',
  bar: 'Robin',
  hi: function() {
    console.log(`Hi, ${this.foo} & ${this.bar}`)
  }
};

object.hi(); // Hi, undefined undefined

// cual es la salida de estos ciclos?
const a = { foo: 'bar', baz: 'yell', res: 'bal'};
const b = ['kool', 'botz', 'tezt'];

for(let some in a) {
  console.log(some);
} // foo, baz, res

for(let some in b) {
  console.log(some);
} // 0, 1, 2

// next: () => ({ value: 'x', done: true })
for(let some of a) {
  console.log(some);
} // error

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
// 1, 2, baz, 6, 4, 3

// que diferencia hay entre let, var y const
// var: scope global & local
// let: scope global, local y de bloque
// const: no se puede modificar para valores primitivos

const [{ some: { value } }, ...rest] = [{ some: { value: '5'} }, 6, 4, 3];
// value = 5
// rest [6,4,3]

// puedes completar el codigo para que fileReader tenga este comportamiento?
const fileReader = void 0;

const fileReader = new Promise((resolve, reject) => {
  resolve('some');
});

const fileReader = Promise.resolve('some');

Promise.allSettled([]);

fileReader.then((data) => console.log(data, 'content')); // some, content

// puedes completar la implementacion de la clase Foo?
class Foo {
  constructor() {
    this.counter = 0;
  }

  add(value) {
    this.counter += value;

    return this;
  }

  getTotal() {
    return this.counter;
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

// sabes que diferencia hay entre 1.2.3, ~1.2.3 y ^1.2.3 al instalar dependencias?

// dependencies y devDependencies???

// peer dependencies??


//////// 4. HTML ////////

// qué entiendes por HTML semántico??
// ciertos componentes de tu vista siguen una estructura recomendada: header-> section etc. que hacen mas facil la lectura del html para robots y humanos.

// conoces sobre accesibilidad en ambientes web??
// son caracteristicas que permiten a las personas con discapacidad interactuar con la web: zoom, colores, contraste

// qué es el DOM?? 
// es el arbol de nodos que se pueden manipular en tiempo de ejecucion.

//////// 5. CSS ////////
// Has trabajado con flexbox?
// sirve para manejar las cajas 
// sabes para qué sirve flex-grow? flex-direction?
// flex-direction
// flex-grow
// Has utilizado grid?? sabes como definir áreas de renderizado??
// 
// preprocesadores
// SaSS
// puedes describir como se comportan estos selectores CSS?
.div {
  color: cyan;

  &:hover {
    color: red
  }
}


//////// 6. React ////////
// sabes que es el vitualDOM?
// es una representacion del DOM manejada en memoria, que tiene la capacidad de determinar en que puntos se han presentado cambios, que facilita la manipulacion del DOM. 

// sabes que es el lifecycle de React? Puedes describirlo?
// mounting -> componentDidMount
// Update -> componentDidUpdate
// unmounting -> componentWillUnmount

// qué diferencia hay entre estos??
class Component extends React.Component {
  ...

  render() {
    return (<div>Hi</div>);
  }
} // class component - stateful components

class Component extends React.PureComponent {
  ...
  componentShouldUpdate() {

  }
  render() {
    return (<div>Hi</div>);
  }
}

const Component = () => {
  return (<div>Hi</div>);
} // functional component - stateless components

// Hooks

// que consideras que es un hook? con cuales has trabajado??
// es una feature de react que te permite interactuar con el lifecycle de react en componentes stateless.

// useState
// useContext
// useRef
// useEffect
// 
// useMemo
// useCallback
// useLayoutEffect

// cuantas veces se imprime el valor de a?
const Component = ({ a }) => {
  useEffect(() => {
    console.log(a);
  }, [a]);

  return (<div>Hi</div>);
};// cada que cambie a // 

// Puedes describir que es un HOC?
// es un copmponente que recibe un componente y retorna un nuevo componente.

// Has trabajado con Context en React?
// sirve para compartir contextos (datos) entre componentes, para evitar pasarlos por props entre componentes.

// Que papel cumple el Provider al usar Context en React?
// es el que se encarga de definir que contexto va a estar disponible para los componentes hijos.

// y el Consumer?
// es el que extrae los valores del contexto proporcionado por un provider.

// Sabes para que se sirven los refs en React? 
// sirven para manipular el DOM. se crea una referencia al nodo del DOM. 

// has trabajado con portals? 
// 

reactDom.render('#root')
// has trabajado con suspense?? sabes para que sirve el fallback??
// sirve para hacer lazy-loading, se puede defimir mientras carga se ponga un elemento diferente provisto en el fallback.

//////// 7. Redux ////////

// Puedes describir el patron arquitectonico que sigue redux?
// flux, unidireccional, se tienen reducers donde se especifica la interaccion entre el state y las acciones.

// Puedes describir los conceptos base de redux?
// single state, el estado solo se actualiza a causa de una accion, inmutabilidad del estado (se genera un nuevo state por cada acccion), store unico para la app. 

// Que usas para conectar redux con un componente React?
// react-redux
// connect(mapStateToProps, mapDispatchToProps)(Component)
// useSelector, useDispatch

// Sabes que es un middleware?
// 
// redux-thunks
// redux-saga
// redux-observable
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


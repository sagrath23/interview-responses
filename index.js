//////// 1. Generalidades ////////

// Sabes que es una REST API??? Conoces los niveles de madurez de una RESTful API?
// es un servicio que recibe unos parametros y retorna una respuesta. 

// Sabes que diferencia hay entre localStorage y sessionStorage?
// session: mantiene la info mientras estas en la misma pantalla.
// local, se comparte entre pestanas.

// Sabes que es CORS?
// no se tienen permisos de la API para hacer el llamado. La API debe dar los permisos para que sea consuimida por otro servicio.

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

color1.color = 'yellow'; //cyan
color2.color = 'purple'; // red

color1.print();//yellow
color2.print();//red

// cual es la salida de este código 
function a() {
  console.log("a");
} 
var b;// undefined
a(); //error a undefined // a

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
  hi: () => {
    console.log(`Hi, ${this.foo} & ${this.bar}`)
  }
};

object.hi.bind(object);
// Hi, undefined & undefined
object.hi();//Hi, Batsy & Robin

// cual es la salida de estos ciclos?
const a = { foo: 'bar', baz: 'yell', res: 'bal'};
const b = ['kool', 'botz', 'tezt'];

for(let some in a) {
  console.log(some);
  a[some];// value
}//bar, yell , bal // foo, baz, res

for(let some in b) {
  console.log(some);
}//kool, botz, tezt // 0, 1, 2 

for(let some of a) {
  console.log(some);
}//foo, baz, res // a is not iterable
// next: () => ({ value: 'X', done: true })

for(let some of b) {
 console.log(some); 
}//1, 2 ,3 // kool, botz, tezt

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
})(); // IIFE
console.log(a);
//1
//2
//baz 1 == '1' => true / 1 === '1' => false
//tezt // 6
//4
//bar // 3

// que diferencia hay entre let, var y const
// let: permite redefinir
// var: variable mas global,  
// const: variable que solo se declara una vez, no se puede redefinir. 

// puedes completar el codigo para que fileReader tenga este comportamiento?
const fileReader = new Promise((res, err) => {
   resolve("content");
});

const fileReaderAwait = (async () => "content")(); // promise

fileReaderAwait.then(data => console.log(data));

const response = await fileReaderAwait();
console.log(response);

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


//////// 3. NPM ////////

// Conoces que es NPM? que comandos conoces? has escuchado de npm link? npm pack?
// comando que usamos para manejar libs/dependencias
// npm i
// npm update
// npm clean cache --force

// sabes que diferencia hay entre 1.2.3, ~1.2.3 y ^1.2.3 al instalar dependencias?
// latest 2.1.2
// 1.2.3 => error // 1.2.3
// ~1.2.3 => 1.2.3 // 1.2.X
// ^1.2.3 => 1.X.X

// dependencies y devDependencies???
// dependencies: aplica para todos los envs
// dev: ambientes no productivos.
// peer dependencies??


//////// 4. HTML ////////

// qué entiendes por HTML semántico??

// conoces sobre accesibilidad en ambientes web??

// qué es el DOM?? 

//////// 5. CSS ////////
// Has trabajado con flexbox?

// sabes para qué sirve flex-grow? flex-direction?

// Has utilizado grid?? sabes como definir áreas de renderizado??

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
// es una copia del DOM, dependiendo d los cambios quie se hagan, solo se renderizan las partes modificadas mediante un prodceso de reconciliacion de DOM.

// sabes que es el lifecycle de React? Puedes describirlo?
// constructor -> componenteDidMount -> componentWillUnmount
// useEffect 
// mounting -> constructor, render
// updating -> 
// unmounting -> componentWillUnmount

// qué diferencia hay entre estos??
class Component extends React.Component {
  ...

  render() {
    return (<div>Hi</div>);
  }
} // class

class Component extends React.PureComponent {
  ...

  componentShouldUpdate() {}

  render() {
    return (<div>Hi</div>);
  }
} // class 

const Component = () => {
  return (<div>Hi</div>);
} // functional

// Hooks

// que consideras que es un hook? con cuales has trabajado??
// es una herramienta que usa react para emular los comportamientos de componentes de clase en componentes funcionales. 
// useEffect
// useState
// useDispatch useSelector -> redux
// useContext
// useRef

// cuantas veces se imprime el valor de a?
const Component = ({ a }) => {
  useEffect(() => {
    console.log(a);
  }, [a]); // 1 // while(true) { console.log(a); }

  return (<div>Hi</div>);
};

// Puedes describir que es un HOC?
// memo (), son componentes que estan sobre otros componentes. 

// Has trabajado con Context en React?
// es un patron para centralizar la informacion, se utiliza para compartir info entre componentes que no es requerida en componentes intermedios.

// Que papel cumple el Provider al usar Context en React?
// es el que sirve la info
// y el Consumer?
// es el que utiliza o consume la info.
// Sabes para que se sirven los refs en React? 
// sirve para hacer copias del dom real, obtener datos del DOM y usarlo en React. 
// has trabajado con portals? 
// 
// has trabajado con suspense?? sabes para que sirve el fallback?? 
// con ejemplo y todo

//////// 7. Redux ////////

// Puedes describir el patron arquitectonico que sigue redux?

// Puedes describir los conceptos base de redux?
// utiliza los compoenntes para renderizar y la logica va en las actions (llamados a apis, etc), y los reductores empaquetan la info. y el store es el que almacena la info.

// Que usas para conectar redux con un componente React?
// useDispatch & useSelector
// // connect(mapStateToProps, mapDispatchToProps)(Component)

// Sabes que es un middleware?
// es el que permite hacer peticiones a las API
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
// son las validaciones que se hacen a los componentes para verificar que cumplan con lo requerido.
// TDD
// si

// Qué frameworks de Unit Tests conoces??
// jest + enzyme -> @testing-library/react

// Que ventajas ofrecen las pruebas unitarias en el proceso de desarrollo de software?
// en caso de refactorizaciones nos previenen de errores que se puedan presentar.

// Por qué una prueba unitaria debe ejecutarse de forma aislada?
// tiempo de ejecucion de los tests, disponibilidad de recursos.  

// Heroku -> codeship
// AWS -> elastic beanstalk

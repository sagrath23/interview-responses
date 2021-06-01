//////// 1. Generalidades ////////

// Sabes que es una REST API??? Conoces los niveles de madurez de una RESTful API?
// Es una forma en la cual estan construido los servicios que se usan en la web. HTTP Methods + URL para devolver algo del backend. 

// 4 niveles: desde URL hasta descubrimiento de recursos.

// Sabes que diferencia hay entre localStorage y sessionStorage?
// la info de la URl se guarda asociada a esta.
// session mas lento que local.

// Sabes que es CORS?
// tiene que ver con los headers. si no tenes cors habilitado en el backend no lo vas a poder consumir,tiene que ver con que si un servicio es seguro o nop. 

//////// 2. Javascript ////////

// cual es la salida de cada console.log
class Color {
  nombreVariable;

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
color2.color = 'purple'; //{ color: purple, print: () => console.log(color)}

color1.print(); //cyan // yellow
color2.print(); //purple // red

// cual es la salida de este código 
a();
function a() {
  console.log("a");
} // error
b();
var b = function() {
  console.log("b");
} //b

function a() {
  console.log("a");
}
var b;// undefined
a(); //a
b(); // b is not a function
b = function() {
  console.log("b");
}

// cual es la salida de este object.hi()??
const foo = 'Ren';
const bar = 'Stimpy';

this.foo = 'Wanda';
this.bar = ' Vision';
let object = {
  foo: 'Batsy',
  bar: 'Robin',
  hi: function() {
    console.log(`Hi, ${this.foo} & ${this.bar}`) // Hi, Ren & Stimpy
  }
};

object.hi(); // Hi, undefined & undefined

// cual es la salida de estos ciclos?
const a = { foo: 'bar', baz: 'yell', res: 'bal'};
const b = ['kool', 'botz', 'tezt'];

for(let some in a) {
  console.log(some);
}
// foo
// baz
// res

for(let some in b) {
  console.log(some);
  b[some];
}
// kool // 0
// botz // 1
// tezt // 2

// next: () => ({ value: 'x', done: true })
for(let some of a) {
  console.log(some);
} // a is not iterable
// bar
// yell
// bal


for(let some of b) {
 console.log(some); 
} // kool, botz, tezt
// undefined
// undefined
// undefined

// en que orden se ejecutan los console.log y que imprimen?
var a = 6;
(function() {
  const foo = true;
  let a = 2;

  console.log(1); // 1
  setTimeout(() => {
    console.log(foo == 1 ? 3 : 'bar');
  }, 1000); //6
  console.log(a); //2
  setTimeout(() => {
    console.log(4);
  }, 0); //5
  console.log(foo === 1 ? 5 : 'baz');  // 3
  a = 'tezt';
})();
console.log(a);//  4
// 1
// 2
// 5 // baz
// 6
// 4
// 3

// que diferencia hay entre let, var y const

// puedes completar el codigo para que fileReader tenga este comportamiento?
const fileReader = Promise.resolve({data: 'hello world'});
let fileReader = async () => {}

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


//////// 3. NPM ////////

// Conoces que es NPM? que comandos conoces? has escuchado de npm link? npm pack?
// node package manager, manejador de paquetes de JS.
// npm init
// npm i
// npm start
// 

// sabes que diferencia hay entre 1.2.3, ~1.2.3 y ^1.2.3 al instalar dependencias?
// latests 2.3.4  / 1.5.6
// 1.2.3 1.2.3 // 1.2.3
// ~1.2.3 1.5.6 // 1.2.X
// ^1.2.3 2.3.4 // 1.X.X

// dependencies y devDependencies???
// dependencies: esta todo lo que va dentro del deploy
// devDependencies: herramientas de desarrollo (nodemon).

// peer dependencies??
// 

//////// 4. Node.js ////////

// Qué es Node.js??
// entorno de ejecucion. codigo abierto, asincrono, orientado a eventos. 
// 

// Qué librerias nativas de Node.js has utilizado??
// cluster
// console
// fs
// events

// // http/http2

// Streams
// stream.on('data', (chunk) => console.log(chunk));

// Event emmiter
// escucha de acciones y ejecucion de codigo

// Event loop
// subproceso que se ejecuta cada x tiempo

// Profiling
// 

// Debug

// Cómo manejas variables de entorno y secretos para usarlos en la ejecución de tu programa Node.js?

// Express.js

// middleware
// funcion que intercepta otras funciones.

//////// 5. HTML ////////

// qué entiendes por HTML semántico??
// too much divs => standard (footer, header)

// conoces sobre accesibilidad en ambientes web??
// darle la posibilidad de usar sitios

// qué es el DOM?? 
// es el arbol que representa el HTML que estamos renderizando en nuestra pagina.

//////// 6. CSS ////////
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


//////// 7. React ////////
// sabes que es el vitualDOM?
// es una copuia del dom que permite comparar con el dom para establecer los nodos que se deben re-renderizar.

// sabes que es el lifecycle de React? Puedes describirlo?
// ciclo de vida: se crea, se monta, etc.
// 

// qué diferencia hay entre estos??
class Component extends React.Component {
  render() {
    return (<div>Hi</div>);
  }
} // class

class Component extends React.PureComponent {
  render() {
    return (<div>Hi</div>);
  }
}

const Component = () => {
  return (<div>Hi</div>);
} // function

// Hooks

// que consideras que es un hook? con cuales has trabajado??
// es una forma de salir de los lifecycles. 
// useEffect
// useState
// useMemo
// 

// cuantas veces se imprime el valor de a?
const Component = ({ a }) => {
  useEffect(() => {
    console.log(a);
  }, [a]); // while -> true

  return (<div>Hi</div>);
}; // 1

// Puedes describir que es un HOC?
// es una tecnica avanzada de react. 
// withRouter()(Component) // 

// Has trabajado con Context en React?
// contexto global

// Que papel cumple el Provider al usar Context en React?

// y el Consumer?
// hooks -> useContext

// Sabes para que se sirven los refs en React? 
// sirve para hacer referencia a un elemento html en especifico. 

// has trabajado con portals? 
// 

// has trabajado con suspense?? sabes para que sirve el fallback?? 
// 

//////// 8. Redux ////////

// Puedes describir el patron arquitectonico que sigue redux?
// MVC -> flux

// Puedes describir los conceptos base de redux?
// se dispatcha una accion, se llama al reducer, luego al store, se modifica la data y se hace el re-render de la app

// action / reducer / store / view

// Que usas para conectar redux con un componente React?
// connect
// // useDispatch & useSelector

// Sabes que es un middleware?

//////// 9. Fundamentos ////////

// OOP?

// Imperative programming?

// FP?

// reactive Programming?

// por qué es mejor componer objetos en lugar de herencia clasica?


//////// 10. Principios de diseño ////////

// SOLID

// DRY

// Dependency Injection / IoC


//////// 11. Unit testing ////////

// Podrías definir qué es un Unit Test?? Has utilizado Unit Tests en tu trabajo??

// Qué frameworks de Unit Tests conoces??

// Que ventajas ofrecen las pruebas unitarias en el proceso de desarrollo de software?

// Por qué una prueba unitaria debe ejecutarse de forma aislada?

//////// 12. Misc ////////

// Git (repos, branching strategies, tools)

// CI/CD (Steps, pipelines, tools)

// NoSQL

  
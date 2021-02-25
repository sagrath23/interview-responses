//////// 1. Generalidades ////////

// Sabes que es una REST API??? Conoces los niveles de madurez de una RESTful API?
// es una interfaz que permite a una app comunicarse con otra. stateless. estandariza requests & response a traves de JSON.

// Sabes que diferencia hay entre localStorage y sessionStorage?
// session: persiste mientras el usuario esta navegando. Se puede ver aunque se cierre el tab
// local: persiste "indefinidamente". 

// Sabes que es CORS?
// es un sistema en los browsers para verificar las requests HTTP. 

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

color1.print(); // yellow
color2.print(); // red

// cual es la salida de este código 
a(); // "a"
function a() {
  console.log("a");
}
b(); // error 
var b = function() {
  console.log("b");
}

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
// this.foo = 'x';
// this.bar = 'y';

object.hi(); // "Hi, Ren & Stimpy"
// Hi, undefined & undefined

// cual es la salida de estos ciclos?
const a = { foo: 'bar', baz: 'yell', res: 'bal'};
const b = ['kool', 'botz', 'tezt'];

for(let some in a) {
  console.log(some);
} // foo, baz, res

for(let some in b) {
  console.log(some);
} // 0, 1, 2

for(let some of a) {
  console.log(some);
} // "bar", "yell", "bal"
// next: () => ({ value: 'x', done: true })
// a is not iterable

for(let some of b) {
 console.log(some); 
} // "kool", "botz", "tezt"

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

/*
1
2
4
'baz'
6
'bar'
*/
// 1, 2, baz, 6, 4, 3

// que diferencia hay entre let, var y const
// let block scope
// var global scope
// const block scope y no puede ser redefinido.
console.log(b);// undefined
console.log(a);// undefined // a is not defined
let a = 'foo';
var b = 'zom';
// puedes completar el codigo para que fileReader tenga este comportamiento?
const value = 'some';
const fileReader = new Promise((resolve, reject) => resolve(value));

const fileReader = (async ()=>{
  try{
    return "some"
  }catch(e){
    throw e
  }
})()

fileReader.then((data) => console.log(data, 'content')); // some, content

// puedes completar la implementacion de la clase Foo?
class Foo {
  constructor() {
    this.total = 0;
  }
  add(int){
    this.total = this.total + int
    return this
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
// currying

//////// 3. NPM ////////

// Conoces que es NPM? que comandos conoces? has escuchado de npm link? npm pack?
// gestor de paquetes de Node.
// npm i
// npm start
// npm run


// sabes que diferencia hay entre 1.2.3, ~1.2.3 y ^1.2.3 al instalar dependencias?
// ~ version actual

// 1.2.3 -> 1.2.3
// ~1.2.3 -> 1.2.x
// ^1.2.3 -> 1.X.X

// dependencies y devDependencies???
// dependencies -> paquetes necesarios para que la app funcione
// devDependencies -> debug, build, etc.

// peer dependencies??
// 

//////// 4. Node.js ////////

// Qué es Node.js??
// es el entorno de ejecucion de JS del lado del server, es V8 (chrome) sobre C++. 

// Qué librerias nativas de Node.js has utilizado??
// fs, OS, io, HTTP
// http: network -> requests,responses, headers.

// Streams
// se maneja como un flujo de bytes (buffer).
// callbacks para reaccionar a los events

// Event emmiter
// es el que se encarga de Process. es el que se encarga de hacer el manejo de los eventos.

// Event loop
// es el que permite delegar tareas, para evitar que se bloquee el hilo de ejecucion de node

// Profiling
// 

// Debug
// --debug

// Cómo manejas variables de entorno y secretos para usarlos en la ejecución de tu programa Node.js?
// env vars 
// Process.env

// .env file -> dotenv

// Express.js

// middleware


//////// 5. HTML ////////

// qué entiendes por HTML semántico??

// conoces sobre accesibilidad en ambientes web??

// qué es el DOM?? 


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
// es una copia del DOM que puede reaccionar a los cambios dentro de react.

// sabes que es el lifecycle de React? Puedes describirlo?
// son los estados que tiene un componente a lo largo del ciclo de vida
// mounting
// updating
// unmounting

// qué diferencia hay entre estos??
class Component extends React.Component {
  render() {
    return (<div>Hi</div>);
  }
}// Class component


class Component extends React.PureComponent {
  shouldComponentUpdate() {}

  render() {
    return (<div>Hi</div>);
  }
} // no props

const Component = () => {
  return (<div>Hi</div>);
}// functional comp.

// Hooks

// que consideras que es un hook? con cuales has trabajado??
// es uan funcion que expande la funcionalidad de un componente de tipo funcion.

// useContext
// useState
// useEffect
// useCallback
// useMemo

// ambos memoizan, se pueden intercambiar con useEffect.

// cuantas veces se imprime el valor de a?
const Component = ({ a }) => {
  useEffect(() => {
    console.log(a);
  });
  //});

  return (<div>Hi</div>);
};

// Puedes describir que es un HOC?
// es un componente que modifica a otro, o recibe como parametro otro componente
 
// Has trabajado con Context en React?
// sirve para compartir state entre multiples components

// Que papel cumple el Provider al usar Context en React?
// es el que se monta y almacena la data

// y el Consumer?
// es el que compoennte que permite acceder a la data

// Sabes para que se sirven los refs en React? 
// todos los componentes en react tienen un key, con ref creo una referencia a ese component en el DOM

// has trabajado con portals? 
// 

// has trabajado con suspense?? sabes para que sirve el fallback?? 
//  

//////// 8. Redux ////////

// Puedes describir el patron arquitectonico que sigue redux?
// 
// flux

// Puedes describir los conceptos base de redux?
// state, event, reducer
// reducer: es el que se encarga de leer el evento y aplicar la logica correspondiente al evento (modifica la parte del estado que corresponde) 

// Que usas para conectar redux con un componente React?
// connect -> mapState y mapDispatch
// useDispatch & // useSelector

// Sabes que es un middleware?
// son funciones que se encargan de interceptar un flujo.
// 

//////// 9. Fundamentos ////////

// OOP?
// // herencia, polimorfismo, encapsulamiento y abstraccion.

// Imperative programming?
// en la programacion imperativa se indica paso a paso que debe hacer el programa.

// FP?
// es donde se separan los procesos de la data, y se trata la data de forma inmutable. 
// pure function: es una funcion que no tiene side effects. 

// reactive Programming?

// por qué es mejor componer objetos en lugar de herencia clasica?


//////// 10. Principios de diseño ////////

// SOLID
// 
// DRY
// don't repeat yourself: escribir codigo reutilizable 

// Dependency Injection / IoC
// 

//////// 11. Unit testing ////////

// Podrías definir qué es un Unit Test?? Has utilizado Unit Tests en tu trabajo??
// es donde se prueban las funcionalidades de la app. 

// Qué frameworks de Unit Tests conoces??
// jest, jasmine

// Que ventajas ofrecen las pruebas unitarias en el proceso de desarrollo de software?
// agiliza el proceso, lo hace consistente.

// Por qué una prueba unitaria debe ejecutarse de forma aislada?
// para garantizar que la funcionalidad que se esta probando no lleva errores.

//////// 12. Misc ////////

// Git (repos, branching strategies, tools)

// CI/CD (Steps, pipelines, tools)

// NoSQL


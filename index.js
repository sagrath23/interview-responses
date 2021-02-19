//////// 1. Generalidades ////////

// Sabes que es una REST API??? Conoces los niveles de madurez de una RESTful API?
// Es una interfaz que expone servicios de un sistema por medio del protocolo REST. 

// HATEOAS -> 

// Sabes que diferencia hay entre localStorage y sessionStorage?
// ambos almacenan info
// local almacena de forma indefinida
// session mientras se mantenga la sesion 

// Sabes que es CORS?
// politica en el manejo de informacion, que basicamente dice que solo se puede recibir info de un mismo server
// a menos que se especifique que se va a recibir de otras fuentes.

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
color2.print(); // rojo
// yellow
// red

// cual es la salida de este código 
a();
function a() {
  console.log("a");
}
b();
var b = function() {
  console.log("b");
}
//a
//b

//a
// b is not a function

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

//Hi, Batsy & Robin
object.hi();// Hi, undefined, undefined

// cual es la salida de estos ciclos?
const a = { foo: 'bar', baz: 'yell', res: 'bal'};
const b = ['kool', 'botz', 'tezt'];

// enum -> key: value
// iterable -> next: () => ({ value: 'X', done: true })

for(let some in a) {// key
  console.log(some); // foo, baz, res
  a[some];
}

for(let some in b) {
  console.log(some); // 0, 1, 2
  //kool
  //botz
  //tezt

}

for(let some of a) { // a is not iterable
  console.log(some);
  //bar
  //yell
  //bal
}

for(let some of b) {
 } console.log(some); // // kool, botz, tezt
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
console.log(a);

//1
//2
//baz
//6
//4
//3

// let, var y const
// var -> hoisting / scope de funcion / reasigna valor / redeclarable
// let -> no hoisting / scope de bloque / reasigna valor
// const -> no hoisting / scope de bloque / no reasigna valor
const a = {};

a.some = "X";// 

a = []


// puedes completar el codigo para que fileReader tenga este comportamiento?
const fileReader = new Promise((resolve, reject) =>{
        resolve(data)
});
//
const fileReader = (async () => 'some')();
const fileReader = Promise.resolve('some');

fileReader.then((data) => console.log(data, 'content')); // some, content

const fileReader = await funcionasyncrona();

// puedes completar la implementacion de la clase Foo?
class Foo {
  total;
  constructor() {}

  add(numero){
    total+=numero;
    // 
    return this;
  }
  getTotal(){
    return total;
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
// con ciertos elementos HTML se puede mejorar la indexacion en buscadores

// conoces sobre accesibilidad en ambientes web??
// atributos aria

// qué es el DOM?? 
// grafo que representa la pagina, DOCUMENT object model.

//////// 5. CSS ////////
// Has trabajado con flexbox?
// flexbox, permite manejar la ubicacion de lso elementos de forma sencilla

// sabes para qué sirve flex-grow? flex-direction?
// flex-direction: para especificar la orientacion: rows, columns
// flex-grow: fija el size de forma flexibe.

// Has utilizado grid?? sabes como definir áreas de renderizado??
// 

// preprocesadores
// Less & sass
// puedes describir como se comportan estos selectores CSS?
.div {
  color: cyan;

  &:hover {
    color: red
  }
}


//////// 6. React ////////
// sabes que es el vitualDOM?
// es la representacion del DOM que usa React para optimizar la actualizacion del DOM real.
// 
// react fiber

// sabes que es el lifecycle de React? Puedes describirlo?
// es ciclo de vida de un componente. tiene 3 etapas
// mount
// update
// unmount
// 
// qué diferencia hay entre estos??
class Component extends React.Component {
  ...

  render() {
    return (<div>Hi</div>);
  }
} // class

class Component extends React.PureComponent {
  ...
  shouldComponentUpdate() {
  
  }
  render() {
    return (<div>Hi</div>);
  }
} // class

const Component = () => {
  return (<div>Hi</div>);
} // function

// Hooks

// que consideras que es un hook? con cuales has trabajado??
// 

// cuantas veces se imprime el valor de a?
const Component = ({ a }) => {
  useEffect(() => {
    console.log(a);
  });

  return (<div>Hi</div>);
};

// Puedes describir que es un HOC?
//
// withRouter(Component)
// 

// Has trabajado con Context en React?
// es una funcionalidad para evitar pasar valores por componentes intermedios
// Prop Drilling

// Que papel cumple el Provider al usar Context en React?
// es el que fija el prop que se quiere compartir en toda la jerarquia

// y el Consumer?
// es el que toma ese valor y lo usa en el componente.

// Sabes para que se sirven los refs en React? 
// obtiene una referencia de un elemento del DOM

// has trabajado con portals? 
// es para renderizar componentes react fuera del scope de la app react.

// has trabajado con suspense?? sabes para que sirve el fallback?? 
// 

//////// 7. Redux ////////

// Puedes describir el patron arquitectonico que sigue redux?
// flux

// Puedes describir los conceptos base de redux?
// actions, reducers, store.

// Que usas para conectar redux con un componente React?
// connect(mapStateToProps, mapDispatchToProps)(Component);

// useSelector((state) => ({ ...state }));
// useDispatch(); // dispatch(actions.someAction());

// Sabes que es un middleware?
// redux-observables, 
// redux-thunks
// redux-saga

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


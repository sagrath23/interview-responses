//////// 1. Generalidades ////////

// Sabes que es una REST API??? Conoces los niveles de madurez de una RESTful API?
// es un fragmento de codigo que recibe unas llamadas y dependiendo del verbo realiza las acciones programadas. 

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

color1.print(); // yellow
color2.print(); // purple // red

// cual es la salida de este código 
function a() {
  console.log("a");
}
var b; // undefined
a(); //a
b(); //b // b is not a function
b = function() {
  console.log("b");
}

// cual es la salida de este object.hi()??
this.foo = 'Wanda';
this.bar = 'Vision';
const foo = 'Ren';
const bar = 'Stimpy'
let object = {
  foo: 'Batsy',
  bar: 'Robin',
  hi: () => {
    console.log(`Hi, ${this.foo} & ${this.bar}`)
  }
};

object.hi();//  Batsy Robin // Hi, undefined & undefined

// cual es la salida de estos ciclos?
const a = { foo: 'bar', baz: 'yell', res: 'bal'};
const b = ['kool', 'botz', 'tezt'];

for(let some in a) {
  console.log(some);
  a[some];
} //foo: 'bar', baz: 'yell', res: 'bal'
// foo, baz, res

for(let some in b) {
  console.log(some);
}// 'kool', 'botz', 'tezt'
// 0, 1, 2

for(let some of a) {
  console.log(some);
}  //foo, baz,  res
// next: () => ({ value: 'x', done: true })
// a is not iterable

for(let some of b) {
 console.log(some); 
} //['kool', 'botz', 'tezt']
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
})(); // IIFE
console.log(a); 6
// 1, 2, baz, 6, 4, 3

// que diferencia hay entre let, var y const
// let : de scope, que se puede modificar
// var: global, reasignable
// const: de scope,que no se puede modificar
const some = {};
some.fo = 'Hi';

// puedes completar el codigo para que fileReader tenga este comportamiento?
const fileReader = () => {
  fileReader = new Promise 

};
const fileReader = new Promise((resolve, reject) => {
  try {
    resolve('some');
  } catch(error) {
    reject(error);
  }
});
const fileReader = Promise.resolve('some');
Promise.all([prom1, prom2, ...,  prom2]);
Promise.allSettled([...]);
Promise.race([.. ]);

fileReader.then((data) => console.log(data, 'content')); // some, content

// puedes completar la implementacion de la clase Foo?
class Foo {
  constructor() {
    suma = ''
  }
  add (num){
  this.suma = this.suma + num 
  // return 
// 
    return this;
  }
  getTotal(){
    return this.suma;
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
// genera un proxy del DOM que hace que sea mas rapido detectar las secciones que se deben modificar


// sabes que es el lifecycle de React? Puedes describirlo?


// qué diferencia hay entre estos??
class Component extends React.Component {
  ...

  render() {
    return (<div>Hi</div>);
  }
} // class // stateful

class Component extends React.PureComponent {
  ...
  shouldComponentUpdate() {}

  render() {
    return (<div>Hi</div>);
  }
}

const Component = () => {
  return (<div>Hi</div>);
} // function // stateless

// Hooks

// que consideras que es un hook? con cuales has trabajado??
// es una funcion que devuelve o retorna un valor.

// cuantas veces se imprime el valor de a?
const Component = ({ a }) => {
  useEffect(() => {
    console.log(a);
  });

  return (<div>Hi</div>);
};

// Puedes describir que es un HOC?
// componente que recibe otro componente y retorna un nuevo componente.

// Has trabajado con Context en React?
// sirve para compartir data entre componente

// Que papel cumple el Provider al usar Context en React?


// y el Consumer?

// Sabes para que se sirven los refs en React? 
// se utiliza cuando no se quiere mantener un estado de un componente en el DOM, como un input, y crea una referencia este.

// has trabajado con portals? 
// 

// has trabajado con suspense?? sabes para que sirve el fallback?? 
// sirven para mejorar el performance cuando un compoonente tiene que hacer un procesamiento mayor

// lazy loading

//////// 7. Redux ////////

// Puedes describir el patron arquitectonico que sigue redux?
// flux

// Puedes describir los conceptos base de redux?
// se definen las acciones (que es lo que se quiere ejecutar en el store), el dispatch se encarga de disparar la accion al reducer. el reducer toma la accion, aplica los cambios que corresponda y genera un nuevo estado.

// Que usas para conectar redux con un componente React?
// mapStateToProps
// // connect(mapStateToProps, mapDispatchToProps)(Component)

// Sabes que es un middleware?
// es una funcion que intercepta el dispatcher. 
// redux-thunks

//////// 8. Fundamentos ////////

// OOP?

// Imperative programming?

// FP?

// reactive Programming?

// por qué es mejor componer objetos en lugar de herencia clasica?


//////// 9. Principios de diseño arqu ////////

// SOLID
// 

// DRY
// don't repeat yourself

// Dependency Injection / IoC


//////// 10. Unit testing ////////

// Podrías definir qué es un Unit Test?? Has utilizado Unit Tests en tu trabajo??
// si

// Qué frameworks de Unit Tests conoces??
// jest, testing-library

// Que ventajas ofrecen las pruebas unitarias en el proceso de desarrollo de software?
// te permite asegurar que el codigo esta cumpliendo con los acceptance criteria de la tarea.

// Por qué una prueba unitaria debe ejecutarse de forma aislada?
// facilita la escritura de los tests 

// memoization
const store = {};

const memoize = (values, callback) => {
  if (store[values]) {
    return store[values];
  }

  const result = callback(values);
  store[values] = result;

  return result;
};

useMemo(<Component {...props} />);

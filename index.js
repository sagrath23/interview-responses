//////// 1. Generalidades ////////

// Sabes que es una REST API??? Conoces los niveles de madurez de una RESTful API?
// es una conexion con el backend, es el que me provee los recursos para el front.

// Sabes que diferencia hay entre localStorage y sessionStorage?
// session guarda cookie en localStorage
// local: comun al browser

// Sabes que es CORS?
// son delicados porque pueden romper la app. es de seguridad, porque no permite que el navegador ejecute algo. 

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
a();
const = acaNombre => {
  console.log("a");
}
b();
var b = function() {
  console.log("b");
}
// 
function a {
  console.log('a');
}
var b; // unidefined
a(); // a
b();// b is not a function
b = function() {
  console.log('b');
}
// Retornaria b es decir un string
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
// la salida por consola puede ser: Hi, Ren & Stimpy 
object.hi(); // Hi, undefined & undefined
// this.foo this.bar
// cual es la salida de estos ciclos?
const a = { foo: 'bar', baz: 'yell', res: 'bal'};
const b = ['kool', 'botz', 'tezt'];

for(let some in a) {
  console.log(some);
}// foo, baz, res
// salida por consola: bar, yell, bal 
for(let some in b) {
  console.log(some);
  b[some];
}// 0, 1, 2
// salida por consola: kool 
for(let some of a) { 
  console.log(some);
}
// a is not iterable
// next: () => ({ value: 'X', done: true })
// salida por consola: bar
for(let some of b) {
 console.log(some); 
}
// kool, botz, tezt
// salida por consola: kool

// en que orden se ejecutan los console.log y que imprimen?
var a = 6;
(function() {
  const foo = true;
  let a = 2;

  console.log(1); // ok
  setTimeout(() => {
    console.log(foo == 1 ? 3 : 'bar'); //ok
  }, 1000);
  console.log(a); //ok 
  setTimeout(() => {
    console.log(4); //ok
  }, 0);
  console.log(foo === 1 ? 5 : 'baz'); //ok
  a = 'tezt';
})();
console.log(a); //ok
// salida: 1, tezt, 2, 4, bazz, 3
// 1, 2, baz, 6, 4, 3

// que diferencia hay entre let, var y const
// let es asignable, es menos estricta que const
// var es asignable, vive en el ámbito global
// const no es asignable, vive solo en su {}

// puedes completar el codigo para que fileReader tenga este comportamiento?
const fileReader = void 0;

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
// manejador de paquetes de node.
// install
// npx
// 
// sabes que diferencia hay entre 1.2.3, ~1.2.3 y ^1.2.3 al instalar dependencias?
// latest -> 2.1.0
// 1.2.3 -> 1.2.3
// ~1.2.3 -> 1.2.X
// ^1.2.3 -> 1.X.X

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
// es una capa entre el dom y mi codigo para determinar que se tiene que visualizar

// sabes que es el lifecycle de React? Puedes describirlo?
// ciclo de vida del componente. 
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
  render() {
    return (<div>Hi</div>);
  }
} // class component

const Component = () => {
  return (<div>Hi</div>);
} // 

// Hooks

// que consideras que es un hook? con cuales has trabajado??
// 
// useMemo
// useState
// useRef
// useContext



// cuantas veces se imprime el valor de a?
const Component = ({ a }) => {
  useEffect(() => {
    console.log(a);
  });

  return (<div>Hi</div>);
};

// Puedes describir que es un HOC?
// comp. de orden superior
// se encarga de compartir props a componentes. debe estar encima de los demas.

// Has trabajado con Context en React?
// 

// Que papel cumple el Provider al usar Context en React?

// y el Consumer?

// Sabes para que se sirven los refs en React?
// toman referencias de un elemento, es como tener el "apellido del elemento para usarlo"

// has trabajado con portals? 
// para modales o notificaciones

// has trabajado con suspense?? sabes para que sirve el fallback?? 
// 
//////// 7. Redux ////////

// Puedes describir el patron arquitectonico que sigue redux?

// Puedes describir los conceptos base de redux?

// Que usas para conectar redux con un componente React?

// Sabes que es un middleware?

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

// jest

// Qué frameworks de Unit Tests conoces??

// Que ventajas ofrecen las pruebas unitarias en el proceso de desarrollo de software?

// Por qué una prueba unitaria debe ejecutarse de forma aislada?


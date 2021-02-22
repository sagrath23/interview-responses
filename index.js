//////// 1. Generalidades ////////

// Sabes que es una REST API??? Conoces los niveles de madurez de una RESTful API?
// es donde nosotros nos pdodemos comunicar para actualizar, agregar o borrar info. 

// Sabes que diferencia hay entre localStorage y sessionStorage?
// localStorage: almacena tokens de app
// sessionStorage

// Sabes que es CORS?
// cross origin 
// es algo que se hace desde el back donde se especifica que rutas pueden consumir ese backend.

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
color2.print();// red
// yellow 
// red

// cual es la salida de este código 
function a() {
  console.log("a");
}
var b; // undefined
a();// a
b(); // b is not a function
b = function() {
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

object.hi(); // Hi, Batsy & Robin
// Hi, undefined, undefined
const some = function() {
  console.log(this);
}

some.bind({ foo: 'X' })

// cual es la salida de estos ciclos?
const a = { foo: 'bar', baz: 'yell', res: 'bal' };
const b = ['kool', 'botz', 'tezt'];

for (let some in a) {
  console.log(some);
}// foo, baz, res

for (let some in b) {
  console.log(some);
}// // 0, 1, 2

for (let some of a) {
  console.log(some);
}// // a is not iterable

for (let some of b) {
  console.log(some);
} // 'kool', 'botz', 'tezt'

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

// 1, 'bazz', 6, 4, 3
// 1, 2, baz, 6, 4, 3

// que diferencia hay entre let, var y const
// let: definido dentro de su propio scope
// var: se puede llamar desde cualquier parte del bloque
// const: constante, que no se puede cambiar
const some = "foo";
foo.concat("-var");
some = [];


// puedes completar el codigo para que fileReader tenga este comportamiento?
const fileReader = ;
const fileReader = Promise.resolve('some');
const fileReader = new Promise((resolve) => resolve('some'));
const fileReader = (async () => 'some')();

fileReader.then((data) => console.log(data, 'content')); // some, content

// puedes completar la implementacion de la clase Foo?
class Foo {
  constructor() {
    this.total = 0
  }

  add(value) {
    this.total += value
    //
    return this;
  }

  getTotal() {
    return this.total
  }
}

if (instance) {
  return instance;
}

instance = new Instance();

return instance;

const foo = new Foo();

foo.add(1).add(2).add(3).add(4).getTotal();// should return 10

// Punto extra!
// puedes escribir una funcion que tenga este comportamiento ?
sum(3)(5) // 8
sum(3, 5) // 8


  //////// 3. NPM ////////

  // Conoces que es NPM? que comandos conoces? has escuchado de npm link? npm pack?
// lo que se utiliza para instalar las libs.
// npm i
// npm run
// link: 

  // sabes que diferencia hay entre 1.2.3, ~1.2.3 y ^1.2.3 al instalar dependencias?
// 1.2.3 -> 1.2.3
// newer 2.3.4
// ^1.2.3 -> 1.X.X
// ~1.2.3 -> 1.2.X

  // dependencies y devDependencies???
// dependencies: se van a Prod
// devDependencies: no se van a prod
  // peer dependencies??
//


  //////// 4. HTML ////////

  // qué entiendes por HTML semántico??
// refleja el uso de las etiquetas en el tagueado HTML: por ejemplo tags como header, footer, img.

  // conoces sobre accesibilidad en ambientes web??
// en imagenes, al colocar el atributo alt, o en RN al usar accesibility-label

  // qué es el DOM?? 
// Document Object Model
// es un arbol de nodo que hacen referencia a cada elemento de una pagina web estructurada con HTML.

  //////// 5. CSS ////////
  // Has trabajado con flexbox?
// si, 

  // sabes para qué sirve flex-grow? flex-direction?
// flex-grow: dice hasta cuando va a crecer
// flex-direction: da la direccion de display

  // Has utilizado grid?? sabes como definir áreas de renderizado??
// grid-areas: "header header header"
// "content content aside"
// "footer footer footer"
//grid-area" footer / header

  // preprocesadores
// SaSS

  // puedes describir como se comportan estos selectores CSS?
  .div {
  color: cyan;

  &: hover {
    color: red
  }
} // texto cyan para .div y hover red


//////// 6. React ////////
// sabes que es el vitualDOM?
// es lo que se usa para evitar la recarga total de la pagina.
// al cambiar un elemento del virtualDOM, se compara con el DOM y se concilia para modificar solo el nodo afectado por el cambio.
// react fiber

// sabes que es el lifecycle de React? Puedes describirlo?
// ciclos de vida
// mount
// update
// unmount

// qué diferencia hay entre estos??
class Component extends React.Component {
  ...

  render() {
    return (<div>Hi</div>);
  }
}

class Component extends React.PureComponent {
  ...

  shouldComponentUpdate(){
    
  }

  render() {
    return (<div>Hi</div>);
  }
}

const Component = () => {
  return (<div>Hi</div>);
}// presentational component

// Hooks

// que consideras que es un hook? con cuales has trabajado??
// es la nueva forma de escribir componentes de react con menos codigo, se emulan algunos lifecycle con useEffect

// useState
// useEffect
// useCallback
// useReducer
// useRef
// useContext
// useMemo

// cuantas veces se imprime el valor de a?
const Component = ({ a }) => {
  useEffect(() => {
    console.log(a);
  }, []); // 1
  // infinite

  return (<div>Hi</div>);
};

// Puedes describir que es un HOC?
// Es un copmponente que recibe un componente, y retorna otro componente
// reutilizacion de codigo.

// errorBoundary


// Has trabajado con Context en React?
// si, sirve para compartir info entre componentes, para evitar el prop drilling

// Que papel cumple el Provider al usar Context en React?
//sirve para dar acceso a la info a los componentes dentro del provider 

// y el Consumer?
// sirve para consumir el contexto.

// Sabes para que se sirven los refs en React? 
// hacen referencia a los elementos donde se esta colocando el ref. En un formulario para acceder a los valores del form y al submit. 

// has trabajado con portals? 
// sirven para mostrar elementos en el DOM.

// has trabajado con suspense?? sabes para que sirve el fallback?? 
// se utilizar para hacer lazy loading, mientras se carga el componente, muestra fallback.

//////// 7. Redux ////////

// Puedes describir el patron arquitectonico que sigue redux?
// flux
// Puedes describir los conceptos base de redux?
// acciones, tipos, reducers.
// crear el store y el provider wrapea a la app.
// desde cada componente se hace dispatch de una accion para mutar el estado en el reducer y almacenar el nuevo estado en el store, y actualizar a los componentes suscritos.

// Que usas para conectar redux con un componente React?
// connect(mapStateToProps, mapDispatchToProps)(Components)

// useDispatch
// // useSelector

// Sabes que es un middleware?
//es lo que se ejecutra en medio del proceso, para hacer un llamado
// redux-thunks
// redux-saga

//////// 8. Fundamentos ////////

// OOP?
// herencia, polimorfismo, abstraccion, encapsulamiento 

// Imperative programming?
// 

// FP?
// composicion de funciones (maps, filters, etc.) funciones puras, sin side-effects. Monads

// reactive Programming?

// por qué es mejor componer objetos en lugar de herencia clasica?


//////// 9. Principios de diseño ////////

// SOLID
// Simple
//
// aplica para funciones, que sean simples, legibles, que no este haciendo mas de lo que debe.

// Single resp.
// open/close
// liskov
// Interface segreg.
// Dependency Injection

// DRY
// 

// Dependency Injection / IoC


//////// 10. Unit testing ////////

// Podrías definir qué es un Unit Test?? Has utilizado Unit Tests en tu trabajo??
// es una prueba de un caso aislado del codigo, donde se verifica el comportamiento del codigo en diferentes escenarios

// Qué frameworks de Unit Tests conoces??
// Jest - testing-library

// Que ventajas ofrecen las pruebas unitarias en el proceso de desarrollo de software?
// mantenibilidad, evitar regresiones en el codigo.

// Por qué una prueba unitaria debe ejecutarse de forma aislada?
// porque existen diferentes tipos de tests que prueban diferentes aspectos, y los unit tests solo se encargan del codigo puntual, no de las dependencias o llamados. 

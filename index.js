//////// 1. Fundamentos ////////

// qué  de programación conoces?

// por qué es mejor componer objetos en lugar de herencia clasica?


//////// 2. Generalidades ////////

// Sabes que es una REST API??? Conoces los niveles de madurez de una RESTful API?

// Sabes que diferencia hay entre localStorage y sessionStorage?

// Sabes que es CORS?

// Cómo aseguras que tu API solo sea utilizada por un usuario verificado?

// Sabes que es un patron de diseño? Conoces alguno?


//////// 3. NPM ////////

// Conoces que es NPM? que comandos conoces? has escuchado de npm link? npm pack?
// es el manejador de paquetes de Node.js.
// npm i, npm init, npm link -> linkear dependencias
// npm pack -> genera .tar
// npm publish
// npm audit

// npm fund -> $$$

// sabes que diferencia hay entre 1.2.3, ~1.2.3 y ^1.2.3 al instalar dependencias?
// major.minor.patch
// 1.2.3 => version fija
// ~1.2.3 => 1.2.x
// ^1.2.3 => 1.x.x

// dependencies y devDependencies???
// dependencies => necesarias para la app
// devDependencies => necesarias para dev mas no para el funcionamiento de la app.
// peer dependencies??
// se usan para libs. elpaquete requiere una dependencia que no provee, pero que espera que este instalada en donde se vaya a usar.

//////// 4. Javascript ////////

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
function a() {
  console.log("a");
}
var b; // undefined
a();
b();
b = function() {
  console.log("b");
}
// ab
// a b is not a function
// cual es la salida de este object.hi()??
let object = {
  foo: 'baz',
  bar: 'some',
  hi: function() {
    console.log(`Hi, ${this.foo} ${this.bar}`)
  }
};

object.hi();
// Hi, baz, some
// Hi, undefined, undefined

// cual es la salida de estos ciclos?
const a = { foo: 'bar', baz: 'yell', res: 'bal'};
const b = ['kool', 'botz', 'tezt'];

for(let some in a) {
  console.log(some);
}
// foo, baz, res
for(let some in b) {
  console.log(some);
}
// 0, 1, 2

for(let some of a) {
  console.log(some);
}
// next() => ({ value: x, done: false })
// error a is not iterable

for(let some of b) {
  console.log(some);
}
// 'kool', 'botz', 'testz'

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
// 1
// 2
// baz
// 6
// 4
// 3

// puedes completar el codigo para que fileReader tenga este comportamiento?
const fileReader = Promise.resolve('some');
const fileReader = (async () => 'some')();

async function getData() {
  const data = await fileReader
  console.log(data, 'content')
}
getData();

fileReader.then((data) => console.log(data, 'content'))

// let var const
// let no hace hoisting
// const no hace hoisting
// var si hace hoisting

const a = { foo: 'bar'};
a.foo = 'zome';

// puedes completar la implementacion de la clase Foo?
class Foo {
  constructor() {
    this.count = 0;
  }

  add(num) {
    this.count += num;
    return this;
  }

  getTotal() {
    return this.count;
  }
}

const foo = new Foo();

foo.add(1).add(2).add(3).add(4).getTotal();// should return 10

// Punto extra!
// puedes escribir una funcion que tenga este comportamiento ?
function sum(...nums) {
  if (nums.length === 1) {
    return sum.bind(null, ...nums);
  }
  return nums[0] + nums[1]
}
sum(3)(5) // 8
sum(3,5) // 8

const sum = (a,b) => {
  if(b) {
    return a + b;
  }

  return (c) => a + c;
};


//////// 5. Unit testing ////////

// Podrías definir qué es un Unit Test?? Has utilizado Unit Tests en tu trabajo??

// Qué frameworks de Unit Tests conoces??

// Sabes qué diferencias existen entre un mock y un stub?

// Por qué una prueba unitaria debe ejecutarse de forma aislada?

// Conoces sobre Shallow Render??


//////// 6. React ////////
// sabes que es el vitualDOM?
// es uan representacion en memoria del DOM que usa react para optimizar los cambios que hace en el DOM. Lo que hace es comparar el estado actual del virtual DOM con el DOM y decide si debe actualizar el DOM. 

// sabes que es el lifecycle de React? Puedes describirlo?
// fases
// mounting => constructor, render, componentDidMount
// updating => componentDidUpdate
// unmounting => componentWillUnmount

// qué diferencia hay entre estos??
class Component extends React.Component {
  ...

  render() {
    return (<div>Hi</div>);
  }
}// class component

class Component extends React.PureComponent {
  ...
  componentDidUpdate() {

  }

  render() {
    return (<div>Hi</div>);
  }
} // class component
// pureComponent implementa un metodo del ciclo de vida que hace una comparacion de los props para evitar re-renderizar el componente si los props son iguales a los que recibio.

const Component = () => {
  return (<div>Hi</div>);
} // componente funcional
// Hooks
// Es una 
// que consideras que es un hook? con cuales has trabajado??
// es logica/funcionalidad que se puede agregar a los componentes funcionales de React
// useState, useEffect, useContext, useRef, useCallback & useMemo, useImperativeHandle

// cuantas veces se imprime el valor de a?
const Component = ({ a }) => {
  useEffect(() => {
    console.log(a);
  });

  return (<div>Hi</div>);
};

// Puedes describir que es un HOC?

// es un patron para aumentar la funcionalidad de los componentes. Recibe como parametro el componente que se quiere "mejorar" y retorna un componente con la nueva funcionalidad.

// Has trabajado con Context en React?
// Sirve para compartir estado entre los componentes dentro de una jerarquia.

// Que papel cumple el Provider al usar Context en React?
// Es el HOC que "envuelve" la jerarquia y provee los valores del contexto.
// y el Consumer?
// es el que obtiene los valores del provider.

// Sabes para que se sirven los refs en React? 
// son usados para obtener referencias a elementos del DOM (boton, input, etc.).

// portals: 
// permite montar un componente react por fuera del nodo en el que se instancia la app React. 

// suspense: 
// cambia la forma en que se renderizan los componentes en el DOM. 

//////// 7. Redux ////////

// Puedes describir el patron arquitectonico que sigue redux?
// objeto global de estado, es inmutable, usa reducers (funciones) que se encargan de mutar el estado. Los reducers reciben el estado actual y una accion y con base a la accion, retornan un nuevo estado. las acciones modifican el state mediante una funcion dispatch.
// Flux

// Puedes describir los conceptos base de redux?
// state, reducers, acciones, dispatch
// Que usas para conectar redux con un componente React?
// HOC -> connect react-redux

// Hooks -> useSelector, useDispatch

// Sabes que es un middleware?
// redux-thunks, rdux-sagas, 
// redux-observables -> RxJS
//////// 8. HTML ////////

// sabes que significa "Semantic HTML"?
// usar etiquetas o elementos adecuados para el tipo de contenido: nav para menus, sections para secciones, usar apropiadamente las etiquetas h. 
// article, footer, section. aside

// sabes como se implementa a11y (Accesibilidad)?? 
// usando roles, atributos aria, contraste de color, manejo de estilos apropiados para la focalización de los elementos. recomendaciones de w3c para a11s.

//////// 9. CSS ////////
// flexbox: es una caracteristica que busca facilitar la distribucion de los elementos en el DOM. 
// flex-grow? // que tanto espacio va a ocupar el elemento dentro del contenedor.
// flex-shrink: // lo contrario a flex-grow
// flex-direction: row - column

// grid: es una distribucion de filas x columnas con tamaños, gaps. 

// preprocesadores
// SaSS
// puedes describir como se comportan estos selectores CSS?
.div {
  color: cyan;

  &:hover {
    color: red
  }
}
// div con texto cyan, y hover rojo.
//////// 10. Node.js ////////

// Qué es Node.js??

// Qué librerias nativas de Node.js has utilizado??

// Cómo manejas variables de entorno y secretos para usarlos en la ejecución de tu programa Node.js?

// Express.js

// middleware

// Qué diferencia existe entre un path  y un query param??

//////// 10. Algoritmia ////////

/*
John trabaja en una tienda de medias, y tiene un enrome monton de medias que debe emparejar para 
venderlos. Dado un arreglo de enteros que representan el color de cada media, determine cuantos pares de medias del mismo color hay.

Por ejmplo, hay 7 medias con colores 1,2,3 socks=[1,2,1,2,1,3,2]. Hay un par de color 1 y un par de color 2. Hay tres medias "nonas"
(sin par) de cada color. Por lo tanto, el número de pares es 2.
*/
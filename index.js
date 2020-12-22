//////// 1. Fundamentos ////////

// qué  de programación conoces?
// OOP => C# -> es una abstraccion de elementos que permiten modelar los objetos del negocio. 
// abstraccion, encapsulamiento, polimorfismo y herencia.

// FP 
// basado en funciones, de forma secuencial sin implicar que sea bloqueante.
// 
// monads, funciones puras, functores.

// por qué es mejor componer objetos en lugar de herencia clasica?
// se pueden reutilizar sin necesidad de re-escribir codigo, se puede proteger debido al encapsulamiento.


//////// 2. Generalidades ////////

// Sabes que es una REST API??? Conoces los niveles de madurez de una RESTful API?
// es una app a la cual se le envia una peticion y entrega una respuesta (XML-JSON). 

// HATEOAS -> 

// Sabes que diferencia hay entre localStorage y sessionStorage?
// session: por la sesion. se pierde al cerrar el browser
// local: permanece hasta que se borre programaticamente.

// Sabes que es CORS?
// cross origin -> permite acceder a los recursos de otra URL. se requiere configurar desde el servicio. 

// Cómo aseguras que tu API solo sea utilizada por un usuario verificado?
// sesiones 

// Sabes que es un patron de diseño? Conoces alguno?
// son patrones que permiten organizar las funcionalidades de cierta forma para facilitar el desarrollo.



//////// 3. NPM ////////

// Conoces que es NPM? que comandos conoces? has escuchado de npm link? npm pack?
// Node package manager, permite administrar los difernetes paquetes de Node.
// npm i
// npm run -> npm run build -> npm run lint

// sabes que diferencia hay entre 1.2.3, ~1.2.3 y ^1.2.3 al instalar dependencias?
// major.minor.patch
// ~ 1.2.x
// ^ 1.x.x
// dependencies y devDependencies???
// 
// peer dependencies??


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

color1.print();// yellow
color2.print();// red

// cual es la salida de este código 
var b; // undefined
function a() {
  console.log("a");
}
a(); // a 
b(); // error // b is not a function
b = function() {
  console.log("b");
}

// cual es la salida de este object.hi()??
let object = {
  foo: 'baz',
  bar: 'some',
  hi: function() {
    console.log(`Hi, ${this.foo} ${this.bar}`)
  }
};

object.hi();// Hi undefined undefined

// cual es la salida de estos ciclos?
const a = { foo: 'bar', baz: 'yell', res: 'bal'};
const b = ['kool', 'botz', 'tezt'];

for(let some in a) {
  console.log(some);
}// foo, baz, res
foo: 'bar'
baz: 'yell'
res: 'bal'

for(let some in b) {
  console.log(some);
}// 0, 1, 2
'kool' 
'botz' 
'tezt'

// next() => ({ done: true, value: 'X' })
for(let some of a) {
  console.log(some);
} // a is not iterable
'bar'
'yell'
'bal'

for(let some of b) {
  console.log(some);
} // kool, botz, tezt


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

1,2,baz,6,4,3

// puedes completar el codigo para que fileReader tenga este comportamiento?
// Promise.resolve('some');
const fileReader = new Promise((resolve, error)=>
   resolve('some')
);

const fileReader = async function fileReader2(){
  

}

// const fileReader = (async () => 'some')();
  

fileReader.then((data) => console.log(data, 'content')); // some, content

// puedes completar la implementacion de la clase Foo?
class Foo {
  constructor() {
    this.value = 0
  }
  add(increment){
    this.value+=increment;

    return this;
  }

  getTotal() {
    console.log(this.value);
  }
}

const foo = new Foo();

foo.add(1).add(2).add(3).add(4).getTotal();// should return 10

// Punto extra!
// puedes escribir una funcion que tenga este comportamiento ?
sum(3)(5) // 8
sum(3,5) // 8


//////// 5. Unit testing ////////

// Podrías definir qué es un Unit Test?? Has utilizado Unit Tests en tu trabajo??
// es un mecanismo para probar una unidad o componente especifico, para verificar el comportamiento esperado.
// Qué frameworks de Unit Tests conoces??
// Jest -> enzyme
// Sabes qué diferencias existen entre un mock y un stub?
// 
// Por qué una prueba unitaria debe ejecutarse de forma aislada?
// evitar modificaciones no esperadas.
// poder oprobar la funcionalidad sin tener todos los componentes.
// Conoces sobre Shallow Render??
// se guarda en una variable el elemento, y en la prueba

//////// 6. React ////////
// sabes que es el vitualDOM?
// es la representacion del DOM que maneja react para manejar los cambios con respecto al dom real y poder especificar los cambios a realizar.
// sabes que es el lifecycle de React? Puedes describirlo?
// son las diferentes etapas o momentos en los que esta el componente\
// mount
// update
// unmount

// qué diferencia hay entre estos??
class Component extends React.Component {
  ...

  render() {
    return (<div>Hi</div>);
  }
} // class component

class Component extends React.PureComponent {
  ...

  componentDidMount() {}

  componentDidUpdate() {}
  render() {
    return (<div>Hi</div>);
  }
} // class component

const Component = () => {
  return (<div>Hi</div>);
} // functional component
// Hooks

// que consideras que es un hook? con cuales has trabajado??
// son elementos que permiten que los func. components puedan tener acceso al lifecycle de los class components. Permiten extender la funcionalidad del mismo componente.

// useState
// useEffect
// useMemo
// useCallback

// cuantas veces se imprime el valor de a?
const Component = ({ a }) => {
  useEffect(() => {
    console.log(a); //
  }, []); // 1

  return (<div>Hi</div>);
};

// Puedes describir que es un HOC?
// 

// Has trabajado con Context en React?
// Context sirve para evitar el propDrilling

// Que papel cumple el Provider al usar Context en React?
// provee los valores

// y el Consumer?
// usa

// Sabes para que se sirven los refs en React? 
//


// portals: 
// 

// suspense: 
// 

//////// 7. Redux ////////

// Puedes describir el patron arquitectonico que sigue redux?
// redux permite el manejo de los estados de la app a traves de 4 elementos: view, action, reducer, storage. el view lanza acciones que procesa el reducer y van al storage para almacenar el nuevo objeto, 

// Puedes describir los conceptos base de redux?

// Que usas para conectar redux con un componente React?

// useDispatch() -> 
// useSelector(fn) -> useState

// connect(mapStateToProps, mapDispatchToProps)(Component)


// Sabes que es un middleware?
// elementos intermedio entre dos components. 

//////// 8. CSS ////////
// flexbox: 
// flex-grow? flex-direction
// direction -> hacia donde se va a orientar los lementos en el grid.
// grid

// preprocesadores
// Sass & less
// puedes describir como se comportan estos selectores CSS?
.div {
  color: cyan;  
}

.div:hover {
  color: red;
}

// 
<p class="foo" id="bar" style="{ background-color: red; }">

p{
  background-color: blue !importantcd ;
}

.foo {
  background-color: yellow;
}

#bar {
  background-color: cyan;
}
// HTML
// HTML Semantico
// que las etiquetas describen el elemento en el que se van a utilizar (header, footer, article, paragraph)
// aside

// a11s
// i18n



//////// 9. Node.js ////////

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
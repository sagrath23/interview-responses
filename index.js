//////// 1. Fundamentos ////////

// qué paradigmas  de programación conoces?
// OOP: Herencia, Encapsulamiento, Abstraccion// Polimorfismo
// FP: se descarta OOP, desarrollo basado en funciones.

// por qué es mejor componer objetos en lugar de herencia clasica?
// Herencia se usa para no repetir codigo (compartir codigo entre componentes). 


//////// 2. Generalidades ////////

// Sabes que es una REST API??? Conoces los niveles de madurez de una RESTful API?
// es un protocolo para realizar peticion de datos (cliente server) usando metodos HTTP (GET, POST, PUT, DELETE, PATCH)

// Sabes que diferencia hay entre localStorage y sessionStorage?
// ambos almacenan data en el browser.
// session: se borra si se cierra el tab.
// local: se debe hacer clear de la data. 

// Sabes que es CORS?
// Cross Origin Resource Sharing: aumenta la seguridad de las peticiones. audita que se tengan permisos para consumir un recurso.

// Cómo aseguras que tu API solo sea utilizada por un usuario verificado?
// Tokens. JWT.

// Sabes que es un patron de diseño? Conoces alguno?
// Son soluciones a problemas comunes
// creacionales -> singleton
// estructurales -> prototypes.
// de comportamiento -> observer

//////// 3. NPM ////////

// Conoces que es NPM? que comandos conoces? has escuchado de npm link? npm pack?
// manejador de paquetes de Node.js, gestiona las libs de nuestros proyectos. 
// npm i, npm cache clean, npm audit, npm audit fix
// npm publish

// sabes que diferencia hay entre 1.2.3, ~1.2.3 y ^1.2.3 al instalar dependencias?
// 1.2.3
// ~ -> 1.2.x
// ^ -> 1.x.x

// dependencies y devDependencies???
//devDep -> solo desarrollo: webpack 
//dep: parafuncionar.

// peer dependencies??
// son dependencias necesarias para el setup del proyecto.

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
a();
function a() {
  console.log("a");
}
b();
var b = function() {
  console.log("b");
}
// a error

// cual es la salida de este object.hi()??
let object = {
  foo: 'baz',
  bar: 'some',
  hi: function(){
    console.log(`Hi, ${this.foo} ${this.bar}`)
  }
};

object.hi(); // hi, undefined undefined

// cual es la salida de estos ciclos?
const a = { foo: 'bar', baz: 'yell', res: 'bal'};
const b = ['kool', 'botz', 'tezt'];

for(let some in a) {
  console.log(some);
}
// foo // baz res

for(let some in b) {
  console.log(some);
}
// baz // 0, 1, 2

// next() => ({ done: true/false, value: 'X' })
for(let some of a) {
  console.log(some);
}
// res
// a is not iterable

for(let some of b) {
  console.log(some);
} //
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
})();
console.log(a);

//1 //2 //baz //6  //4 // 3


// puedes completar el codigo para que fileReader tenga este comportamiento?
const fileReader = fetch('url');

const fileREader = async() => {
  let res = await mehtod();

  return res;
}

const fileReader = new Promise((resolved, reject) => { resolved(66)})

fileReader.then((data) => console.log(data, 'content')); // some, content

// puedes completar la implementacion de la clase Foo?
class Foo {
  constructor(value) {
    this.value = value; 
  }

  add(num){
     this.value += num;
     return this;
  }

  getTotal(){
    console.log(this.value);
  }
}

const foo = new Foo();
// 1.add(2)
foo.add(1).add(2).add(3).add(4).getTotal();// should return 10

// Punto extra!
// puedes escribir una funcion que tenga este comportamiento ?
sum(3)(5) // 8
sum(3,5) // 8


//////// 5. Unit testing ////////

// Podrías definir qué es un Unit Test?? Has utilizado Unit Tests en tu trabajo??
// si, se realiza una funcion que va a probar un aspecto especifico de la funcion.
 
// Qué frameworks de Unit Tests conoces??
//Jest, @testing-library, karma, cypress (e2e).

// Sabes qué diferencias existen entre un mock y un stub?
// mock -> simular respuestas / estructuras de datos para el test.
// Por qué una prueba unitaria debe ejecutarse de forma aislada?

// Conoces sobre Shallow Render??
// simular el DOM, se crea una sombra de ese componente para testearlo. 

//////// 6. React ////////
// sabes que es el vitualDOM?
// es una version del DOM "light", sirve para reconciliar los cambios y solo cambiar esa parte.

// sabes que es el lifecycle de React? Puedes describirlo?
// mounting
// updating
// unmounting

// qué diferencia hay entre estos??
class Component extends React.Component {
  ...

  render() {
    return (<div>Hi</div>);
  }
}// class components
// HOC
class Component extends React.PureComponent {
  ...

  render() {
    return (<div>Hi</div>);
  }
}

const Component = () => {
  return (<div>Hi</div>);
}// functional component
// Hooks

// que consideras que es un hook? con cuales has trabajado??
// es un "gancho" a las funciones para integrarlas en componentes funcionales
// useState
// useContext
// useReducer
// useMemo
// useEffect
// cuantas veces se imprime el valor de a?
const Component = ({ a }) => {
  useEffect(() => {
    console.log(a);
  }, []);

  return (<div>Hi</div>);
};

// Puedes describir que es un HOC?
// es usado para manejar la logica de los componentes hijos, permite reutilizar funciones.
// Has trabajado con Context en React?
// si, para temas de auth.
// Que papel cumple el Provider al usar Context en React?
// 
// y el Consumer?

// Sabes para que se sirven los refs en React? 
// respuesta de react para manipulas elementos del DOM.
// portals: 
// crear modales: crear lementos fuera del elemento de la app.
// suspense: 
// lazy loading de components.

//////// 7. Redux ////////

// Puedes describir el patron arquitectonico que sigue redux?
// redux se basa en observer. Single Source of Truth -> Store. Reducers, Actions & Types. se despachan acciones que hacen que los reducers retornen un nuevo estado. inmutabilidad.
// Puedes describir los conceptos base de redux?

// Que usas para conectar redux con un componente React?
// connect 
// Sabes que es un middleware?
// se encarga de interceptar la comunicacion entre dos puntos/
// redux-thunks. 

//////// 8. CSS ////////
// flexbox: es una API de CSS para hacer layouts
// flex-grow? flex-direction
// flex-direction -> alineacion column, row
// flex-grow:  relacion de size 
// grid: ayuda tambien para hcer estructuras mas complejas. crea grillas de filas y columnas y brinda las opciones para operar con ellas. 

// preprocesadores
// SaSS, Less & Stylus
// puedes describir como se comportan estos 
// selectores CSS?
// top-down
//  

.div {
  color: cyan;

  &:hover {
    color: red
  }
}

// HTML
// HTML Semantico
// HTML5 -> mejoarar la interpretacion del HTML para el browser
// aside, header, footer, nav

// a11y
// AAA -> contrastes con CSS, subtitulos. Se manjean aria-labels -> marcado adicional para ayudar a screen reader, se marca el orden de navegacion para tabIndex.


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
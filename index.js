//////// 1. Fundamentos ////////

// qué  de programación conoces?
// OOP: Herencia, polimorfismo, encapsulamiento y abstraccion.
// SOLID: principios para construir software 
// Single Resposibility
// Open/Close
// Liskov
// Interface Segregation
// Dependency Injection

// Funcional: React incorpora ciertas ideas de FP
// inmutabilidad, pure functions.
// por qué es mejor componer objetos en lugar de herencia clasica?
// crecimiento de los components, que expande el arbol de herencia, mientras que si tengo un componente isolado, lo pueod reutilizar en diferentes secciones.
// Herencia
class Shinobi{
  shadowCloneJutsu() {
    console.log('Kage Bunshin no Jutsu!');
  }
}

class Chunin extends Shinobi {
  fireballJutsu() {
    console.log('Katon Goukakyuu no Jutsu!');
  }
}

class Genin extends Chunin {
  soilWallJutsu() {
    console.log('Doton: Doryūheki!');
  }
}

const naruto = new Genin();
const sasuke = new Genin();

naruto.fireballJutsu(); // ???
sasuke.shadowCloneJutsu(); // ???

// Composicion
const shadowCloneJutsu =  () => ({
  shadowCloneJutsu: () => console.log('Kage Bunshin no Jutsu!')
});

const fireballJutsu =  () => ({
  fireballJutsu: () => console.log('Katon Goukakyuu no Jutsu!')
});

const soilWallJutsu =  () => ({
  soilWallJutsu: () => console.log('Doton: Doryūheki!')
});

const rasengan =  () => ({
  rasengan: () => console.log('Rasengan!!!')
});

const chidori =  () => ({
  chidori: () => console.log('Chidori')
});

const naruto = {
  ...shadowCloneJutsu(),
  ...rasengan()
};
const sasuke = {
  ...fireballJutsu(),
  ...chidori()
};

naruto.rasengan(); // ???
sasuke.chidori(); // ???


//////// 2. Generalidades ////////

// Sabes que es una REST API??? Conoces los niveles de madurez de una RESTful API?
// interfaz para construir una app usando REST
// HATEOAS
// Sabes que diferencia hay entre localStorage y sessionStorage?
// session: se borra cuando se cierra el tab
// local: es persistente, general al browser
// Sabes que es CORS?
// Mecanismo para verificar origines de las peticiones. 
// Cómo aseguras que tu API solo sea utilizada por un usuario verificado?
// Auth: JWT
// Sabes que es un patron de diseño? Conoces alguno?
// maneras estandar de resolver problemas comunes
// creacionales: singleton, fabric, builder
// estructurales: pattern
// behavioral: specification, Strategy

//////// 3. NPM ////////

// Conoces que es NPM? que comandos conoces? has escuchado de npm link? npm pack?
// manager de paquetes:
// npm i, npm run build
// sabes que diferencia hay entre 1.2.3, ~1.2.3 y ^1.2.3 al instalar dependencias?
// 1.2.3: especifica
// ^1.2.3: 2.1.0?
// ~
// dependencies y devDependencies???
// devDependencies: solo para desarrollo
// dependencies: dependencias en general
// peer dependencies??
// son dependencias para indicar dependencias de librerias para poder funcionar. 

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

color1.print();
color2.print();
// yellow
// red

// cual es la salida de este código 
var b
function a() {
  console.log("a");
}
a();

b();
b = function() {
  console.log("b");
}
// a
// b
// b is not a function

// cual es la salida de este object.hi()??
let object = {
  foo: 'baz',
  bar: 'some',
  hi: () => {
    console.log(`Hi, ${this.foo} ${this.bar}`)
  }
};

object.hi();

// Hi, baz some
// Hi, undefined undefined

// cual es la salida de estos ciclos?
const a = { foo: 'bar', baz: 'yell', res: 'bal'};
const b = ['kool', 'botz', 'tezt'];

for(let some in a) {
  console.log(some);
}
// OK
//foo, baz, res

for(let some in b) {
  console.log(some);
}
// OK
//0, 1, 2

for(let some of a) {
  console.log(some);
}
// error a is not iterable
// 'bar', 'yell', 'bal'

for(let some of b) {
  console.log(some);
}
// OK
 //'kool', 'botz', 'tezt'

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

// 1, 2, 'baz', 6, 4, 3

// puedes completar el codigo para que fileReader tenga este comportamiento?
const fileReader = new Promise((resolve, reject) => resolve('some'));

fileReader.then((data) => console.log(data, 'content')); // some, content

// puedes completar la implementacion de la clase Foo?
class Foo {
  constructor() {
    this.number = 0;
  }

  add = (n) => { 
    this.number = this.number + n;
    return this;
  }

  getTotal = () => {
    return this.number;
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
// es una prueba que permite probar una unidad (componente). cada prueba es independiente para un componente.
// unit tests evitan regresion
// Qué frameworks de Unit Tests conoces??
// Jest 
// Sabes qué diferencias existen entre un mock y un stub?
// stub tiene informacion fija, mientras que un mock esta orientado a falsear una implementación de forma conveniente para probar algo.
// Por qué una prueba unitaria debe ejecutarse de forma aislada?
// cada capa deberia tener su propia prueba.
// Conoces sobre Shallow Render??
// enzyme 
// tiene que ver con el renderizado 

//////// 6. React ////////
// sabes que es el vitualDOM?
// es una representación en memoria para poder hacer el proceso de renderizado mas eficiente, ya que manipular el dom real es costoso. El proceso se llama reconciliacion.
// sabes que es el lifecycle de React? Puedes describirlo?
// ciclo que siguen los componentes en el proceso de renderizacion
// montado, actualizacion y desmontado.
// qué diferencia hay entre estos??
class Component extends React.Component {
  ...
  componentDidUpdate
  
  componentDidMount

  render() {
    return (<div>Hi</div>);
  }
}

class Component extends React.PureComponent {
  ...

  render() {
    return (<div>Hi</div>);
  }
}

const Component = () => {
  return (<div>Hi</div>);
}
// functional -> only props
// Hooks
// No

// que consideras que es un hook? con cuales has trabajado??

// cuantas veces se imprime el valor de a?
const Component = ({ a }) => {
  useEffect(() => {
    console.log(a);
  });

  return (<div>Hi</div>);
};

// Puedes describir que es un HOC?
// son componentes que facilitan la reutilización de components. 

// Has trabajado con Context en React?
// No
// Que papel cumple el Provider al usar Context en React?

// y el Consumer?

// Sabes para que se sirven los refs en React? 
// referencia elementos como div o input. 
// portals: 

// suspense: 


//////// 7. Redux ////////

// Puedes describir el patron arquitectonico que sigue redux?
// flux: observer modificado. single source of truth, unidireccional.

// Puedes describir los conceptos base de redux?
// reducers, actions, dispatcher & store, views
// reducer: atrapan las acciones a partir del tipo y modifican el state que corresponda.
// Que usas para conectar redux con un componente React?
// react-redux with HOC connect
// Sabes que es un middleware?
// agrega funcionalidad intermedia

//redux-thunks: intercepta acciones para agregar operaciones intermedias.
//////// 8. CSS ////////
// flexbox:
//  
// flex-grow? flex-direction

// grid

// preprocesadores
// SaSS -> reducir la estaticidad de CSS incorporando variables, etc.
// puedes describir como se comportan estos selectores CSS?
.div {
  color: cyan;

  &:hover {
    color: red;
  }
}

// 
!important;
div {}
.class {}
#id {}

<div class="class" id="id" style="" />

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
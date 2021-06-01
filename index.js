//////// 1. Generalidades ////////

// Sabes que es una REST API??? Conoces los niveles de madurez de una RESTful API?
// es la que tiene la minima funcionalidad que la hace rest.  

// Sabes que diferencia hay entre localStorage y sessionStorage?
// session sol odisponible para la sesion, expira cuando se termina la sesion.
// local: persiste

// Sabes que es CORS?
// son los datos que estan en un origen distinto al que estoy manejando.

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

color1.print(); //cyan // yellow 
color2.print(); //purple // red

// cual es la salida de este código 
a();
function a() {
  console.log("a");
}
b();
var b = function() {
  console.log("b");
}

// a
// undefined // b is not a function

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

object.hi(); // hi, Batsy & Robin. // Hi, undefined & undefined

// cual es la salida de estos ciclos?
const a = { foo: 'bar', baz: 'yell', res: 'bal'};
const b = ['kool', 'botz', 'tezt'];

for(let some in a) {
  console.log(some);
}
//foo/baz/res

for(let some in b) {
  console.log(some);
}
//0,1,2

// next: () => ({ value: 'x', done: true })
for(let some of a) {
  console.log(some);
}
// // a is not iterable

for(let some of b) {
 console.log(some); 
}//kool/botz

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
1
2
baz
6
4
bar// 3

// que diferencia hay entre let, var y const
// 

// puedes completar el codigo para que fileReader tenga este comportamiento?
const fileReader = new Promise(resolve) => {
  resolve({data: "data"})
}

fileReader.then((data) => console.log(data, 'content')); // some, content

// puedes completar la implementacion de la clase Foo?
class Foo {
  constructor() {
    this.total = 0;
  }

  add(value){
    this.total = this.total + value;

    return this;
  }
  
  getTotal(){
    return this.total;
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
// es una de las implementaciones de react para no tener que modificar el dom real para hacer un cambio. mejora el performance. 

// sabes que es el lifecycle de React? Puedes describirlo?
// son los eventos que suceden cuando se monta o desmonta el componente. 
// mounting
// updating
// unmounting

// qué diferencia hay entre estos??
class Component extends React.Component {
  render() {
    return (<div>Hi</div>);
  }
} // class component

class Component extends React.PureComponent {
  shouldComponentUpdate() {

  }
  render() {
    return (<div>Hi</div>);
  }
}

const Component = () => {
  return (<div>Hi</div>);
}// functional component

// Hooks

// que consideras que es un hook? con cuales has trabajado??
// son funciones pre-definidas o custom que tienen un comportamiento especifico. Normalmente las de react te permiten emular el funcionamiento  del lifecycle

// useEffect
// useState
// useContext
// useRef
//
// useMemo
// useCallback

// cuantas veces se imprime el valor de a?
const Component = ({ a }) => {
  useEffect(() => {
    console.log(a);
  });

  return (<div>Hi</div>);
}; // 1 // while true

// Puedes describir que es un HOC?
// es un componente que devuelve otro componente sin mutarlo, se usa para reutilizacion de componentes.

// Has trabajado con Context en React?
// Si, 

// Que papel cumple el Provider al usar Context en React?
// sirve para indicarle al componente de donde tomar los valores 

// y el Consumer?
// 
// useContext

// Sabes para que se sirven los refs en React? 
// son referencias para tener acceso a algun elemento del codigo. si necesito obtener el focus de un input uso ref.

// has trabajado con portals? 
// 

// has trabajado con suspense?? sabes para que sirve el fallback?? 
// 

//////// 7. Redux ////////

// Puedes describir el patron arquitectonico que sigue redux?
// flux

// Puedes describir los conceptos base de redux?
// un estado centralizado inmutable, ejecutas acciones, disparas reducer que retorna un nuevo state y reemplaza el anterior en el store. 

// Que usas para conectar redux con un componente React?
// connect
// // useSelector & useDispatch

// Sabes que es un middleware?
// una funcion que permite modificar un request y pasarlo a otra funcion encadenada.
//
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
// si, jest + enzyme 

// Qué frameworks de Unit Tests conoces??
// jest + enzyme
// nightwatch / cucumber

// Que ventajas ofrecen las pruebas unitarias en el proceso de desarrollo de software?
// se puede asegurar el comportamiento del componente, mantenerlo aislado para detectar cambios o errores en el componente.

// Por qué una prueba unitaria debe ejecutarse de forma aislada?
// es importante porque se pueden encontrar errores facilmente si no se tienen interacciones con otros componentes

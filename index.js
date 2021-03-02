//////// 1. Generalidades ////////

// Sabes que es una REST API??? Conoces los niveles de madurez de una RESTful API?
// Es una forma en que varios software se pueden comunicar o sincronizar entre ellos, es como una especie de modelo en el que los software se pueden comunicar, usando tipos de data como por ejemplo JSON.

// Sabes que diferencia hay entre localStorage y sessionStorage?
// localStorage: info guardada en el browser, tipo cache. 
// sessionStorage: info guardada por sesion. 

// Sabes que es CORS?
// no permitir que ocurra algo con la pagina. 

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
color2.print(); // not reasigned const // red

// cual es la salida de este código 
function a() {
  console.log("a");
}
var b; // undefined
a(); // 'error' // a
b(); // 'b' // error: b is not a function
b = function() {
  console.log("b");
}

// cual es la salida de este object.hi()??
const foo = 'Ren';
const bar = 'Stimpy';
this.foo = 'X';
this.bar = 'Y';
let object = {
  foo: 'Batsy',
  bar: 'Robin',
  hi: () => {
    console.log(`Hi, ${this.foo} & ${this.bar}`)
  }
};

object.hi(); // Hi, Batsy & Robin
// Hi, undefined & undefined

// cual es la salida de estos ciclos?
const a = { foo: 'bar', baz: 'yell', res: 'bal'};
const b = ['kool', 'botz', 'tezt'];

for(let some in a) {
  console.log(some);
  a[some];
}// foo, baz, res
// foo: 'bar'
// baz: 'yell'
// res; 'bal'

for(let some in b) {
  console.log(some);
}// 0, 1, 2
// undefined
// undefined
// undefined
// undefined

for(let some of a) {
  console.log(some);
}// a is not iterable
// [{foo: bar} {baz: yell} { res: bal}]

for(let some of b) {
 console.log(some); 
}
//kool
//botz
// tezt

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
4
tezt
bar
// 1, 2, baz, 6, 4, 3
// IIFE 

// que diferencia hay entre let, var y const
// let: permite reasignar referencias.
// const: no permite reasignar referencias.
// var -> es5

// puedes completar el codigo para que fileReader tenga este comportamiento?
const fileReader = new Promise((resolver, reject) => {
      resolver();
    });

fileReader.then((data) => console.log(data, 'content'));

const fileReader =  async function() {
  const a = new Promise((resolver, reject) => {
      resolver();
    });
  const b = await a;
  return b;
};
fileReader().then((data) => console.log(data, 'content'));

const fileReader = (async () => 'some')();


 // some, content

// puedes completar la implementacion de la clase Foo?
class Foo {
  constructor() {
    let value = 0;
  }
  this.add = (x) => {
    return x + value;
  };
  function getTotal() {
    console.log()
  }
    
  }

}

class Foo {
  constructor() {
    this.value = 0;
  }

  add = (value) => {
    this.value += value;

    return this;
  } 

  getTotal = () => this.value;
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
// es una copia del DOM, que react usa para poder actualizar los compos que han cambiado. Permite que React haga actualizaciones en el realDOM. 

// sabes que es el lifecycle de React? Puedes describirlo?
// es el ciclo de vida del componente, 
//se divide en tres partes
// mount: inicializa el componente y lo renderiza
// update: cambia el estado, react lo actualiza en el virtualDOM.
// unmount: cierre del ciclo de vida, eliminacion del componente si se debe quitar del DOM

// qué diferencia hay entre estos??
class Component extends React.Component {
  ...

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
} // no permite que se hagan cambios en el componente, estatico.

const Component = () => {
  return (<div>Hi</div>);
}// functional component

// Hooks


// que consideras que es un hook? con cuales has trabajado??

// sirve para enganchar los estado del componente. Evita tener que usar clases para componentes. 

// useEffect
// useState

// useMemo
// useContext

// cuantas veces se imprime el valor de a?
const Component = ({ a }) => {
  useEffect(() => {
    console.log(a);
  }, [a]);

  return (<div>Hi</div>);
};

// Puedes describir que es un HOC?
// es muy usado con closures. 

// Has trabajado con Context en React?
// es compartir un estado de un componente para todos los demas. 

// Que papel cumple el Provider al usar Context en React?

// y el Consumer?

// Sabes para que se sirven los refs en React? 
// es una referencia para usar un nodo del DOM.

// has trabajado con portals? 
// 

// has trabajado con suspense?? sabes para que sirve el fallback?? 

//////// 7. Redux ////////

// Puedes describir el patron arquitectonico que sigue redux?

// Puedes describir los conceptos base de redux?

// Que usas para conectar redux con un componente React?

// Sabes que es un middleware?

//////// 8. Fundamentos ////////

// OOP?
// polimorfismo, abstraccion, encapsulamiento y herencia.
// abstraccion: se basa en extraer los metodos o caracteristicas del objeto para usarlos en la ejecycion del programa

// Imperative programming?

// FP?
// se basa en programar a base de funciones puras (que siempre dan el mismo resultado). 
// no se recomienda la mutabilidad, usar mejor copias.

// reactive Programming?

// por qué es mejor componer objetos en lugar de herencia clasica?


//////// 9. Principios de diseño ////////

// SOLID
// clean code, se trata de principios para mejorar el codigo: no encargar muchas funcionalidades en una sola clase, que sea una app facilmente modificable, mantenible.

// DRY
// 

// Dependency Injection / IoC


//////// 10. Unit testing ////////

// Podrías definir qué es un Unit Test?? Has utilizado Unit Tests en tu trabajo??
// es probar ciertas funcionalidades de nuestra aplicacion. se enfoca en comportamientos especificos dentro de la app. 

// Qué frameworks de Unit Tests conoces??
// unit test (python), pytest

// Que ventajas ofrecen las pruebas unitarias en el proceso de desarrollo de software?
// 

// Por qué una prueba unitaria debe ejecutarse de forma aislada?

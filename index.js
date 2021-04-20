//////// 1. Generalidades ////////

// Sabes que es una REST API??? Conoces los niveles de madurez de una RESTful API?
// es una metodologia para integrar el backend con el front, se crean rutas y se van llamando con AJAX.  

// Sabes que diferencia hay entre localStorage y sessionStorage?
// session: se borra al borrar el tab.
// local: queda guardado. 

// Sabes que es CORS?
// Cross origin resource sharing
// si tienes el front y el back en dominios diferentes, el browser va a notificar que no se pueden consumir recursos de otro dominio. 

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

color1.print(); //yellow
color2.print();//red

// cual es la salida de este código 
function a() {
  console.log("a");
}
var b; // undefined
a();//a
console.log(b);// undefined
b();//b //b is not a function
b = function() {
  console.log("b");
}

// let, var, const
// let y var son lo mismo dentro de funciones
// var hace hoisting, let y const no hacen hoisting
// const es una constante, si se asigna un valor no se puede cambiar el valor. 

// cual es la salida de este object.hi()??
const foo = 'Ren';
const bar = 'Stimpy'
this.foo = 'Wanda';
this.bar = 'Vision';
let object = {
  foo: 'Batsy',
  bar: 'Robin',
  hi: function() {
    console.log(`Hi, ${this.foo} & ${this.bar}`)
  }
};

object.hi();//Hi, Batsy & Robin // Hi, undefined & undefined

// cual es la salida de estos ciclos?
const a = { foo: 'bar', baz: 'yell', res: 'bal'};
const b = ['kool', 'botz', 'tezt'];

for(let some in a) {
  console.log(some);
  a[some];// values of a
}
//bar yell bal
// foo, baz, res
for(let some in b) {
  console.log(some);
}
//kool botz tezt
// 0, 1, 2
// next = () => ({ value: 'x', done: true })
for(let some of a) {
  console.log(some);
}
//foo baz res
// a is not iterable
for(let some of b) {
 console.log(some); 
}
//0 1 2
// 'kool', 'botz', 'tezt'
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

// puedes completar el codigo para que fileReader tenga este comportamiento?
const fileReader = new Promise((resolve,reject)=>{
  const callback = fetch('https://localhost/api');

  callback.then((data) => { resolve(data) }).catch((error) => {reject(error)});
});

fileReader.then((data) => console.log(data, 'content')); // some, content

// puedes completar la implementacion de la clase Foo?
class Foo {
  constructor() {
    this.value = 0
  }

  add(addValue) {
    this.value = this.value + addValue

    return this;
  }

  getTotal() {
    return this.value
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
// 
// sabes que es el lifecycle de React? Puedes describirlo?
// render
// mounting -> constructor -> render()
// update -> state o props -> 
// unmounting -> verificar si se tiene que sacar el compo del DOM.
// qué diferencia hay entre estos??
class Component extends React.Component {
  ...

  render() {
    return (<div>Hi</div>);
  }
} // class component

class Component extends React.PureComponent {
  ...
  componentShouldUpdate() {

  }
  render() {
    return (<div>Hi</div>);
  }
} // pure component

const Component = () => {
  return (<div>Hi</div>);
} // functional component

// Hooks

// que consideras que es un hook? con cuales has trabajado??
// 
// useState, useEffect, useContext, useRef, useCallback, useMemo, useReducer

// cuantas veces se imprime el valor de a?
const Component = ({ a }) => {
  useEffect(() => {
    console.log(a);
  });

  return (<div>Hi</div>);
}; // while true

// Puedes describir que es un HOC?
// es una funcion que retorna un componente, sirve para encapsular funcionalidades (render props)

// Has trabajado con Context en React?
// en vez de pasar props entre componentes anidados, se crea un espacio compartido para poner estos valores
// Que papel cumple el Provider al usar Context en React?
// es el quew se encarga de poner lo valores
// y el Consumer?
// es el que toma el valor del context
// Sabes para que se sirven los refs en React? 
// similar a JQuery, sirve para modificar el DOM. te da acceso al elemento del DOM.
// has trabajado con portals? 
// 
// has trabajado con suspense?? sabes para que sirve el fallback?? 
// es para hacer un lazy loading de components.

//////// 7. Redux ////////

// Puedes describir el patron arquitectonico que sigue redux?
// Observer/Subscriber 
// flux -> 
// Puedes describir los conceptos base de redux?
// acciones, dispatch, reducers (slices), store
// Que usas para conectar redux con un componente React?
// react-redux hooks: useDispatch, useSelector
// connect -> mapStateToProps, mapDispatchToProps 
// Sabes que es un middleware?
// sirve para hacer un procesamiento antes de un paso del flujo de redux. 
// redux-thunks

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


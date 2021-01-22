//////// 1. Generalidades ////////

// Sabes que es una REST API??? Conoces los niveles de madurez de una RESTful API?
// es el mecanismo para obtener información

// HATEOAS

// Sabes que diferencia hay entre localStorage y sessionStorage?
// session: por tab y por dominio
// local: por dominio

// Sabes que es CORS?
// los permisos para llamar las API. 

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
a(); // a
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

object.hi(); //Hi, Batsy & Robin
// hi, undefined undefined

// cual es la salida de estos ciclos?
const a = { foo: 'bar', baz: 'yell', res: 'bal'};
const b = ['kool', 'botz', 'tezt'];

for(let some in a) {
  console.log(some); // foo, baz, res
}

for(let some in b) {
  console.log(some); //0,1,2
}
// next ()
for(let some of a) {
  console.log(some); //bra,yell, bal
} // error

for(let some of b) {
  console.log(some); // kool, botz, tezt
}

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
// 1,2,baz,6,4,3

// puedes completar el codigo para que fileReader tenga este comportamiento?
const fileReader = new Promise((r) => r('some'));

fileReader.then((data) => console.log(data, 'content')); // some, content

const result = await fileReader
console.log(result, 'content')

// puedes completar la implementacion de la clase Foo?
class Foo {
  total = 0;
  constructor() {}
  add(n){
    total +=n;
    return this;
  }
  getTotal(){
    return total;
  }
}

const foo = new Foo();

foo.add(1).add(2).add(3).add(4).getTotal();// should return 10

// Punto extra!
// puedes escribir una funcion que tenga este comportamiento ?
sum(3)(5) // 8
function sum(a,b){
  if(b) return a+b;
  return (b)=> a+b;
}

sum(3,5) // 8



//////// 3. NPM ////////

// Conoces que es NPM? que comandos conoces? has escuchado de npm link? npm pack?
// start, npm run, npm i, uninstall
// sabes que diferencia hay entre 1.2.3, ~1.2.3 y ^1.2.3 al instalar dependencias?
// 1.2.3 exacta
// ~ 1.a.x x la version mas alta
// ^ 1.2.x 
// dependencies y devDependencies???
// dependencies: lo que necesita para funcionar
// devDependencies: lo que necesitas para desarrollar
// peer dependencies??
// 

//////// 4. HTML ////////

// qué entiendes por HTML semántico??
// descripcion de los tags html que hace referencia a su uso.
// form, header, table, footer, 
// section, aside
// conoces sobre accesibilidad en ambientes web??
//  
// qué es el DOM?? 
// es el contenido del sitio.

//////// 5. CSS ////////
// flexbox: si
// flex-grow? flex-direction
// flex-grow: size de los elementos hijos
// flex-direction: row o column
// grid

// preprocesadores
// less, sass, 
// postCSS
// puedes describir como se comportan estos selectores CSS?
.div {
  color: cyan;

  &:hover {
    color: red
  }
}

//////// 6. React ////////
// sabes que es el vitualDOM?
// es la forma de React validar que cambio con respecto al DOM real de la app.
// 
// sabes que es el lifecycle de React? Puedes describirlo?
// 
// qué diferencia hay entre estos??
class Component extends React.Component {
  ...

  render() {
    return (<div>Hi</div>);
  }
}

class Component extends React.PureComponent {
  ...
  componentShouldUpdate() {...}
  componentDidMount() {...}  
  render() {
    return (<div>Hi</div>);
  }
}
// stateful components - class components

const Component = () => {
  return (<div>Hi</div>);
} // stateless component - functional component
// Hooks

// que consideras que es un hook? con cuales has trabajado??
// 
// useState -> estadon dentro de comp. funcionales
// useEffect -> componentShouldUpdate
// useMemo
// useDispatch
// useContext
// useRef

// cuantas veces se imprime el valor de a?
const Component = ({ a }) => {
  useEffect(() => {
    console.log(a);
  });

  return (<div>Hi</div>);
};

// Puedes describir que es un HOC?
// connect(mapStateToProps, mapDispatchToProps)(Component);
const Component = ({ ...mapStateToProps, ...mapDispatchToProps});

@connect(mapDispatchToProps, mapDispatchToProps)
Component
//

// Has trabajado con Context en React?
// pasar info entre componentes nesteado en profundidad.

// Que papel cumple el Provider al usar Context en React?

// y el Consumer?

// Sabes para que se sirven los refs en React? 

// portals: 

// suspense: 


//////// 7. Redux ////////

// Puedes describir el patron arquitectonico que sigue redux?
// tienes un estado inicial, que vas alterando para reflejar el estado actual de la informacion
// 
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

// Qué frameworks de Unit Tests conoces??

// Que ventajas ofrecen las pruebas unitarias en el proceso de desarrollo de software?

// Por qué una prueba unitaria debe ejecutarse de forma aislada?


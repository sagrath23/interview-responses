//////// 1. Fundamentos ////////

// qué  de programación conoces?

// por qué es mejor componer objetos en lugar de herencia clasica?
// Herencia
class Shinobi extends Human {
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

// Sabes que diferencia hay entre localStorage y sessionStorage?

// Sabes que es CORS?

// Cómo aseguras que tu API solo sea utilizada por un usuario verificado?

// Sabes que es un patron de diseño? Conoces alguno?


//////// 3. NPM ////////

// Conoces que es NPM? que comandos conoces? has escuchado de npm link? npm pack?

// sabes que diferencia hay entre 1.2.3, ~1.2.3 y ^1.2.3 al instalar dependencias?

// dependencies y devDependencies???

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

color1.print();
color2.print();

// cual es la salida de este código 
a();
function a() {
  console.log("a");
}
b();
var b = function() {
  console.log("b");
}

// cual es la salida de este object.hi()??
let object = {
  foo: 'baz',
  bar: 'some',
  hi: () => {
    console.log(`Hi, ${this.foo} ${this.bar}`)
  }
};

object.hi();

// cual es la salida de estos ciclos?
const a = { foo: 'bar', baz: 'yell', res: 'bal'};
const b = ['kool', 'botz', 'tezt'];

for(let some in a) {
  console.log(some);
}

for(let some in b) {
  console.log(some);
}

for(let some of a) {
  console.log(some);
}

for(let some of b) {
  console.log(some);
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


//////// 5. Unit testing ////////

// Podrías definir qué es un Unit Test?? Has utilizado Unit Tests en tu trabajo??

// Qué frameworks de Unit Tests conoces??

// Sabes qué diferencias existen entre un mock y un stub?

// Por qué una prueba unitaria debe ejecutarse de forma aislada?

// Conoces sobre Shallow Render??


//////// 6. React ////////
// sabes que es el vitualDOM?

// sabes que es el lifecycle de React? Puedes describirlo?

// qué diferencia hay entre estos??
class Component extends React.Component {
  ...

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
// Hooks

// que consideras que es un hook? con cuales has trabajado??

// cuantas veces se imprime el valor de a?
const Component = ({ a }) => {
  useEffect(() => {
    console.log(a);
  });

  return (<div>Hi</div>);
};

// Puedes describir que es un HOC?

// Has trabajado con Context en React?

// Que papel cumple el Provider al usar Context en React?

// y el Consumer?

// Sabes para que se sirven los refs en React? 

// portals: 

// suspense: 


//////// 7. Redux ////////

// Puedes describir el patron arquitectonico que sigue redux?

// Puedes describir los conceptos base de redux?

// Que usas para conectar redux con un componente React?

// Sabes que es un middleware?


//////// 8. CSS ////////
// flexbox: 
// flex-grow? flex-direction

// grid

// preprocesadores

// puedes describir como se comportan estos selectores CSS?
.div {
  color: cyan;

  &:hover {
    color: red
  }
}

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
//Tipos de datos primitivos --> const o let
typeof true; // boolean
typeof "cadena de caracteres"; // string
typeof undefined; // undefined
typeof Symbol(); // symbol
typeof 2n; // bigInt
typeof 1; // number
true === true;
"hola" === "hola";
1 === 1;
({ a: 1 }) === { a: 1 };
["hola"] === ["hola"];

const obj1 = { a: 1, b: 2 };
const obj2 = obj1;
obj1.a = 3;
obj2.a;

const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2[0] = 5;
arr1[0];

typeof null; // object*
//Tipos de datos objectos --> const
typeof ["hola"]; // array --> Object
typeof {}; // objetos literales --> Object
const set = new Set(); // Map()
typeof set; // Set -->object

//Funcion --> const para las arrow functions
typeof function () {};

//Funciones declaradas
function sumaDeclarada(a, b) {
  return a + b;
}

const sumaArrow = (a, b) => {
  return a + b;
};

const sumaArrowCorta = (a, b) => a + b;

// Desestructuración

const persona = {
  nombre: "Juan",
  apellido: "perez",
  edad: 30,
  direccion: {
    calle: "Avenida siempreviva 123",
    ciudad: "Springfield",
    pais: "USA",
  },
};
// En los objetos NO importa el orden
const {
  nombre = "John",
  apellido = "Doe",
  edad,
  imagen = "../img/anonimo.jpg",
  direccion: { calle },
} = persona;
nombre;
edad;
imagen;
apellido;
calle;
// En los array SI importa el orden
const frutas = ["manzana", "pera", "uva"];

const [primerFruta, segundaFruta] = frutas;
primerFruta;
segundaFruta;

function obtenerDatosPersona() {
  return {
    name: "maria",
    age: 22,
  };
}

const { name, age } = obtenerDatosPersona();
name;
age;
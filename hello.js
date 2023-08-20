// ------------variable-------------------

// let nombre = "Juan";
// const edad = 25;

// Uso de variables
// console.log(`Hola, soy ${nombre} y tengo ${edad} años.`);


// ------- Declaración de una función----------------------
function saludar(nombre){
    return `¡Hola, ${nombre} `;
  }
  
  // Llamada a la función
  const mensajeSaludo = saludar("Ana");
  console.log(mensajeSaludo);




// funcion con 2 variables
  function saludar2(nombre, edad){
    return `¡Hola, ${nombre} `;
  }
  
  // Llamada a la función
  const mensajeSaludo2 = saludar("Ana, 11");
  console.log(mensajeSaludo2);
// ----------------------------------------------------------

function sumar(a, b) {
    return a * b;
  }
  
  const resultadoMult = sumar(5, 3);
  console.log(resultadoMult);

  function esMayorDeEdad(edad) {
    if (edad >= 18) {
      return true;
    } else {
      return false;
    }
  }
  
  const edadUsuario = 20;
  const esMayor = esMayorDeEdad(edadUsuario);
  console.log(esMayor); // Imprimirá true
  
  
  // Función con argumentos predeterminados:
    function saludar(nombre = "Invitado") {
    console.log(`¡Hola, ${nombre}!`);
  }
  saludar(); // Imprimirá "¡Hola, Invitado!"
  saludar("Juan"); // Imprimirá "¡Hola, Juan!"
  

  // Función anónima (expresión de función):
  
  const multiplicar = function(a, b) {
    return a * b;
  };
  
  const resultadoMultiplicacion = multiplicar(4, 6);
  console.log(resultadoMultiplicacion); // Imprimirá 24
 
//  Función flecha (arrow function):
  
  const dividir = (a, b) => a / b;
  
  const resultadoDivision = dividir(10, 2);
  console.log(resultadoDivision); // Imprimirá 5

  
  //

  function sumarArray(numeros) {
    let suma = 0;
    for (const numero of numeros) {
      suma += numero;
    }
    return suma;
  }
  
  const numeros = [2, 4, 6, 8];
  const sumaTotal = sumarArray(numeros);
  console.log(sumaTotal); // Imprimirá 20
//---------------------------------------------------------------------------------------

// condicional
  const hora = 14;

if (hora < 12) {
  console.log("Buenos días");
} else if (hora < 18) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches");
}


// Bucle for
for (let i = 0; i < 5; i++) {
    console.log(`Iteración ${i}`);
  }
  
  // Bucle while
  let contador = 0;
  while (contador < 3) {
    console.log(`Contador: ${contador}`);
    contador++;
  }
  
  

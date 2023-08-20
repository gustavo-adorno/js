// ------------variable-------------------

// let nombre = "Juan";
// const edad = 25;

// Uso de variables
// console.log(`Hola, soy ${nombre} y tengo ${edad} años.`);


// ------- Declaración de una función----------------------
function saludar(nombre) {
    return `¡Hola, ${nombre}!`;
  }
  
  // Llamada a la función
  const mensajeSaludo = saludar("Ana");
  console.log(mensajeSaludo);


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
  
  

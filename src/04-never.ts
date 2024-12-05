// Never Type: Funciones que nunca terminan
// Sirve para situaciones donde algo no debe o no puede ocurrir jamás.

// Función que nunca termina = never
const withOutEnd = () => {
  while (true) {
    console.log('Nunca parar de aprender');
  }
}

// Funcion que falla = never
const fail = (message: string) => {
  throw new Error(message)
}

const example = (input: unknown) => {
  if(typeof input === 'string') {
    return 'es un string'
    // Como verificar si un dato se un array
  } else if (Array.isArray(input)) {
    return 'es un array'
  }
  return fail('not match')
}

console.log(example('hola'));
console.log(example([1, 2, 3]));
console.log(example(123)); // Hasta aqui se detiene el programa
console.log(example('Hola despues del fail'));





// Sobrecarga de funciones.

// Nico => [N, i, c, o] => string => string[]
// [N, i, c, o] => Nico = string[] => string


// Sobrecarga: se realiza el tipado de la función, no se realiza ninguna lógica.
export function parseString(input: string): string[]
export function parseString(input: string[]): string

export function parseString(input: unknown): unknown{
  if (Array.isArray(input)) {
    return input.join('') // devuelve un string
  } else if (typeof input === 'string') {
    return input.split('') // devuelve un array[]
  }
}

const rtaArray = parseString('RAUL')
// Ya no se tiene que realizar niguna validación porque ya ts infiere el tipo de dato que va a retornar gracias a la sobrecarga de funciones
rtaArray.reverse()

// if(Array.isArray(rtaArray)) {
//   rtaArray.reverse()
// }
const rtaString = parseString(['r', 'a', 'u', 'l'])
rtaString.toLowerCase()
// if(typeof rtaString === 'string') {
//   rtaString.toLowerCase()
// }
console.log('Array:', rtaArray);
console.log('String', rtaString);

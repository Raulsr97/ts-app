// Sobrecarga de funciones.

// Nico => [N, i, c, o] => string => string[]
// [N, i, c, o] => Nico = string[] => string

// La sobrecarga de funciones solo se puede utilizar con funciones que sean declaradas con la palabra reservada function.
function parseString(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join('') // devuelve un string
  } else {
    return input.split('') // devuelve un array[]
  }
}

const rtaArray = parseString('raul')
// Como la funcion puede retonar dos tipos de valores, ts no sabe con certeza el tipo de dato que va a retornar aunque nostros si sepamos cual es.
// En este caso no puede detectar que el valor retornado es un string y nos marca como error al querer usar un método propio de los string
rtaArray.reverse()
// Tiene que entrar a una validación que asegure el tipo de dato
if(Array.isArray(rtaArray)) {
  rtaArray.reverse()
}
const rtaString = parseString(['r', 'a', 'u', 'l'])
rtaString.toLowerCase()
if(typeof rtaString === 'string') {
  rtaString.toLowerCase()
}
console.log('Array:', rtaArray);
console.log('String', rtaString);


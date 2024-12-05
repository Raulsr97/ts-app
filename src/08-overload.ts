// Sobrecarga de funciones.

// Nico => [N, i, c, o] => string => string[]
// [N, i, c, o] => Nico = string[] => string

function parseString(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join() // devuelve un string
  } else {
    return input.split('') // devuelve un array[]
  }
}

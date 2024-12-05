// Array normal
let prices: (number | string)[] = [1, 2, 3, 4, 'fdsf']

// Tupla, con las tuplas podemos tipar que tipo de datos van a ir en cada posición del array y delimitar cual va a ser su longitud.
let user: [string, number, boolean]
user = ['raulsr', 27, true]

// desestructuración de una tupla
const [username, age] = user
console.log(username);
console.log(age);


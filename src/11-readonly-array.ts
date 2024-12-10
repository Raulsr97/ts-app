// Array de solo lectura no nos permite mutar el array de ninguna forma
const numbers: ReadonlyArray<number>= [1, 2, 3, 4, 5]

// Agrega un elemento al final
numbers.push(1)
// Elimina un elemento
numbers.pop()
// Agrega un elemento al inicio
numbers.unshift(12)

// Me permite utilizar métodos que no muten al array original(estos metodos crean un nuevo array a partir del original)
numbers.filter(() => {} )
numbers.reduce(() => 0)
numbers.map(() => {})




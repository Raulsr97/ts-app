export const createProduct = (
  id: string | number,
  stock?: number,
  // Los atributos opcionales deben ir al final, si no ts lo va a marcar como error.
  isNew?: boolean
) => {
  return {
    id,
    // Asignando un valor por defecto al atributo opcional
    stock: stock || 10,
    isNew: isNew || true
  }
}

// 0 === false
// '' === false
// false == false


const p1 = createProduct('r1', 20 , false)
console.log(p1);
const p2 = createProduct('r2')
console.log(p2);
// el 0 va a ser false y va a tomar como si no hubiera ningún parametro y false tambien lo va a tomar como si no hubiera ningún para metro y va a marcar true
const p3 = createProduct('r3', 0 , false)
console.log(p3)

// Valores por defecto

export const createProduct = (
  id: string | number,
  stock: number = 10,
  isNew: boolean = true
) => {
  return {
    id,
    stock,
    isNew
  }
}

const p1 = createProduct('r1', 20 , false)
console.log(p1);
const p2 = createProduct('r2')
console.log(p2);
const p3 = createProduct('r3', 0 , false)
console.log(p3)

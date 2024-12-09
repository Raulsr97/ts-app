type Sizes = 'S' | 'M' | 'L' | 'XL'
// type Product = {
//   id: string | number,
//   title: string,
//   createdAt: string,
//   stock: number,
//   size: Sizes
// }

// Las interfaces nos permiten crear moldes de objetos con sus respectivas propiedades y tipado

// Interfaces vs Type:
// Utilizamos type para definir principalmente tipos primitivos o directos, mientras que con interface definimos una estructura llave-valor de propiedades que describan lo que debe tener un objeto

// Las iterfaces se pueden facilmente extender(realizar herencia) mientras que con los type no, esto los hace mas escalables.

interface Product {
  id: string | number,
  title: string,
  createdAt: string,
  stock: number,
  size: Sizes
}

const product: Product[] = []

product.push({
  id: 'weqrt',
  title: 'T-shirt',
  createdAt: '13/11/97',
  stock: 13,
  size: 'M'}
)

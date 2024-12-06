type Sizes = 'S' | 'M' | 'L' | 'XL'
type Product = {
  id: string | number,
  title: string,
  createdAt: string,
  stock: number,
  size: Sizes
}

import faker from '@faker-js/faker'
import { addProduct } from "./products/product.service";

addProduct(
  {
  id: 'weqrt',
  title: 'T-shirt',
  createdAt: new Date(),
  updatedAt: new Date(),
  stock: 13,
  size: 'M',
  category: {
    id: 1234,
    name: 'dsfg',
    createdAt: new Date(),
    updatedAt: new Date()
  }
  }
)

import { Product } from "./product.model";
import { createProductDto } from "./product.dto";
import { faker } from "@faker-js/faker/.";

export const products: Product[] = []

export const addProduct = (data: createProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: faker.string.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  }
  products.push(newProduct)
  return newProduct
}

export const updateProduct = (id: string, changes: Product) => {

}

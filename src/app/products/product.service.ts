import { Product } from "./product.model";
import { createProductDto, findDto, updateDto } from "./product.dto";
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
                              // Obteniendo el tipado que tiene product en el atributo id
export const updateProduct = (id: Product['id'], changes: updateDto): Product => {
  const index = products.findIndex(item => item.id === id)
  const prevData = products[index]
  products[index] = {
    ...prevData,
    ...changes
  }
  return products[index]
}


export const findProducts = (dto: findDto): Product[] => {
  // No me permite hacer cambios porque configuramos el dto a solo lectura
  // dto.color = 'blue'
  // dto.tags.map()
  // code
  return products
}


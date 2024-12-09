import { faker } from '@faker-js/faker'
import { addProduct, products} from "./products/product.service";

for (let i = 0; i < 10; i++) {
  addProduct(
    {
    title: faker.commerce.product(),
    image: faker.image.url(),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    description: faker.commerce.productDescription(),
    stock: faker.number.int({min: 10, max: 100}),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(['Best Seller', 'New', 'Free Shipping', 'Limited Edition', 'Promo'],{min:1, max: 3}),
    categoryId: faker.string.uuid()
    }
  )
}

console.log(products);




import { Product } from "./product.model";

// Omit: Utility Type que te permite crear un nuevo tipo basado en uno existente pero omitiendo algunas de las propiedades del tipo original


// Omit<Le pasamos el tipo a trabajar, le pasamos los elementos a omitir>
// Se recomienda que todos los Dtos(Data Transfer Object) vayan en un archivo separado.
// se crea la interface para que herede el Dto
export interface createProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  // Solo necesitamos relacionar el id, no crearlo es por eso que solo enviamos el id para relacionarlo y no todo el objeto de la categoria.
  categoryId: string
}

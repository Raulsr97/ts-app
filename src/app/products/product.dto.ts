import { Product } from "./product.model";

// Omit: Utility Type que te permite crear un nuevo tipo basado en uno existente pero omitiendo algunas de las propiedades del tipo original


// Omit<Le pasamos el tipo a trabajar, le pasamos los elementos a omitir>
// Se recomienda que todos los Dtos(Data Transfer Object) vayan en un archivo separado.
// se crea la interface para que herede el Dto
export interface createProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  // Solo necesitamos relacionar el id, no crearlo es por eso que solo enviamos el id para relacionarlo y no todo el objeto de la categoria.
  categoryId: string
}

// Pick es lo contrario omit, yo eligo los campos que quiero que esten en mi interface

interface example extends Pick<Product, 'id' | 'createdAt'> {

}

// Partial pone todos los atributos como opcionales
// hacemos el partial de createProductDto porque esa interface ya trae omitidos los atributos que no se deben de modificar
export interface updateDto extends Partial<createProductDto> {

}

// Required deja todos los atributos como obligatorios

type example2 = Required<Product>

// Aplicandole readonly a un partial para que solo sea de busqueda sin la opcion de modificar elementos
export interface findDto extends Readonly<Partial<Omit<Product, 'tags'>>> {
  // El primer readonly restringe la reasignacion del array y la segunda restringe usar metodos que muten el array.
  readonly tags: ReadonlyArray<string>
}

// aplicar modo de solo lectura a todos los parámetros
// type example3 = Readonly<Product>

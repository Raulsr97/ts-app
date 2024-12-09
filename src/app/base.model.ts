export interface BaseModel {
  // Nos ayuda a que una varaible sea de solo lectura y no pueda ser modificada o sobreescrita.
  readonly id: string | number,
  createdAt: Date,
  updatedAt: Date
}

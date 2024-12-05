// Enum: Tipo de dato que nos permite crear un set de opciones
// No ayuda mantener un control del tipo de dato que se va ingresar
// Controla los errores de mejor manera porque solo puede utilizar los datos ya establecidos en el enum
enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer'
}

type User = {
  usename: string,
  role: ROLES
}

const raulUser: User = {
  usename:'raulsr',
  role: ROLES.ADMIN
}

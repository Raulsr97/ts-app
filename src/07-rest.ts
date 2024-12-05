// Parámetros rest: flexibilidad en los parámetros.
// Nos permiten mandar la cantidad de parametros que necsitemos en una función estos parámetros son guardados en un array.
import { User, ROLES } from "./01-enum";

const currentUser: User = {
  usename: 'raulsr',
  role: ROLES.ADMIN
}

export const checkAdminRole = () => {
  if(currentUser.role === ROLES.ADMIN) {
    return true
  }

  return false
}

let result = checkAdminRole()
console.log(result);
                        // rest params
export const checkRole = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true
  }
  return false
}

const rta = checkRole(ROLES.CUSTOMER, ROLES.SELLER, ROLES.ADMIN)
console.log('checkRole:', rta);

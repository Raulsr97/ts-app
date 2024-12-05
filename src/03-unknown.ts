// Con any perdemos los tipados que nos da ts
let anyVar: any
anyVar = 'fgdsg'
anyVar = []
anyVar = true
anyVar = 12312
// Podemos generar errores y ts no nos los va a señalar
let isNew: boolean = anyVar


//Unknown igual me permite una flexibilidad en el tipado pero me fuerza a hacer una verficación de tipos
let unknownVar: unknown
unknownVar = 'fgdsg'
unknownVar = []
unknownVar = true
unknownVar = 12312

// No me deja utilizar métodos sin verificar el tipo
unknownVar.doSomething()

if(typeof unknownVar === 'string') {
  unknownVar.toUpperCase()
}

if(typeof unknownVar === 'boolean') {
  let isNew2: boolean = unknownVar
}


const parse = (str: string): unknown => {
  return JSON.parse(str)
}


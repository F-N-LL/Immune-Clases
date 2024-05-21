# POO y TS
<style>
    code {
        font-family: 'hack', monospace;
    }
</style>
#### Objetivo de la Clase
En esta clase, los estudiantes aprenderán los fundamentos de la Programación Orientada a Objetos (POO) utilizando JavaScript. Luego, se introducirán a TypeScript para aprovechar características avanzadas como tipos e interfaces.

#### Parte 1: Introducción a POO con JavaScript 

Conceptos básicos de POO (clases, objetos, herencia, encapsulamiento y polimorfismo) utilizando una vajilla como ejemplo.

#### 1. **Clases y Objetos**

- **Clase**: Es una plantilla para crear objetos. Define las propiedades y métodos que tendrán los objetos.
- **Objeto**: Es una instancia de una clase. Es la representación concreta de la clase con valores específicos.

**Ejemplo:**
```javascript
// Definimos la clase Plato
class Plato {
    constructor(material, color, diametro) {
        this.material = material;
        this.color = color;
        this.diametro = diametro;
    }

    // Método para describir el plato
    describir() {
        console.log(`Este es un plato de ${this.material}, color ${this.color}, con un diámetro de ${this.diametro} cm.`);
    }
}

// Creamos un objeto de la clase Plato
const plato1 = new Plato('cerámica', 'blanco', 25);
plato1.describir(); // Este es un plato de cerámica, color blanco, con un diámetro de 25 cm.
```

#### 2. **Herencia**

- **Herencia**: Permite crear nuevas clases basadas en una clase existente. La nueva clase (subclase) hereda las propiedades y métodos de la clase existente (superclase).

**Ejemplo:**
```javascript
// Definimos la clase Taza que hereda de Plato
class Taza extends Plato {
    constructor(material, color, diametro, capacidad) {
        super(material, color, diametro); // Llamamos al constructor de la clase Plato
        this.capacidad = capacidad; // Nueva propiedad específica de Taza
    }

    // Método adicional para describir la capacidad de la taza
    describirCapacidad() {
        console.log(`Esta taza tiene una capacidad de ${this.capacidad} ml.`);
    }
}

// Creamos un objeto de la clase Taza
const taza1 = new Taza('vidrio', 'transparente', 10, 250);
taza1.describir(); // Este es un plato de vidrio, color transparente, con un diámetro de 10 cm.
taza1.describirCapacidad(); // Esta taza tiene una capacidad de 250 ml.
```

#### 3. **Encapsulamiento**

- **Encapsulamiento**: Consiste en restringir el acceso directo a algunas propiedades y métodos de un objeto. Esto se hace para proteger los datos y asegurar la integridad de los mismos.

**Ejemplo:**
```javascript
class Plato {
    // Propiedades privadas usando la convención de guión bajo
    constructor(material, color, diametro) {
        this._material = material;
        this._color = color;
        this._diametro = diametro;
    }

    // Métodos públicos para acceder y modificar las propiedades privadas
    get material() {
        return this._material;
    }

    set material(nuevoMaterial) {
        this._material = nuevoMaterial;
    }

    get color() {
        return this._color;
    }

    set color(nuevoColor) {
        this._color = nuevoColor;
    }

    get diametro() {
        return this._diametro;
    }

    set diametro(nuevoDiametro) {
        this._diametro = nuevoDiametro;
    }

    describir() {
        console.log(`Este es un plato de ${this._material}, color ${this._color}, con un diámetro de ${this._diametro} cm.`);
    }
}

// Creamos un objeto de la clase Plato
const plato2 = new Plato('plástico', 'rojo', 30);
plato2.describir(); // Este es un plato de plástico, color rojo, con un diámetro de 30 cm.
plato2.material = 'metal'; // Modificamos la propiedad usando el método set
plato2.describir(); // Este es un plato de metal, color rojo, con un diámetro de 30 cm.
```

#### 4. **Polimorfismo**

- **Polimorfismo**: Permite tratar objetos de diferentes clases de manera uniforme. Los métodos en diferentes clases pueden tener el mismo nombre pero comportarse de manera distinta.

**Ejemplo:**
```javascript
class Plato {
    constructor(material, color, diametro) {
        this.material = material;
        this.color = color;
        this.diametro = diametro;
    }

    describir() {
        console.log(`Este es un plato de ${this.material}, color ${this.color}, con un diámetro de ${this.diametro} cm.`);
    }
}

class Taza extends Plato {
    constructor(material, color, diametro, capacidad) {
        super(material, color, diametro);
        this.capacidad = capacidad;
    }

    describir() {
        console.log(`Esta es una taza de ${this.material}, color ${this.color}, con un diámetro de ${this.diametro} cm y una capacidad de ${this.capacidad} ml.`);
    }
}

// Creamos objetos de ambas clases
const plato3 = new Plato('porcelana', 'azul', 20);
const taza2 = new Taza('cerámica', 'verde', 8, 300);

// Usamos el método describir en ambos objetos
plato3.describir(); // Este es un plato de porcelana, color azul, con un diámetro de 20 cm.
taza2.describir(); // Esta es una taza de cerámica, color verde, con un diámetro de 8 cm y una capacidad de 300 ml.
```

### Resumen de los Conceptos

- **Clase**: Plantilla o modelo para crear objetos.
- **Objeto**: Instancia de una clase.
- **Herencia**: Crear nuevas clases basadas en clases existentes.
- **Encapsulamiento**: Restringir el acceso directo a las propiedades y métodos de un objeto.
- **Polimorfismo**: Permite usar un método en diferentes clases, donde cada clase tiene su propia implementación de ese método.

Estos ejemplos utilizan una vajilla para ilustrar los conceptos básicos de la Programación Orientada a Objetos de manera sencilla y práctica.

----
----

### ((Continúa con la agenda))

**3. Clases y Objetos en JavaScript**
   - Sintaxis básica de clases.
   - Crear una clase y un objeto.
   ```javascript
   class Persona {
       constructor(nombre, telefono) {
           this.nombre = nombre;
           this.telefono = telefono;
       }
       
       imprimirDetalles() {
           console.log(`Nombre: ${this.nombre}, Teléfono: ${this.telefono}`);
       }
   }

   const persona1 = new Persona('Juan', '123456789');
   persona1.imprimirDetalles();
   ```

4. Proyecto: Agenda Telefónica
   - **Objetivo**: Crear una aplicación básica de agenda telefónica utilizando clases.
   - **Pasos del proyecto**:
     1. **Definir la clase `Contacto`**:
        ```javascript
        class Contacto {
            constructor(nombre, telefono) {
                this.nombre = nombre;
                this.telefono = telefono;
            }

            imprimirContacto() {
                console.log(`Nombre: ${this.nombre}, Teléfono: ${this.telefono}`);
            }
        }
        ```
     2. **Definir la clase `Agenda`**:
        ```javascript
        class Agenda {
            constructor() {
                this.contactos = [];
            }

            agregarContacto(contacto) {
                this.contactos.push(contacto);
            }

            mostrarContactos() {
                this.contactos.forEach(contacto => contacto.imprimirContacto());
            }
        }
        ```
     3. **Interacción con la agenda**:
        ```javascript
        const agenda = new Agenda();
        const contacto1 = new Contacto('Ana', '987654321');
        agenda.agregarContacto(contacto1);
        agenda.mostrarContactos();
        ```
     4. **Implementar más funcionalidades** 
        - Buscar contacto.
        - Eliminar contacto.


## 2: Introducción a TypeScript 

1. Introducción a TypeScript
   - ¿Qué es TypeScript?
   - Ventajas de usar TypeScript sobre JavaScript.
   - Instalación y configuración básica.

**2. Tipos y Anotaciones de Tipo**
   - Tipos básicos: `string`, `number`, `boolean`, `array`, `tuple`, `enum`, `any`, `void`, `never`, `unknown`.
   - Sintaxis de anotación de tipos.
   ```typescript
   let nombre: string = 'Juan';
   let edad: number = 30;
   ```

**3. Reescribir la Agenda Telefónica en TypeScript**
   - **Objetivo**: Convertir la aplicación de agenda telefónica de JavaScript a TypeScript.
   - **Pasos del proyecto**:
     1. **Definir la clase `Contacto` con tipos**:
        ```typescript
        class Contacto {
            nombre: string;
            telefono: string;

            constructor(nombre: string, telefono: string) {
                this.nombre = nombre;
                this.telefono = telefono;
            }

            imprimirContacto(): void {
                console.log(`Nombre: ${this.nombre}, Teléfono: ${this.telefono}`);
            }
        }
        ```
     2. **Definir la clase `Agenda` con tipos**:
        ```typescript
        class Agenda {
            contactos: Contacto[] = [];

            agregarContacto(contacto: Contacto): void {
                this.contactos.push(contacto);
            }

            mostrarContactos(): void {
                this.contactos.forEach(contacto => contacto.imprimirContacto());
            }
        }
        ```
     3. **Interacción con la agenda**:
        ```typescript
        const agenda = new Agenda();
        const contacto1 = new Contacto('Ana', '987654321');
        agenda.agregarContacto(contacto1);
        agenda.mostrarContactos();
        ```

**4. Introducción a Interfaces**
   - ¿Qué es una interfaz?
   - Definir y usar interfaces.
   ```typescript
   interface IContacto {
       nombre: string;
       telefono: string;
       imprimirContacto(): void;
   }

   class Contacto implements IContacto {
       nombre: string;
       telefono: string;

       constructor(nombre: string, telefono: string) {
           this.nombre = nombre;
           this.telefono = telefono;
       }

       imprimirContacto(): void {
           console.log(`Nombre: ${this.nombre}, Teléfono: ${this.telefono}`);
       }
   }
   ```


### Problemas con el Uso de la Herencia en POO y Beneficios del Uso de TypeScript e Interfaces

#### Problemas con el Uso de la Herencia en POO

La herencia es una de las características más importantes de la Programación Orientada a Objetos, pero también puede presentar varios problemas:

1. **Herencia Múltiple**:
   - En muchos lenguajes de programación, la herencia múltiple (una clase derivada de más de una clase base) no está permitida, lo que puede limitar la flexibilidad del diseño.

2. **Fragilidad de la Base de Código**:
   - Los cambios en una clase base pueden tener efectos inesperados en todas las clases derivadas. Esto puede causar problemas de mantenimiento, especialmente en proyectos grandes.

3. **Complejidad**:
   - Las jerarquías de herencia profundas pueden hacer que el código sea difícil de entender y seguir. Es fácil perder el rastro de qué clase hereda de cuál y qué métodos y propiedades son heredados o sobrescritos.

4. **Rigidez**:
   - La herencia puede hacer que el código sea rígido y difícil de modificar. Si se necesita cambiar el comportamiento de una clase base, todas las clases derivadas pueden verse afectadas, lo que puede requerir cambios significativos en múltiples lugares.

5. **Problemas de Acoplamiento**:
   - La herencia crea un acoplamiento fuerte entre la clase base y las clases derivadas. Esto puede hacer que sea difícil cambiar una clase sin afectar a las otras.

#### Beneficios del Uso de TypeScript e Interfaces

TypeScript, un superconjunto tipado de JavaScript, aborda algunos de estos problemas y ofrece características adicionales que mejoran el diseño y la mantenibilidad del código. A continuación, se destacan algunos beneficios clave del uso de TypeScript e interfaces:

1. **Interfaces para Definir Contratos**:
   - Las interfaces permiten definir contratos (reglas internas a cumplir) para las clases sin imponer una jerarquía de herencia. Una interfaz define qué métodos y propiedades debe tener una clase sin preocuparse de cómo se implementan.

   **Ejemplo de Interfaz en TypeScript**:
   ```typescript
   interface IPlato {
       material: string;
       color: string;
       diametro: number;
       describir(): void;
   }

   class Plato implements IPlato {
       constructor(public material: string, public color: string, public diametro: number) {}

       describir(): void {
           console.log(`Este es un plato de ${this.material}, color ${this.color}, con un diámetro de ${this.diametro} cm.`);
       }
   }

   const plato: IPlato = new Plato('cerámica', 'blanco', 25);
   plato.describir(); // Este es un plato de cerámica, color blanco, con un diámetro de 25 cm.
   ```

2. **Tipado Estático**:
   - TypeScript proporciona tipado estático, lo que significa que los errores de tipo pueden detectarse en tiempo de compilación en lugar de en tiempo de ejecución. Esto ayuda a identificar errores más temprano en el ciclo de desarrollo.

3. **Mejor Refactorización**:
   - Con TypeScript, las herramientas de desarrollo pueden proporcionar una mejor refactorización y autocompletado gracias a la información de tipos. Esto hace que sea más fácil y seguro modificar el código.

4. **Composición sobre Herencia**:
   - En lugar de usar herencia, TypeScript fomenta el uso de la composición, donde los objetos se componen de otros objetos que implementan ciertas interfaces. Esto reduce el acoplamiento y mejora la flexibilidad.

   **Ejemplo de Composición**:
   ```typescript
   interface IUtensilio {
       usar(): void;
   }

   class Plato implements IUtensilio {
       constructor(public material: string, public color: string, public diametro: number) {}

       describir(): void {
           console.log(`Este es un plato de ${this.material}, color ${this.color}, con un diámetro de ${this.diametro} cm.`);
       }

       usar(): void {
           console.log('Usando el plato');
       }
   }

   class Taza implements IUtensilio {
       constructor(public material: string, public color: string, public capacidad: number) {}

       describir(): void {
           console.log(`Esta es una taza de ${this.material}, color ${this.color}, con una capacidad de ${this.capacidad} ml.`);
       }

       usar(): void {
           console.log('Usando la taza');
       }
   }

   // Función que acepta cualquier utensilio que implemente IUtensilio
   function usarUtensilio(utensilio: IUtensilio) {
       utensilio.usar();
   }

   const plato = new Plato('cerámica', 'blanco', 25);
   const taza = new Taza('vidrio', 'transparente', 300);

   usarUtensilio(plato); // Usando el plato
   usarUtensilio(taza);  // Usando la taza
   ```

5. **Claridad y Mantenibilidad**:
   - Al usar interfaces y composición, el diseño del código se vuelve más claro y fácil de mantener. Los desarrolladores pueden entender mejor cómo interactúan las diferentes partes del sistema.

### Resumen

- **Problemas con la Herencia en POO**: Herencia múltiple limitada, fragilidad del código, complejidad, rigidez y acoplamiento fuerte.
- **Beneficios de TypeScript e Interfaces**: Definición de contratos claros con interfaces, detección temprana de errores con tipado estático, mejor refactorización, fomento de la composición sobre la herencia, y mayor claridad y mantenibilidad del código.

Utilizando TypeScript y sus interfaces, podemos diseñar sistemas más flexibles y robustos que evitan muchos de los problemas asociados con la herencia en la Programación Orientada a Objetos.









### Materiales Adicionales
- Documentación oficial de TypeScript: [TypeScript Documentation](https://www.typescriptlang.org/docs/)

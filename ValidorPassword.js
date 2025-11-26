class ValidadorPassword {
    #password;

    constructor(password) {
        this.#password = password;
    }

    esValida() {
        // Regla 1: mínimo 8 caracteres
        if (this.#password.length < 8) {
            return false;
        }

        // Regla 2: al menos una mayúscula
        let tieneMayuscula = false;
        for (let c of this.#password) {
            if (c >= "A" && c <= "Z") {
                tieneMayuscula = true;
                break;
            }
        }
        if (!tieneMayuscula) {
            return false;
        }

        // Regla 3: al menos un número
        let tieneNumero = false;
        for (let c of this.#password) {
            if (c >= "0" && c <= "9") {
                tieneNumero = true;
                break;
            }
        }
        if (!tieneNumero) {
            return false;
        }

        return true;
    }
}

// Código de prueba
const v1 = new ValidadorPassword("clave123"); // Falla (sin mayúscula)
const v2 = new ValidadorPassword("ClaveSegura"); // Falla (sin número)
const v3 = new ValidadorPassword("Clave1"); // Falla (muy corta)
const v4 = new ValidadorPassword("ClaveSegura123"); // Éxito

console.log("'clave123' es válida:", v1.esValida()); // false
console.log("'ClaveSegura' es válida:", v2.esValida()); // false
console.log("'Clave1' es válida:", v3.esValida()); // false
console.log("'ClaveSegura123' es válida:", v4.esValida()); // true

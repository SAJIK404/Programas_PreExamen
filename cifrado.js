class CifradorCesar {
    #desplazamiento;

    constructor(desplazamiento) {
        this.#desplazamiento = desplazamiento;
    }

    cifrar(mensaje) {
        let resultado = "";

        for (let c of mensaje) {
            // Solo cifrar letras minúsculas a–z
            if (c >= "a" && c <= "z") {
                // Convertir a número 0–25
                let codigo = c.charCodeAt(0) - 97;

                // Aplicar desplazamiento con vuelta
                let cifrado = (codigo + this.#desplazamiento) % 26;

                // Convertir de regreso a letra
                resultado += String.fromCharCode(cifrado + 97);
            } else {
                // Caracteres que no son minúsculas se mantienen igual
                resultado += c;
            }
        }

        return resultado;
    }
}

// Código de prueba
const cifrador = new CifradorCesar(3);
const mensajeSecreto = cifrador.cifrar("hola mundo xyz");

console.log("Mensaje original: hola mundo xyz");
console.log("Mensaje cifrado:", mensajeSecreto); // krod pxqgr abc

class DataSet {
    #numeros;

    constructor(numeros) {
        this.#numeros = numeros;
    }

    getPromedio() {
        let suma = 0;
        for (let n of this.#numeros) {
            suma = suma + n;
        }
        return suma / this.#numeros.length;
    }

    getMaximo() {
        let max = this.#numeros[0];
        for (let n of this.#numeros) {
            if (n > max) {
                max = n;
            }
        }
        return max;
    }

    getMinimo() {
        let min = this.#numeros[0];
        for (let n of this.#numeros) {
            if (n < min) {
                min = n;
            }
        }
        return min;
    }
}

// Código de prueba
const misDatos = new DataSet([10, 20, 5, 15, 25]);
console.log("Promedio:", misDatos.getPromedio()); // 15
console.log("Máximo:", misDatos.getMaximo()); // 25
console.log("Mínimo:", misDatos.getMinimo()); // 5

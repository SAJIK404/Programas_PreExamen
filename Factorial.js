class CalculoFactorial {
    #numero;

    constructor(numero) {
        this.#numero = numero;
    }

    calcular() {
        if (this.#numero === 0) {
            return 1;
        }

        let resultado = 1;
        for (let i = this.#numero; i > 1; i--) {
            resultado = resultado * i;
        }
        return resultado;
    }
}

// Código de prueba
const fact5 = new CalculoFactorial(5);
console.log("Factorial de 5 es:", fact5.calcular()); // 120

const fact0 = new CalculoFactorial(0);
console.log("Factorial de 0 es:", fact0.calcular()); // 1

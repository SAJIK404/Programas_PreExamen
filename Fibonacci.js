class Fibonacci {
    generar(longitud) {
        if (longitud === 0) {
            return [];
        }

        if (longitud === 1) {
            return [0];
        }

        if (longitud === 2) {
            return [0, 1];
        }

        let resultado = [0, 1];
        for (let i = 2; i < longitud; i++) {
            let siguiente = resultado[i - 1] + resultado[i - 2];
            resultado.push(siguiente);
        }
        return resultado;
    }
}

// Código de prueba
const fibo = new Fibonacci();
console.log("Fibonacci(8):", fibo.generar(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log("Fibonacci(1):", fibo.generar(1)); // [0]
console.log("Fibonacci(2):", fibo.generar(2)); // [0, 1]

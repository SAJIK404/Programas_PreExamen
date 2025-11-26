class Temporizador {
    #segundosRestantes;

    constructor(segundosTotales) {
        this.#segundosRestantes = segundosTotales;
    }

    tick() {
        this.#segundosRestantes -= 1;
        console.log("Quedan " + this.#segundosRestantes);
    }

    haTerminado() {
        return this.#segundosRestantes <= 0;
    }
}

// Código de prueba
const miTemporizador = new Temporizador(3);
console.log("¿Ha terminado?", miTemporizador.haTerminado()); // false
miTemporizador.tick(); // Quedan 2
miTemporizador.tick(); // Quedan 1
console.log("¿Ha terminado?", miTemporizador.haTerminado()); // false
miTemporizador.tick(); // Quedan 0
console.log("¿Ha terminado?", miTemporizador.haTerminado()); // true

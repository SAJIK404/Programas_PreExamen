class Billetera {
    #cantidad;
    #moneda;

    constructor(cantidad, moneda) {
        this.#cantidad = cantidad;
        this.#moneda = moneda;
    }

    convertirA(nuevaMoneda, tasaDeCambio) {
        // cantidad * tasaDeCambio = cantidad convertida
        let nuevaCantidad = this.#cantidad * tasaDeCambio;

        // devolver una nueva billetera con la conversión
        return new Billetera(nuevaCantidad, nuevaMoneda);
    }
}

// Código de prueba
const miBilletera = new Billetera(1000, "MXN");

// Supongamos que 1 MXN = 0.058 USD
const billeteraUSD = miBilletera.convertirA("USD", 0.058);

console.log("Cantidad convertida:", billeteraUSD);

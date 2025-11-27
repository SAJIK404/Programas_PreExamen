class Billetera {
    #cantidad;
    #moneda;

    constructor(cantidad, moneda) {
        this.#cantidad = cantidad;
        this.#moneda = moneda;
    }

    convertirA(nuevaMoneda, tasaDeCambio) {
        const nuevaCantidad = this.#cantidad * tasaDeCambio;
        return new Billetera(nuevaCantidad, nuevaMoneda);
    }

    // Usando getters como en el programa Conversor
    getCantidad() {
        return this.#cantidad;
    }

    getMoneda() {
        return this.#moneda;
    }
}

const miBilletera = new Billetera(1000, "MXN");
const billeteraUSD = miBilletera.convertirA("USD", 0.058);

console.log(billeteraUSD.getCantidad(), billeteraUSD.getMoneda());

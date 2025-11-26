class ContadorSeguro {
  
  #valor = 0; 

  constructor() {}

  incrementar() {
    this.#valor += 1;
    console.log(`Valor incrementado a: ${this.#valor}`); 
  }
  
  decrementar() {
    this.#valor -= 1;
    console.log(`Valor decrementado a: ${this.#valor}`); 
  }
  
  getValor() {
    return this.#valor;
  }
}

const miContador = new ContadorSeguro();

miContador.incrementar();  
miContador.incrementar();  
miContador.decrementar();  

console.log("Valor final:", miContador.getValor()); 

// console.log(miContador.#valor); esto deberia dar error

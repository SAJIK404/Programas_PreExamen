class ContadorSeguro {
  
  #valor = 0; 

  constructor() {}

  incrementar() {
    this.#valor += 1;
    console.log("Valor incrementado a:" + this.#valor); 
  }
  
  decrementar() {
    this.#valor -= 1;
    console.log("Valor decrementado a:" + this.#valor); 
  }
  
  getValor() {
    return this.#valor;
  }
}

function ejecutarContador() {
  const contador = new ContadorSeguro(); 
  
  contador.incrementar();  
  contador.incrementar();  
  contador.decrementar();  
  
  console.log("Valor final con getValor(): " + contador.getValor()); 
}

ejecutarContador();

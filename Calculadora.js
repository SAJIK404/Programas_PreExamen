
class Calculadora{
  constructor(){

  }

  sumar(a,b){
    const res = a + b
    Logger.log(a + " + " + b + " = " + res)
  }

  restar(a,b){
    const res = a - b
    console.log(a + " - " + b + " = " + res)
  }

  multiplicar(a,b){
    const res = a * b
    console.log(a + " * " + b + " = " + res)
  }

  dividir(a,b){
    const res = a / b
    console.log(a + " / " + b + " = " + res)
  }

}

function programa(){
  const objeto1 = new Calculadora()
  const suma = objeto1.sumar(6,6)
  const resta = objeto1.restar(6,6)
  const multiplicar = objeto1.multiplicar(6,6)
  const dividir = objeto1.dividir(6,6)

}

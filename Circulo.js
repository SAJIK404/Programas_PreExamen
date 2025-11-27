

class Circulo{
  constructor(radio){
    this.radio = radio 
  }


  getArea(){
    var res = Math.PI * this.radio * this.radio
    console.log("El area del circulo con radio: " + this.radio + " es: " +  res.toFixed(2))
  }

  getPerimetro(){
    var res = 2 * Math.PI * this.radio
    console.log("El perimetro del circulo con radio: " + this.radio + " es: " +  res.toFixed(2))
  }

}

function my_function(){
  const miCirculo = new Circulo(10)
  const area = miCirculo.getArea()
  const perimetro = miCirculo.getPerimetro()

}

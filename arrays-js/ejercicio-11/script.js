function encontrarPalabraMasLarga(frase) {
    
    let palabras = frase.split(' ');
  
    let palabraMasLarga = '';
  
    for (let i = 0; i < palabras.length; i++) {
      if (palabras[i].length > palabraMasLarga.length) {
        palabraMasLarga = palabras[i];
      }
    }
  
    return palabraMasLarga;
  }
  
  
  let x = "hola alumnos del instituto";
  let resultado = encontrarPalabraMasLarga(x);
  console.log(resultado);
  
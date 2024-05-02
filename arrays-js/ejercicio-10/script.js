function capitalizarPrimerasLetras(cadena) {
    let palabras = cadena.split(' ');
  
    for (let i = 0; i < palabras.length; i++) {
      palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1).toLowerCase();
    }
  
    let resultado = palabras.join(' ');
  
    return resultado;
  }
  

  let x = "hola como estan";
  let resultado = capitalizarPrimerasLetras(x);
  console.log(resultado);
  
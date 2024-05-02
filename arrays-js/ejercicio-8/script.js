function invertirNumero(numero) {
    
    let numeroStr = numero.toString();

    let numeroInvertido = numeroStr.split('').reverse().join('');
  
    let resultado = parseInt(numeroInvertido, 10);
  
    return resultado;
  }

  let x = 10203;
  let resultado = invertirNumero(x);
  console.log(resultado);
  
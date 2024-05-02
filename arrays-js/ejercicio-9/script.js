function ordenarAlfabeticamente(cadena) {
    let caracteresValidos = cadena.replace(/[^a-zA-Z]/g, '');

    let caracteresArray = caracteresValidos.split('');
  
    caracteresArray.sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));
  
    let resultado = caracteresArray.join('');
  
    return resultado;
  }

  let x = 'hola alumnos';
  let resultado = ordenarAlfabeticamente(x);
  console.log(resultado);
  
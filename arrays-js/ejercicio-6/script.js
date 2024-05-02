
    function imprimirRepetidos(array) {
        let frecuencia = {};
      
        for (let i = 0; i < array.length; i++) {
          let elemento = array[i];
          frecuencia[elemento] = (frecuencia[elemento] || 0) + 1;
        }
        for (let key in frecuencia) {
          if (frecuencia[key] > 1) {
            console.log(`El elemento ${key} se repite ${frecuencia[key]} veces.`);
          }
        }
      }
      
      let miArray = [11, 22, 32, 41, 22, 32, 51];
      imprimirRepetidos(miArray);
      
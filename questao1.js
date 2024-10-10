function calculadora(n1, n2, operacao) {

    let resultado;
  
    if (operacao === 'soma') {
      resultado = n1 + n2;
    } else if (operacao === 'subtracao') {
      resultado = n1 - n2;
    } else if (operacao === 'multiplicacao') {
      resultado = n1 * n2;
    } else if (operacao === 'divisao') {
      if (n2 !== 0) {
        resultado = n1 / n2;
      } else {
        return "Erro: Divisão por zero não permitida.";
      }
    } else {
      return "Operação inválida.";
    }
  
    return resultado;
  }
  
  console.log(calculadora(17, 4, 'soma'));         
  console.log(calculadora(9, 2, 'subtracao'));    
  console.log(calculadora(8, 4, 'multiplicacao'));
  console.log(calculadora(30, 10, 'divisao'));      
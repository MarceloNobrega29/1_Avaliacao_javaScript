function verificarPalindromo(palavra) {
  
  palavra = palavra.toLowerCase().replace(/\s/g, '');
  let tamanho = palavra.length;
  
  for (let i = 0; i < tamanho / 2; i++) {
    if (palavra[i] !== palavra[tamanho - 1 - i]) {
      return `"${palavra}" não é um palíndromo.`;
    }
  }

  return `"${palavra}" é um palíndromo.`;
}

const verificarPalavra = prompt("Digite uma palavra para verificar se é um palíndromo ou não :");
console.log(verificarPalindromo(verificarPalavra));

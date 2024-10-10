let produtos = [
    { nome: "Bicicleta", preco: 750.00, quantidade: 3 },
    { nome: "Geladeira", preco: 3200.00, quantidade: 6 },
    { nome: "Microondas", preco: 510.00, quantidade: 5 }
];

function calcularValorEstoque(produtos) {
    let valorTotal = 0;

    for (let i = 0; i < produtos.length; i++) {
        valorTotal += produtos[i].preco * produtos[i].quantidade;
    }

    return valorTotal; 
}

let valorTotalEstoque = calcularValorEstoque(produtos);
console.log(`O valor do estoque é: R$ ${valorTotalEstoque.toFixed(2)}`);

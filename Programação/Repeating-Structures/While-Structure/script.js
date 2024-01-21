/*
    A estrutura de repetição While, é uma estrutura simples que repete um bloco de código enquanto a sua condição passada permanecer verdadeira, após a condição se tornar falsa, o bloco de código será encerrado e o fluxo do algoritmo seguirá em frente.

    sitaxe: 

    while(condição){
        bloco de código;
    }
*/

var i = 0;

while(i < 10){ 
    i++
    console.log(i)
}

// O que este código quer dizer é que enquanto (while) a váriavel i for menor que 10, ele irá incrementar mais um valor a váriavel i até que o valor de i seja 10, e cada incrementação de valor no i, irá ser printado no console qual seria o valor de i. Quando o valor de i chegar a 10, o bloco de código irá ser encerrado, consequentemente parando de printar na tela o valor que foi incrementado a i.
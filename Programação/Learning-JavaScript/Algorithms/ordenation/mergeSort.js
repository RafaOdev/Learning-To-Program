/*MERGE SORT*/

/*
    O merge sort é um algoritmo de ordenação por comparação do tipo dividir para conquistar, que utiliza basicamente o mesmo método que em uma busca binária. O algoritmo consiste em dividir o problema em subproblemas menores apartir de recursividade, e resolvê-los de forma independente e depois junta-los de forma ordenada, comparando cada elemento de cada subproblema. De forma simplificada, o algoritmo dividi a lista em várias listas até chegar em uma lista de um único elemento, e depois irá juntar essas listas de forma ordenada até chegar na lista original ordenada.

    EXEMPLO:

        dado um array [5, 3, 2, 4, 7, 1] o merge sort irá ordenar esse array da seguinte forma:

        - [5, 3, 2, 4, 7, 1] -> [5, 3, 2] e [4, 7, 1]
        - [5, 3, 2] e [4, 7, 1] -> [5, 3] e [2] e [4, 7] e [1]
        - [5, 3] e [2] e [4, 7] e [1] -> [5] e [3] e [2] e [4] e [7] e [1]

        O algoritmo irá dividir o array em subarrays, o que resulta em array de um único elemento ([5] [3] [2] [4] [7] [1]), e depois irá juntar esses arrays de forma ordenada, comparando cada elemento de cada subarray.

        [5] e [3] -> 5 > 3, então [3, 5]
        [2] e [4] -> 2 < 4, então [2, 4]
        [7] e [1] -> 7 > 1, então [1, 7]
        [3, 5] e [2, 4] -> 3 > 2, 3 < 4, 5 > 4, então [2, 3, 4, 5]
        [1, 7] e [2, 3, 4, 5] -> 1 < 7, 1 < 2, 1 < 3, 1 < 4, 1 < 5, 7 > 5, então [1, 2, 3, 4, 5, 7]

        Com o resultado final sendo [1, 2, 3, 4, 5, 7].
*/

let array = [5, 3, 2, 4, 7, 1]; // Para começar, será feito o array desordenado

function sort(array){ // Primeiramente, será criada a função sort que irá receber o array desordenado como parâmetro. Ela será a responsável por dividir o array até que o seu tamanho seja de apenas um elemento. Dentro da função, primeiramente será verificado se o array possui apenas um tamanho de 1, ou seja, se ele contém apenas um elemento. Caso seja de tamanho 1, o próprio array será retornado. Caso contrário, será criada uma variável chamada mid que irá dividir o array pela metade. Após isso, será criado dois subarrays chamados left e right, com left recebendo do tamanho 0 até o meio, e right recebendo do meio até o final. Após isso, será retornada a função merge que irá juntar e ordenar os subarrays left e right. Recebendo os mesmos como parâmetro.
    if(array.length === 1){ // Verifica se o array possui apenas um elemento
        return array; // Caso seja de tamanho 1, o próprio array é retornado
    }

    const mid = Math.floor(array.length / 2); // Variável mid que irá dividir o array pela metade
    const left = array.slice(0, mid); // Subarray left que irá receber do tamanho 0 até o meio
    const right = array.slice(mid); // Subarray right que irá receber do meio até o final

    return merge(sort(left), sort(right)); // Retorna a função merge que irá juntar e ordenar os subarrays left e right
}

function merge(left, right){ // Agora será criada a função merge, que irá juntar e ordenar os elementos em um novo array, recebendo os subarrays left e right como parâmetros. Dentro da função, será criada a variável result que será iniciada com o array vazio, ela será a responsável por armazenar os elementos ordenados. Após isso, será criada duas variáveis chamadas de i e j, que serão utilizadas como variável de controle para percorrer os subarrays left e right. Após, será feito um loop while que irá ocorrer enquanto i for menor que o tamanho do subarray left e j menor que o tamanho do subarray right. Dentro do loop while, será verificado se o elemento do subarray left é menor do que o elemento do subarray right, caso seja, o elemento do subarray left será inserido dentro do array result e i será incrementado passando para o próximo elemento. Caso o elemento em left seja maior que o elemento em right, o elemento do subarray right será inserido dentro do array result e j será incrementado passando para o próximo elemento. Após o loop while, será retornado o array result concatenado com os elementos restantes do subarray left e right. Assim, tendo o array final ordenado.
    let result = []; // Variável result que irá armazenar os elementos ordenados
    let i = 0, j = 0; // Variáveis de controle para percorrer os subarrays left e right

    while(i < left.length && j < right.length){ // Loop while que irá ocorrer enquanto i for menor que o tamanho do subarray left e j menor que o tamanho do subarray right
        if(left[i] < right[j]){ // Verifica se o elemento do subarray left é menor do que o elemento do subarray right
            result.push(left[i]); // Caso seja, o elemento do subarray left é inserido dentro do array result
            i++; // i é incrementado passando para o próximo elemento de left
        }else if(left[i] > right[j]){ // Caso o elemento em left seja maior que o elemento em right
            result.push(right[j]); // O elemento do subarray right é inserido dentro do array result
            j++; // j é incrementado passando para o próximo elemento de right
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j)); // Após o loop, o array result é retornado concatenado com os elementos restantes do subarray left e right
}

console.log(sort(array));

/*
    Complexidade de tempo: O(n log n) -> O algoritmo tem essa complexidade de tempo, pois ele divide o array em subarrays até que o seu tamanho seja de apenas um elemento, o que resulta em log n. E depois junta esses subarrays de forma ordenada comparando cada elemento de cada subarray, resultando em n. Então, com a multiplicação desses dois fatores, temos a complexidade de tempo de O(n log n).
    
    Complexidade de espaço: O(n) -> O algoritmo tem essa complexidade de espaço, pois requer espaço adicional para os subarranjos e para o array resultande. Tendo o mesmo comprimento n do array original.


    Com essas complexidades, o merge sort se torna um dos algoritmos mais eficientes e estáveis de ordenação, sendo muito utilizado em diversas aplicações. Para termos de comparação, o merge sort possui uma complexidade de tempo de O(n log n), enquanto o insertion sort possui uma complexidade de tempo quadrática de O(n^2). Tendo um desempenho muito superior ao insertion sort.
    Vale lembrar que essa implementação é apenas uma de várias formas de implementar o merge sort, com outras podendo ser até mais eficientes e otimizadas.
*/
/*QUICK SORT*/

/*
    O quick sort é um algoritmo de ordenação que se baseia no princípio de dividir para conquistar. Sendo um dos algoritmos mais rápidos e eficientes de ordenação, o quick sort é ordenado apartir de um pivô, que é um elemento qualquer do array, e a partir dele, os elementos menores são colocados a esquerda e os maiores a direita, dividindo o array em subarrays até chegar em um caso base, que é quando o array tem apenas um elemento e após isso, é feita a junção e ordenação dos subarrays. Esse método é feito apartir de recursão, chamando a função dentro dela mesma até o array finalmente estar completamente ordenado. Caso o array tenha apenas um elemento, será considerado já ordenado e será retornado.

    EXEMPLO:

        dado o seguinte array: [5, 3, 8, 4, 2, 7, 1, 6]

        1. Será escolhido um pivô, que nesse exemplo pode ser o 5.
        2. Após a escolha do pivô, os elementos menores que ele serão colocados a sua esquerda: [3, 4, 2, 1] E também os elementos maiores a sua direita: [8, 7, 6]
        3. Após, os dois subarrays serão ordenados, concatenando os dois subarrays e o pivô: [3, 4, 2, 1, 5, 8, 7, 6]
        4. Será feita a recursão, escolhendo um novo pivô, que nesse caso pode ser o 3.
        5. Os elementos menores que 3 serão colocados a sua esquerda: [2,1] E os maiores a sua direita: [4, 5, 8, 7, 6]
        6. Após, os dois subarrays serão ordenados, concatenando os dois subarrays e o pivô: [2, 1, 3, 4, 5, 8, 7, 6]

        Esse processo se repetirá até que o array esteja completamente ordenado. Terminando com o seguinte array ordenado: [1, 2, 3, 4, 5, 6, 7, 8]
*/

let array = [5, 3, 8, 4, 2, 7, 1, 6]; // Array a ser ordenado

function quickSort(array){ // Aqui será criada a função quick sort que irá ordenar o array, recebendo o array como parâmetro. Dentro da função, será criada três variáveis, uma que irá receber o pivô que será o primeiro elemento do array, e outras duas que serão arrays e que irão receber os elementos menores e maiores que o pivô. Após, será verificado se o tamanho do array é menor que 2, ou seja, se tem apenas um elemento. Caso o array tenha apenas um elemento, ele será considerado ordenado e o mesmo será ordenado. Caso contrário, será feito um loop for que irá percorrer todo o array, e cada elemento percorrido, será verificado se aquele elemento é maior ou menor que o pivô. Caso seja menor, ele será adicionado ao array small, e caso seja maior, será adicionado ao array big. Após, será feita a recursão, chamando a função quick sort para os arrays small e big, concatenando os mesmos junto com o pivô. E assim, quando o array estiver ordenado, ele será retornado.
    let pivot = array[0]; // Pivô
    let small = []; // Array para elementos menores que o pivô
    let big = []; // Array para elementos maiores que o pivô

    if(array.length < 2){ // Caso o array tenha apenas um elemento, ele será considerado ordenado
        return array; // Retorna o array
    }else {  // Caso contrário
        for(let i = 0; i < array.length; i++){ // Loop for que irá percorrer todo o array
            if(array[i] < pivot){ // Verifica se o elemento é menor que o pivô
                small.push(array[i]); // Caso seja, adiciona ao array small
            }else if(array[i] > pivot){ // Verifica se o elemento é maior que o pivô
                big.push(array[i]); // Caso seja, adiciona ao array big
            }
        }
    }

    return quickSort(small).concat(pivot, quickSort(big)); // Retorna a função quick sort para os arrays small e big, concatenando os mesmos junto com o pivô
}

console.log(quickSort(array)); // [1, 2, 3, 4, 5, 6, 7, 8] // Array ordenado



/*
    Complexidade de tempo: O(n log n) -> No melhor caso e no caso médio esse algoritmo será logaritmo linear, pois como dito na sua explicação, ele irá dividir o array em subarrays o que acabada diminuindo a necessidade de comparações e de forma linear passando por todos os elementos e os adicionando os elementos menores em um array e os maiores em outro. No pior caso, a complexidade de tempo será quadrática, O(n^2), pois o pivô escolhido pode ser o maior ou o menor elemento do array, o que fará com que o array não seja dividido em subarrays e sim em um array com todos os elementos menores e outro com todos os elementos maiores, o que fará com que o algoritmo tenha que passar por todos os elementos do array, aumentando a complexidade de tempo.

    Complexidade de espaço: O(log n) -> A complexidade de espaço do quick sort é logaritmo linear, pois ele irá dividir o array em subarrays, o que fará com que a quantidade de memória utilizada seja proporcional ao logaritmo do tamanho do array.
*/
/* 
    BOGO SORT

    O bogo sort é um algoritmo de ordenação extremamente ineficiente, sendo baseado na reordenação aleatória dos elementos até que a ordem deles estejam de acordo. Dependendo do conjunto de elementos a ser ordenado, o algoritmo pode nunca chegar a uma solução e que acaba sendo inutilizável na prática. Mas sendo de bom estudo no ensino de algoritmos.

    Para exemplificar a sua ineficiência, digamos que queremos ordenar um baralho usando esse algoritmo. O algoritmo iria jogar todo o baralho para o ar, juntar as cartas aleatoriamente, e então verificar se as mesmas estão em ordem.


    EXEMPLO:

        dado um array, [5, 2, 4, 1, 3] o algoritmo iria reordenar de forma aleatoria até que o array esteja ordenado, podendo até mesmo ordená-lo de primeira.

        [5, 2, 4, 1, 3] -> [2, 5, 1, 3, 4] -> [3, 4, 5, 2, 1] -> [1, 5, 2, 3, 4] -> [1, 2, 3, 4, 5]
*/

const nums = [3, 1, 5, 2, 4]; // Esse é o array desordenado

function sort(nums){ // Primeiro será criada a função que irá verificar se os elementos estão ordenados. Recebendo o array como seu parâmetro, será feito um loop for que percorrerá por todos os elementos do array, verificando a ordem deles. Para a verificação, será verificado se o elemento anterior é maior em relação ao elemento atual da iteração, caso seja, será retornado false, significando que o array não está ordenado. Quando o array estiver ordenado, será retornado true, confirmando que o array está com a sua ordem correta. 
    for(let i = 0; i < nums.length; i++){ // Loop por todo o array
        if(nums[i - 1] > nums[i]){ //Estrutura if que irá verificar se o elemento em i - 1 (elemento anterior ao atual da iteração) é maior que o elemento em i
            return false; // caso seja, será retornado false, significando que o array não está ordenado
        }
    }

    return true; // quando o array estiver ordenado, será retornado true
}

function isNotSorted(nums){ // Essa função será a responsável por embaralhar os elementos dentro do array. Recebendo o array como parâmetro, será feito um loop for que irá ocorrer enquanto i for maior que 0, com i recebendo o número de elementos em nums. Dentro do loop, será armazenado em uma constante j um número aleatório que será usado como uma posição aleátoria do array. Depois o elemento na posição i do array será trocado pelo elemento que está na posição aleatória do array, e após os elementos acabarem, o array será retornado;
    for(let i = nums.length - 1; i > 0; i--){ // Loop for que irá ocorrer enquanto houver elementos a ser verificados
        const j = Math.floor(Math.random() * (i + 1)); // Constante j que irá receber um número aleatório que servirá como uma posição
        [nums[i], nums[j]] = [nums[j], nums[i]]; // troca de posição dos elementos
    }

    return nums; // Após o fim do loop, o array será retornado
}


function bogoSort(nums){ // Essa função será a responsável para que o loop ocorra enquanto o array não estiver ordenado e que irá nos mostrar quantas interações foram feitas até o array estar ordenado. Recebendo o array como parâmetro, dentro da função será criada primeiramente a variável interaction, que irá armazenar a quantidade de operações que ocorreram até o array estar ordenado. Depois será feito um loop que irá ocorrer enquanto a função sort (que verifica a ordenação dos elementos) retornar falso, enquanto esse loop while ocorrer, o array receberá o novo array embaralhado aleatoriamente e a cada novo array embaralhado, a variável iteractions receberá mais um. Após o fim do loop, será retornado no console a quantidade de operações e o array ordenado.
    let interactions = 0; // Variável que irá armazenar a quantidade de operações
    while(!sort(nums)){ // Loop que irá ocorrer enquanto a função sort retornar false
        nums = isNotSorted(nums); // o array irá receber o novo array embaralhado
        interactions++; // a cada operação, será incrementado mais um a variável interactions
    }

    console.log(`Interações até o array estar ordenado: ${interactions}`); // Ao fim do loop, será mostrado a quantidade de operações que foram feitas até o array estar ordenado
    return nums; // e será retornado o array ordenado
}

console.log("Array ordenado: " + bogoSort(nums.slice()));

/*
    COMPLEXIDADE DE TEMPO: Sua complexidade de tempo é difícil de ser determinada devido a sua aleatoriedade. Mas de forma simples, é decretado que sua complexidade é O(n x n!)
    COMPLEXIDADE DE ESPAÇO: Sua complexidade de espaço é O(n) já que não é utilizado nenhum espaço a mais de memória além do tamanho do array de entrada

*/
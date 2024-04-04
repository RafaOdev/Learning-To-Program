/*INSERTION SORT*/

/*
        O insertion sort é um dos algoritmos de ordenação mais simples e lentos que existe. Porém também é um dos algoritmos mais fáceis de ser implementado e compreendido. O insertion sort é um algoritmo que busca sempre inserir um elemento em sua posição correta, apartir de comparações com os elementos anteriormente ordenados e inseridos. 

        exemplo:

            dado um array [5, 3, 2, 4, 7, 1] o insertion sort irá ordenar esse array da seguinte forma:
                - [5] -> 3 < 5, então [3, 5]
                - [3, 5] -> 2 < 5 e 2 < 3, então [2, 3, 5]
                - [2, 3, 5] -> 4 < 5 e 4 > 3, então [2, 3, 4, 5]
                - [2, 3, 4, 5] -> 7 > 5, então [2, 3, 4, 5, 7]
                - [2, 3, 4, 5, 7] -> 1 < 7, 1 < 5, 1 < 4, 1 < 3, 1 < 2, então [1, 2, 3, 4, 5, 7]
            
        O algoritmo começa criando um novo array ou lista contendo apenas o primeiro elemento do conjunto desordenado. A partir do segundo elemento, ele compara cada elemento com os elementos já ordenados no novo array. Se o elemento atual for menor do que o elemento anterior, o elemento anterior é deslocado para a direita e o elemento menor é inserido naquela posição. Esse processo de comparação e inserção continua até que o elemento seja maior ou igual ao elemento anterior. Assim, o algoritmo continua iterando até que todos os elementos do conjunto desordenado sejam inseridos no novo array ordenado.
*/

let insertion = [5, 3, 2, 4, 7, 1]; // Para começar, será feito o array desordenado
function insertionSort(insertion){ // Após, será criada a função que irá ordenar o array, essa função irá receber o array desordenado como parâmetro. Dentro da função, será feito um loop for que irá percorrer todo o array, começando do segundo elemento, pois o primeiro elemento já está ordenado. Dentro do loop será criada duas variáveis, uma chamada key que irá armazenar o atual elemento a ser verificado, e outra chamada j que irá armazenar o elemento anterior ao atual. Após isso, será feito um loop while que irá ocorrer enquanto j for maior ou igual a 0 e o elemento anterior ao atual for maior do que o elemento atual. Dentro do loop while, o elemento anterior ao atual é deslocado para a direita e j é decrementado. Após o loop while, o elemento atual é inserido na sua posição correta. O processo de comparação e inserção continua até que todos os elementos do array sejam ordenados. E finamente o array ordenado é exibido no console.

    for(let i = 1; i < insertion.length; i++){ // loop for que irá percorrer todo o array, começando do segundo elemento
        let key = insertion[i]; // variável key que irá armazenar o atual elemento a ser verificado
        let j = i - 1; // variável j que irá armazenar o elemento anterior ao atual
        while(j >= 0 && insertion[j] > key){ // loop while que irá ocorrer enquanto j for maior ou igual a 0 e o elemento anterior ao atual for maior do que o elemento atual
            insertion[j + 1] = insertion[j]; // o elemento anterior ao atual é deslocado para a direita
            j = j - 1; // j é decrementado
        }

        insertion[j + 1] = key; // o elemento atual é inserido na sua posição correta
    }

    console.log(insertion); // array ordenado é exibido no console
}

insertionSort(insertion)

/*
    Complexidade de tempo -> O(n^2) -> O algoritmo tem essa complexidade de tempo, pois ele percorre todo o array, com um loop for, e dentro desse loop for, ele percorre todo o array novamente, com um loop while. O que resulta em uma complexidade de tempo quadrática de O(n^2).
    
    Complexidade de espaço -> O(1) -> O algoritmo tem essa complexidade de espaço, pois ele não requer espaço adicional para armazenar os elementos, ele apenas utiliza as variáveis key e j para armazenar os elementos a serem verificados.

    Com essas complexidades, o insertion sort se torna um dos algoritmos mais lentos e ineficientes de ordenação, sendo muito pouco utilizado em aplicações reais. Para termos de comparação, o insertion sort possui uma complexidade de tempo quadrática de O(n^2), enquanto o merge sort possui uma complexidade de tempo de O(n log n). Tendo um desempenho muito inferior ao merge sort.
*/
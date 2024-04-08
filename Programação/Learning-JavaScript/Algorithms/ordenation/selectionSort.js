/*SELECTION SORT*/

/*
    O selectio sort é um algoritmo de ordenação por seleção, baseado em sempre passar o menor elemento econtrado na lista para a segunda posição, depois o segundo menor elemento, terceiro menor elemento e assim por diante. O algoritmo é dividido em duas partes, a primeira parte é a busca do menor elemento da lista, e segunda é a troca desse elemento com o primeiro elemento presente na lista. Repetindo esse processo até que a lista esteja ordenada.

    EXEMPLO:

        dado um array [5, 3, 8, 2, 1, 4] o selection sort irá ordenar esse array da seguinte forma:

        1. Busca o menor elemento da lista, que é o 1, e troca com o primeiro elemento da lista. [5, 3, 8, 2, 1, 4] -> [1, 3, 8, 2, 5, 4]
        2. Busca o segundo menor elemento da lista, que é o 2, e troca com o segundo elemento da lista. [1, 3, 8, 2, 5, 4] -> [1, 2, 8, 3, 5, 4]
        3. Busca o terceiro menor elemento da lista, que é o 3, e troca com o terceiro elemento da lista. [1, 2, 8, 3, 5, 4] -> [1, 2, 3, 8, 5, 4]
        4. Busca o quarto menor elemento da lista, que é o 4, e troca com o quarto elemento da lista. [1, 2, 3, 8, 5, 4] -> [1, 2, 3, 4, 5, 8]
        5. Busca o quinto menor elemento da lista, que é o 5, porém o 5 já está na sua posição correta mantendo o array da mesma forma que anteriormente. [1, 2, 3, 4, 5, 8]
        6. Busca o sexto menor elemento da lista, que é o 8, porém o 8 já está na sua posição correta mantendo o array da mesma forma que anteriormente. [1, 2, 3, 4, 5, 8]
*/

let array = [5, 3, 8, 2, 1, 4]; // Para começar, será feito o array desordenado

function selection(array){ // Após, será criada a função selection que será a responsável por ordenar o array, recebendo o mesmo como parâmetro. Dentro da função, será criado dois laços for, o primeiro laço for irá percorrer todo o array até o último elemento. Dentro desse for, será criada uma variável chamada min que irá armazenar o menor índice do array e também será feito o segundo laço for que irá percorrer todo o array até o penúltimo elemento. Dentro desse segundo for, será feita a comparação de índices do array, caso o elemento da iteração atual seja menor do que o elemento que está na posição min, a variável min irá receber o índice do elemento da iteração atual. Após o termino do segundo for, ainda dentro do primeiro laço for, será feita a comparação e troca de posições dos elementos, verificando se o elemento na posição j (elemento da iteração atual) é maior que o elemento na posição min (menor índice do array). Caso seja, será criada uma variável temporária que irá armazenar o elemento da posição j, o elemento da posição j irá receber o elemento da posição min e o elemento da posição min irá receber o elemento temporário, ocasionando a troca de posições. Após o término do primeiro laço for, o array possívelmente ordenado é retornado.
    for(let j = 0; j < array.length - 1; j++){ // loop for que irá percorrer todo o array até o último elemento.
        let min = j; // variável min que irá armazenar o menor índice do array
        for(let i = j + 1; i < array.length; i++){ // loop for que irá percorrer todo o array até o penúltimo elemento
            if(array[i] < array[min]){ // comparação dos elementos do array para encontrar o menor índice.
                min = i; // caso o elemento da iteração atual seja menor do que o elemento que está na posição min, a variável min irá receber o índice do elemento da iteração atual 
            }
        }
    
        if(array[j] > array[min]){ // comparação e troca de posições dos elementos
            let temp = array[j]; // variável temporária que irá armazenar o elemento da posição j
            array[j] = array[min]; // o elemento da posição j é trocado pelo elemento da posição min
            array[min] = temp; // o elemento da posição min é trocado pelo elemento temporário
        }
    
    }

    return array; // E após todas a iterações e trocas, o array ordenado é retornado
}

console.log(selection(array));

/*
    Complexidade de tempo = O(n^2) -> O algoritmo tem essa complexidade de tempo, pois ele percorre todo o array, com um loop for, e dentro desse loop for, ele percorre todo o array novamente, com outro loop for. O que resulta em uma complexidade de tempo quadrática de O(n^2).

    Complexidade de espaço = O(1) -> O algoritmo tem essa complexidade de espaço, pois ele não requer espaço adicional para armazenar os elementos, ele apenas utiliza a variável min e temp para armazenar os elementos a serem trocados.

    O selection sort, é um dos algoritmos mais simples e fáceis de ser entendido e explicado. Porém, ele é um dos algoritmos mais lentos e ineficientes de ordenação. Para termos de comparação, o selection sort possui uma complexidade de tempo quadrática de O(n^2), enquanto o merge sort possui uma complexidade de tempo de O(n log n). Tendo um desempenho muito inferior ao merge sort.
*/


/*BUBBLE SORT*/

/*
    O bubble sort é um algoritmo de odernação por flutação. Comparando os elementos adjacentes (de dois em dois) e trocando-os de posição se estiverem na ordem errada. Com isso, os elementos maiores dessa lista acabam "flutando" pela lista até chegar na sua posição correta. Se necessário, esse processo será repetido diversas vezes até que a lista finalmente esteja ordenada.

    EXEMPLO:

        dado um array [5, 3, 8, 2, 1, 4] o bubble sort irá ordenar esse array da seguinte forma:

        1. Compara 5 e 3, sendo 3 menor que 5, trocando ambos de posição e flutuando o 5 para a próxima posição que anteriormente era do 3. [3, 5, 8, 2, 1, 4]
        2. Compara 5 e 8, sendo 5 menor que 8, não é necessário trocar de posição. [3, 5, 8, 2, 1, 4]
        3. Compara 8 e 2, sendo 2 menor que 8, trocando ambos de posição e flutuando o 8 para a próxima posição que anteriormente era do 2. [3, 5, 2, 8, 1, 4]
        4. Compara 8 e 1, sendo 1 menor que 8, trocando ambos de posição e flutuando o 8 para a próxima posição que anteriormente era do 1. [3, 5, 2, 1, 8, 4]
        5. Compara 8 e 4, sendo 4 menor que 8, trocando ambos de posição e flutuando o 8 para a próxima posição que anteriormente era do 4. [3, 5, 2, 1, 4, 8]

        O algoritmo começa comparando o primeiro elemento com o segundo, vendo que o primeiro elemento é maior que o segundo, esses elementos terão a sua ordem trocada, com o maior elemento sendo flutuado a próxima posição que anteriormente era do menor elemento. Esse processo de comparação e troca continua até que o maior elemento seja flutuado até a última posição do array. Após isso, o algoritmo irá comparar o segundo elemento com o terceiro, e assim por diante, até que todos os elementos estejam ordenados.
*/

let array = [5, 3, 8, 2, 1, 4]; // Para começar, será feito o array desordenado

function bubble(array){ // Depois, será criada a função bubble que será a responsável por ordernar o array, recebendo o mesmo como parâmetro. Dentro da função, será criado um loop for que irá percorrer até o penúltimo elemento do array. Dentro desse loop, será criado outro loop for que também irá percorrer até o penúltimo elemento do array. Esse segundo loop é criado, para que seja possível comparar todos os elementos adjacentes do array até que todos os elementos estejam ordenados, pois se for feito apenas um loop for, o algoritmo irá comparar até que o maior elemento seja o último e irá se encerrar, sem que os elementos anteriores estejam ordenados. Dentro do segundo loop for, será feita a comparação dos elementos adjacentes, se o elemento atual for maior que o próximo elemento, esses elementos terão a sua ordem trocada. Após o loop for, o array ordenado é retornado.
    for(let i = 0; i < array.length - 1; i++){ // loop for que irá percorrer até o penúltimo elemento do array
        for(let j = 0; j < array.length - 1; j++){ // loop for que também irá percorrer até o penúltimo elemento do array
            if(array[j] > array[j + 1]){ // comparação dos elementos adjacentes
                let temp = array[j]; // Variável temporária que irá armazenar o elemento atual
                array[j] = array[j + 1]; // O elemento atual é trocado pelo próximo elemento
                array[j + 1] = temp; // O próximo elemento é trocado pelo elemento atual
            }
        }
    }

    return array; // E após todas a iterações e trocas, o array ordenado é retornado
}

console.log(bubble(array));

/* 
    Complexidade de tempo = O(n^2) -> O algoritmo tem essa complexidade de tempo, pois ele percorre todo o array, com um loop for, e dentro desse loop for, ele percorre todo o array novamente, com outro loop for. O que resulta em uma complexidade de tempo quadrática de O(n^2).

    Complexidade de espaço = O(1) -> O algoritmo tem essa complexidade de espaço, pois ele não requer espaço adicional para armazenar os elementos, ele apenas utiliza a variável temp para armazenar o elemento a ser trocado.

    Com essa complexidade de tempo, o bubble sort se torna um dos algoritmos mais lentos, ineficientes e simples de ordenação. Para termos de comparação, o bubble sort possui uma complexidade de tempo quadrática de O(n^2), enquanto o merge sort possui uma complexidade de tempo de O(n log n). Tendo um desempenho muito inferior ao merge sort.
*/
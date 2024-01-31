/* 
     Array é uma estrutura de dado básica que na maioria das linguagens de programação armazena apenas um tipo de dado (INT, STRING, BOOLEANO e etc). O array armazena os seus elementos dentro de índices, esses índices ajuda a localizar o elemento dentro do array

            EXEMPLO: let array = [10, 15, 1, 2, 23, 19];

            foi criado um array em JavaScript com 6 elementos, cada elemento contém um índice que começa com 0 indo até o 5;
            
            EXEMPLO: array.push(25):

            A função push é utilizada para adicionar um novo elemento no final do array, então após a adição do elemento 25 o array fica dessa forma [10, 15, 1, 2, 23, 19, 25];
        
            EXEMPLO: array.splice(0):

            A função splice irá remover um elemento de sua escolha, no exemplo estamos removendo o elemento que se encontra no índice 0, que é o número 10, então o array ficaria [15, 1, 2, 23, 19, 25];

            EXEMPLO: array.pop():

            A função pop irá remover o último elemento do array, que no caso é o 25, então o array ficaria [15, 1, 2, 23, 19];

            EXEMPLO: array.length:

            array.length irá nos mostrar a quantidade de itens presentes dentro do array, que no caso seria 4;

            EXEMPLO: array.unshift(30):

            A função unshift irá adicionar um elemento ao primeiro índice, logo o array ficaria da seguinte forma, [30, 15, 1, 2, 23, 19];

            EXEMPLO: array.shift():

            A função shift irá remover o primeiro elemento do array, então o array ficaria [15, 1, 2, 23, 19];
*/

let array = [2,3,4,1,9,0];

array.push(12); // adicionou 12 ao final do array;
array.pop(); // removeu o último elemento do array;
array.splice(3); // removeu o elemento do índice 3, que no caso é o número 1;
array.unshift(25, 65); // adicionou os números 25 e 65 no começo do array;
array.shift(); // remove o primeiro elemento do array, no caso o número 25;
array.length; // mostra o tamanho do array;
array[2] = 76; // adicionou o número 76 ao segundo índice do array;

// E para percorrer e mostrar todos os elementos de uma array, é feita a seguinte estrutura.

function viewElements(arr){
     arr = [1, 2, 3, 4, 5];

     for(let i = 0; i < arr.length; i++){
          console.log(arr[i]);
     }
}

viewElements();

// Vamos explicar um dos usos do array com a utilização do algoritmo de ordenação, aonde teremos um array de n números e que deverá ser ordenado pelo algoritmo que irémos implementar.

function insertion(){
     let array = [0, 3, 6, 8, 2, 9 , 1, 5, 4, 7]; // aqui está o array que deverá ser ordenado.

     for(let i = 1; i < array.length; i++){ // essa iteração for irá ser responsável por se mover e verificar todo o array;
          let key = array[i]; // a variável key irá armazenar os elementos contido no array;
          let j = i - 1;  // essa linha é responsável por receber a posição anterior a posição atual do elemento;

          while(j >= 0 && array[j] > key){ // essa iteração while se responsabiliza pela repetição que checará os elementos e os moverá para a sua posição correta, o argumento j >= 0 garante que ainda contenha posições dentro do array para ser verificada, enquanto o argumento array[j] > key verifica se o elemento na posição j(o elemento que foi verificado anteriormente) é maior que o elemento atual que está dentro da variável key. Enquanto os argumentos forem verdadeiros o algoritmo abaixo será executado;
               array[j + 1] = array[j]; // essa linha será responsável por mover o elemento que está na posição j para uma posição a frente da posição atual do elemento, sendo assim o movendo para direita do array;
               j = j - 1; // essa linha será responsável por atualizar o j para a posição anterior, para que uma proxima iteração seja feita corretamente;
          }

          array[j + 1] = key; // após a iteração while for totalmente encerrada se tornando falsa, essa linha atribui o elemento de key a sua posição correta, assim ordenando o array;
     }

     console.log(array);
}

insertion()

/*
     POR QUE USAR ? 

     Os arrays são usados em praticamente qualquer tipo de aplicação seja ela para aprendizado de máquina, softwares de otimizações, controle de fluxo do software, armazenamento de varios dados de um mesmo tipo e etc. O array é uma estrutura básica e que é e deve ser usada em praticamente todas as aplicações cotidianas;
*/

// O array que pode ser conhecido como vetor, também pode ser chamado de matriz. Um vetor nada mais é do que um array unidimensional (igual aos arrays dos exemplos acima), e a matriz é um array multidimensional, podendo ter várias dimensões. Veja abaixo a diferença.

let vetor = [1, 2, 3, 4, 5]; // esse é um array unidimensional.
let matriz = [ // e esse é um array multidimensional, nesse caso tridimensional.
     [1, 2, 3, 4, 5],
     ["Rafael", "Bruna", "Vitória"] ,
     ["Kloop", "Alexander-Arnold"]
];

// para acessar algum elemento dessa matriz, será usado o seguinte comando.

console.log(matriz[1][2]); // o primeiro colchetes [1] indica qual dimensão do array deve ser acessada, já o segundo [2] indica que deve ser mostrado o elemento que está no índice 2 do array, nesse caso será acessado o segundo array e será mostrado o nome "Vitória".

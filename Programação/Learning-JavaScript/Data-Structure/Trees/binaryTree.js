/*ÁRVORES BINÁRIAS*/

/*  As árvores binárias são estruturas de dados não lineares que compartilham características com a topologia presente nas árvores genealógicas. Em uma árvore binária, cada elemento segue uma hierarquia definida. A estrutura é composta por conjuntos de dados denominados nós ou nodos, os quais devem ter conexões com pelo menos mais dois nodos. Devido à sua natureza hierárquica, cada árvore binária possui um nodo raiz, a partir do qual é possível construir o restante da estrutura.*/
/*  Ao modelar árvores binárias com base na topologia das árvores genealógicas, é comum utilizar terminologia similar. Nessa estrutura, cada nodo superior é denominado "PAI", enquanto os nodos inferiores diretamente conectados a ele são referidos como "FILHOS", com essa ligação sendo feita apartir de arestas. Nodos "FILHOS" diferentes, mas ligados diretamente ao mesmo "pai", são conhecidos como "irmãos". Essa terminologia facilita a compreensão da relação hierárquica entre os elementos na árvore binária.*/
/*  Na estrutura da árvore binária, qualquer nodo que não tenha filhos é chamado de "FOLHA". A partir dessas "FOLHAS", podemos determinar o tamanho da árvore, o que é conhecido como "ALTURA". A altura mede o caminho mais longo da raiz da árvore até encontrar uma folha, ou seja, o comprimento do caminho mais longo da raiz até o nodo folha mais distante. Essa medida é essencial para entender a estrutura, profundidade e também para saber a altura mínima e máxima da árvore, sabendo disso, será possível evitar árvores desbalanceadas*/
/*  Dentro da estrutura de árvores, cada nodo "pai" tem o potencial de gerar uma nova árvore, que é considerada uma sub-árvore. Essa sub-árvore é uma estrutura independente que consiste no nodo "pai" e todos os seus descendentes, incluindo todos os nodos filhos, os nodos filhos dos filhos e assim por diante. Cada sub-árvore pode ser tratada como uma entidade separada dentro da árvore maior, permitindo uma abordagem modular e eficiente para a manipulação de dados.*/
/*  As árvores binárias são estruturas de dados extremamente versáteis e podem ser utilizadas para resolver uma ampla variedade de problemas. Elas são frequentemente utilizadas para modelar relações hierárquicas, como a estrutura de pastas e arquivos em um sistema operacional, a hierarquia de categorias em um site de comércio eletrônico ou a estrutura de um documento XML. Além disso, as árvores binárias são frequentemente utilizadas em algoritmos de busca e ordenação, como o algoritmo de busca binária, que é uma das formas mais eficientes de encontrar um elemento em um conjunto ordenado.*/

/*ALTURA E PROFUNDIDADE*/

/*  Conforme mencionado anteriormente, calcular a altura e profundidade da árvore é crucial, mesmo antes da inserção dos dados, pois isso permite determinar se a árvore está balanceada. Em uma árvore desbalanceada, também conhecida como árvore degenerada, a eficiência é reduzida, assemelhando-se à de uma lista encadeada. Nesse cenário, todos os elementos seguem uma linha linear, onde cada nodo pai tem apenas um nodo filho. Isso resulta em operações de busca, inserção e remoção que têm uma complexidade semelhante à de uma lista encadeada, prejudicando a eficiência e desempenho da estrutura. Portanto, manter a árvore balanceada é fundamental para garantir um desempenho eficiente das operações na estrutura da árvore binária.*/
/* A altura mínima de uma árvore ocorre quando ela utiliza o menor número possível de níveis para alocar seus dados, distribuindo uniformemente os nodos pai com dois filhos cada. Isso resulta em uma árvore mais equilibrada e eficiente em termos de tempo de acesso e operações, proporcionando uma melhor performance em comparação com árvores com alturas maiores. Já a altura máxima, pode significar uma árvore desbalanceada, aonde um ramo da árvore pode ser muito maior que o outro, resultando em uma menor eficiência de inserção, remoção e busca.*/
/* Há algumas maneiras de balancear uma árvore binária, sendo uma delas a RED-BLACK TREE. Para a red-black tree ser uma árvore binária balanceada, ela segue regras de implementação que acaba aumentando a dificuldade na hora da codificação, tornando o entendimento mais complexo. E mesmo ela tendo uma complexidade maior no código e muitos detalhes que acaba tornando o código massante, ela acaba tendo um bom pior caso, sendo O(log n) tanto para inserir e remover, quanto para buscar elementos na árvore. Também existe as árvores AVL, que irá balancear a árvore com base em calcúlos aonde o seu resultado deve ser -1, 0 ou 1 para que ela esteja balanceada, caso o resultado de -2 ou mais que 2, a árvore estará desbalanceada precisando rotacionar os nodos e recalcular o balanço até que o resultado esteja dentro do esperado. Para escolher qual será o método de balanceamento, será preciso saber para qual será a finalidade e o que será mais importante para a árvore*/

/*PERCURSO EM UMA ÁRVORE BINÁRIA*/

/*  O percurso em uma árvore binária é uma operação fundamental que permite acessar todos os nodos da árvore de maneira sistemática. Existem três métodos principais para percorrer uma árvore binária: pré-ordem, em-ordem e pós-ordem. Cada um desses métodos segue uma abordagem diferente para acessar os nodos da árvore, permitindo que os dados sejam processados de maneira eficiente e organizada.*/
/*  No percurso em pré ordem, o algoritmo visita primeiro o nodo raiz, seguido pela recursão nas sub-árvores da esquerda e dai passando pelas sub-árvores da direita. Já o percurso em pós ordem, será preciso primeiro visitar todos os descendentes de uma raiz em uma árvore e sub-árvores, antes de verificar a raiz da árvore e das sub-árvores. Isso significa que todo nodo é processado depois de seus filhos. E o percurso em-ordem, visita primeiro o nodo filho da esquerda, depois o nodo raiz e por último o nodo da direita. Existem ainda vários outros métodos de percorer árvores binárias, como o percurso em largura, aonde é percorrido todos os nodos de um nível apartir da raiz, o percurso em profundidade e também o percurso inverso.*/

/*IMPLEMENTAÇÃO DE UMA ÁRVORE BINÁRIA*/

/*OBS: A árvore binária abaixo foi implementada usando um método comum, sem tratamento de balanceamento. Portanto, dependendo da ordem e do tamanho dos dados, a árvore pode ficar desbalanceada.*/

class Node { // Para íniciar a árvore, será criada uma classe que será responsável por criar os nodos. Essa classe terá um construtor que terá um parâmetro que será o dado que será inserido no nodo. Além disso, terá dois atributos, um para o nodo da esquerda e outro para o nodo da direita. Que seria os respectivos filhos do nodo.
    constructor(data){
        this.data = data; // aqui será passado o dado que será inserido no nodo
        this.left = null; // aqui será passado o nodo da esquerda. Será íniciado como nulo, para evitar problemas com lixo de memória
        this.right = null; // aqui será passado o nodo da direita. Será íniciado como nulo, para evitar problemas com lixo de memória
    }
}

// Após a criação da classe que será o nodo, será criada a classe que será a árvore. Essa classe terá um construtor que será responsável por íniciar a árvore. Nesse construtor terá o atributo root que será o nodo raiz da árvore. Esse atributo será íniciado como nulo, para evitar problemas com lixo de memória. Nessa classe também terá outros métodos, como inserção de dados, busca de dados, altura da árvore, percurso em pré-ordem, percurso em pós-ordem, percurso em-ordem, valor mínimo e valor máximo da árvore.

class Tree {
    constructor(){
        this.root = null; // raiz da árvore
    }

    /*INSERÇÃO*/    
    insert(data){ // Esse será o método de inserção de nodos na árvore. Sendo iniciado com um parâmetro que será o dado que será inserido no nodo, e esse dado será passado como parâmetro para a classe Node que irá criar o nodo com o dado passado. Após a criação do nodo, será verificado com a estrutura if, se a raiz da árvore é nula, se for, o nodo criado passará a ser a raiz da árvore. Caso a raiz da árvore não seja nula, ou seja, já existe um nodo na raiz, será passado para o bloco else da estrutura if. Dentro do bloco else, será criado uma variável chamada current que irá servir como um ponteiro para comparação do dado que será inserido, com os dados que já estão presentes na árvore. Será criada outra variável chamada parent que será inciada como nula, essa variável irá armazenar o nodo pai do nodo que está sendo armazenado na árvore. Após a criação dessas dua variáveis, será feito um loop while que irá rodar até que o nodo que está sendo inserido seja inserido de fato na árvore. Ao íniciar o loop, a variável parent irá receber o nodo pai do nodo que está sendo inserido, e será verificado se o dado que está sendo inserido no nodo é menor que o dado do nodo pai, se for, o ponteiro current irá receber o nodo a esquerda do nodo pai, e será verificado se o nodo a esquerda do nodo pai é nulo, se for, o nodo será inserido, caso não seja não seja nulo, será feito o loop novamente até encontrar um nodo nulo. Caso o dado do nodo que estamos inserindo seja maior que o dado pai, o ponteiro current irá receber o nodo a direta do nodo pai, e será verificado se o nodo a direita do nodo pai é nulo, se for, o nodo será inserido, caso não seja não seja nulo, será feito o loop novamente até encontrar um nodo nulo.
        let node = new Node(data); // aqui será criado o nodo com o dado que será armazenado.

        if(this.root === null){ // aqui será verificado se a raiz da árvore é nula
            this.root = node; // caso seja, o nodo criado será inserido na raiz.
        }else{ // caso a raiz já tenha um nodo, será passado para o bloco else
            let current = this.root; // aqui será criado um ponteiro que irá servir para comparar o dado dos nodos já inseridos na árvore com o dado que será inserido.
            let parent = null; // aqui será criado um ponteiro que irá servir para armazenar o nodo pai do nodo que está sendo inserido.

            while(1){  // aqui será criado um loop que irá rodar até que o nodo seja inserido na árvore
                parent = current; // dentro do loop, o ponteiro parent irá receber o nodo pai do nodo que está sendo inserido.
                if(data < current.data){ // aqui será verificado se o dado que está sendo inserido é menor que o dado do nodo pai
                    current = current.left; // caso seja, o nodo irá passar para a esquerda do nodo pai.

                    if(current === null){ // e será verificado se esse nodo a esquerda do nodo pai é nulo.
                        parent.left = node; // caso seja, o nodo será inserido.
                        break;
                    }
                }else { // caso o dado do nodo que será inserido seja maior que o dado do nodo pai, será passado para o bloco else
                    current = current.right; // será passado para o nodo a direita do nodo pai.

                    if(current === null){ // e será verificado se esse nodo é nulo.
                        parent.right = node; // caso seja, o nodo será inserido.
                        break;
                    }
                }

                //OBS: O break é usado para que o loop pare quando o nodo for inserido.   
            }
        }

        //Esse método de inserção tem uma complexidade O(log n) desde que a árvore esteja balanceada. Caso a árvore não esteja balanceada, a sua complexidade de pior caso poderá ser até O(n). 
    }

    /*BUSCA*/
    search(data){ // Esse método, é o metodo de busca há um elemento desejado que está presente na árvore. Nesse método, será usada a busca binária, um dos métodos mais usados para a busca de um elemento em uma árvore binária. Pois nesse método de busca, a cada elemento que é comparado, será dividido pela metade o número de elementos, descartando muitos elementos que não terá a necessidade de fazer uma comparação. Para íniciar esse método, foi criada duas variáveis, uma chamada values que irá conter um array vazio que irá armazenar os valores dos nodos da árvore, e outra chamada result que terá o tipo string que irá apresentar o dado e em qual nível da árvore ele foi encontrado, com ela sendo iniciada com uma string dizendo que o valor não foi encontrado, que irá aparecer caso o dado buscado não seja encontrado. Após a criação dessas variáveis, será criada uma função chamada traverse, que ira percorrer a árvore com um percurso em-ordem, e armazenando os dados na variável values. Essa função será útil para que a gente possa fazer a busca binária. Após a árvore ser percorrida, e os dados serem armazenado na variável values, será feita a função que será responsável pela busca binária. O dado que queremos que seja buscado, será passado como parâmetro para a função, e será criada duas variáveis, uma chamada start que será iniciada com 0, e outra chamada found que será iniciada com a última posição do array values. Com essas duas variáveis criadas, será feito um loop while que irá rodar enquanto o valor da variável start é menor ou igual ao valor de found, ou seja, está percorrendo o nosso array. Dentro do loop, será criada mais duas variáveis, uma chamada mid que será responsável por armazenar a metade do array, e outra que irá armazenar o dado que está na metade do array. Após a criação dessas variáveis, será feita uma estrutura if que irá verificar se o dado que estamos buscando é o mesmo que está na metade do array, caso seja, a variável result irá receber uma string dizendo que o valor foi encontrado e a posição que ele foi encontrado, e o loop irá parar. Caso o dado que estamos buscando seja maior que o dado que está na metade do array, a variável start irá receber o valor de mid + 1. Indo para a próxima posição a esquerda do array. Caso o dado que estamos buscando seja menor que o dado que está na metade do array, a variável found irá receber o valor de mid - 1. Indo para a direita do array. Após o fim do loop, a variável result será retornada.

        let values = []; // aqui será criado um array vazio que irá armazenar os valores dos nodos da árvore em um array.
        let result = 'Not found value!!'; // aqui será criada uma variável que irá armazenar o resultado da busca, e será iniciada com uma string dizendo que o valor não foi encontrado.
        function traverse(node){ // aqui será criada a função que irá percorrer a árvore com um percurso em-ordem, e irá armazenar os valores dos nodos em um array.
            if(node !== null){ // aqui será verificado se o nodo é diferente de nulo.
                traverse(node.left); // caso seja, será chamado a função novamente passando o nodo a esquerda.
                values.push(node.data); // após a função ser chamada, o dado do nodo será inserido no array values.
                traverse(node.right); // e por último, será chamado a função novamente passando o nodo a direita.
            }

            return values; // aqui será retornado o array values.
        }

        traverse(this.root); // aqui a função traverse será chamada passando a raiz da árvore.

        function binarySearch(data){ // aqui será criada a função que irá fazer a busca binária.
            let start = 0; // aqui será criada uma variável que irá armazenar a posição inicial do array.
            let found = values.length - 1; // aqui será criada uma variável que irá armazenar a última posição do array.
            
            while(start <= found){ // aqui será criado um loop que irá rodar enquanto a variável start for menor ou igual a variável found.
                let mid = Math.floor((start + found) / 2); // com o loop rodando, será criada uma variável que irá armazenar a metade do array.
                let value = values[mid]; // e outra variável que irá armazenar o dado que está na metade do array.

                if(value === data){ // aqui será feita uma estrutura if que irá verificar se o dado que estamos buscando é o mesmo que está na metade do array.
                    result = `O valor ${data} foi encontrado na posição ${mid}`; // caso seja, a variável result irá receber uma string dizendo que o valor foi encontrado e a posição que ele foi encontrado.
                    break; // e o loop irá parar.
                }else if(value < data){ // caso o dado que estamos buscando seja maior que o dado que está na metade do array, será passado para o bloco else if
                    start = mid + 1; // e a variável start irá receber o valor de mid + 1. Indo para a próxima posição do array.
                }else {
                    found = mid - 1; // caso o dado que estamos buscando seja menor que o dado que está na metade do array, a variável found irá receber o valor de mid - 1. Indo para a posição anterior do array.
                }
            }

            return result;
        }

        console.log(binarySearch(data));

        //Esse método de busca tem uma complexidade O(log n) desde que a árvore esteja balanceada. Caso a árvore não esteja balanceada, a sua complexidade de pior caso poderá ser até O(n).
    }


    /*REMOÇÃO*/
    delete(data){ // Esse é o método que remove um nodo da árvore. Para remover um nodo da árvore, será preciso primeiro entender os possíveis casos que podem ocorrer ao remover um nodo. Os casos são: 1 - O nodo que será removido não tem filhos, 2 - O nodo que será removido tem um filho, 3 - O nodo que será removido tem dois filhos, 4 - O nodo que será removido é a própria raiz. No caso 1, o nodo que será removido será simplesmente removido. No caso 2, o nodo que será removido será substituído pelo seu nodo filho. No caso 3, o nodo que removido será substituído pelo nodo que tem o menor valor da sua sub-árvore da direita. E no caso 4, o a raiz será subistituída pelo menor valor das sub-árvores da direita. Para íniciar esse método, será criada uma função chamada removeNode que irá receber como parâmetro o nodo e o dado que será removido. Dentro dessa função, primeiramente será verificado se o nodo é nulo, caso for, irá retornar null. Depois será verificado se o valor que será removido é menor que o valor que está no nodo atual, se for, será feita uma chamada recursiva, com a função removeNode chamando ela mesma passando o próximo nodo a esquerda e o dado que será removido. Caso o valor seja maior que o valor do nodo atual, será feita novamente a chamada recursiva, mas agora passando o próximo nodo a direita e o dado que será removido. Caso o valor que será removido seja o mesmo que o valor no nodo atual, antes de remover, será verificado se existem nodos a esquerda e a direita. Caso ambos os lados estejam nulos, o nodo será removido. Se o nodo a esquerda for nulo, será passado o nodo da direita para o lugar do nodo removido, mesma coisa para o lado direito. Se o lado direito for nulo, será passado o nodo da esquerda para o lugar do nodo removido. E por último, caso o nodo tenha dois filhos, será passado o menor nodo da direita para um nodo temporário apartir de uma função chamada minValueNode, e o nodo que será removido, irá receber o valor do nodo temporário, e o nodo temporário será removido. Após a remoção do nodo, a função removeNode será retornada. E por último, o método remove será chamado passando a raiz da árvore e o dado que será removido. 
        this.root = removeNode(this.root, data); // aqui será chamado a função removeNode passando a raiz da árvore e o dado que será removido.
        function removeNode(node, value){ // aqui será criada a função que irá remover o nodo da árvore. Será passado como parâmetro o nodo e o dado que será removido.
            if(node === null) return null; // dentro da função, primeiramente será verificado se o nodo é nulo, caso seja, será retornado nulo.

            if(value < node.data){ // caso o nodo não seja nulo, será passado para o próximo bloco que irá verificar se o valor que será removido é menor que o valor do nodo atual.
                node.left = removeNode(node.left, value); // caso seja, a função removeNode será chamada recursivamente passando o próximo nodo filho a esquerda e o dado que será removido.
            }else if(value > node.data){ // se o valor que será removido for maior que o valor do nodo atual, será passado para o bloco else if
                node.right = removeNode(node.right, value); // e a função removeNode será chamada recursivamente passando o próximo nodo filho a direita e o dado que será removido.
            }else { // caso nenhum dos blocos seja verdadeiro, significa que o valor que será removido é igual ao valor do nodo atual, e será passado para o bloco else
                if(node.left === null){ // antes de remover o nodo, será verificado se o nodo a esquerda é nulo.
                    return node.right; // caso seja, o nodo a direita irá ocupar o lugar do nodo que será removido.
                }else if(node.right === null){ // depois será verificado se o nodo a direita é nulo.
                    return node.left; // caso seja, o nodo a esquerda irá ocupar o lugar do nodo que será removido.
                }else { // caso nenhum dos blocos seja verdadeiro, significa que o nodo tem dois filhos ou que o nodo a ser removido é a raiz da árvore, então irá passar para o bloco else
                    let temp = minValueNode(node.right); // será criado um nodo temporário que irá receber o menor nodo da sub-árvore da direita.
                    node.data = temp.data; // o nodo que será removido, irá receber o valor do nodo temporário.
                    node.right = removeNode(node.right, temp.data); // e o nodo temporário será removido.
                }
            }

            return node; // e o nodo será retornado.

            //OBS: Caso o ambas as sub-árvore estejam vazias, o nodo será removido sem alterações.
        }

        function minValueNode(node){ // aqui será criada a função que irá retornar o menor nodo da sub-árvore da direita.
            let current = node;
            while(current.left !== null){
                current = current.left;
            }

            return current;
        }


        //Esse método de remoção tem uma complexidade O(log n) desde que a árvore esteja balanceada. Caso a árvore não esteja balanceada, a sua complexidade de pior caso poderá ser até O(n).
    }
    

    /*VALOR MÍNIMO*/
    min(){ // Esse método irá nos mostrar o menor elemento presente na árvore. Para íniciar esse método, será criada uma variável chamada values que irá armazenar os valores dos nodos da árvore, e uma variável chamada min que irá receber o menor dado da árvore. Após a criação das variáveis, sera feita uma função chamada traverse que receberá o nodo como parâmetro, e irá percorrer a árvore apartir do nodo raiz com um percurso em-ordem, e irá armazenar os valores dos nodos no array values. Após toda a árvore ser percorrida, a variável min irá receber o menor valor do arrat values, como o percurso está em-ordem, o menor valor possívelmente estará na primeira posição do array values. Após a variável min receber o menor valor, ela será mostrada no console.
        let values = []; // aqui será criado um array vazio que irá armazenar os valores dos nodos da árvore.
        let min = 0; // aqui será criada uma variável que irá armazenar o menor valor da árvore.
        function traverse(node){ // aqui será criada a função que irá percorrer a árvore com um percurso em-ordem, e irá armazenar os valores dos nodos em um array.
            if(node !== null){ // aqui será verificado se o nodo é diferente de nulo.
                traverse(node.left); // caso seja, será chamado a função novamente passando o nodo a esquerda. Até que o nodo seja nulo.
                values.push(node.data); // ao encontrar um nodo nulo, o dado do nodo será inserido no array values.
                traverse(node.right); // e após todos os nodos da esquerda serem percorridos, será chamado a função novamente passando o nodo a direita. Até que o nodo seja nulo.
            }
        }

        traverse(this.root); // aqui a função traverse será chamada passando a raiz da árvore.
        min = Math.min(...values); // aqui a variável min irá receber o menor valor do array values.
        console.log(min); // aqui o menor valor da árvore será mostrado no console.

        //Esse método de busca tem uma complexidade O(n).
    }

    /*VALOR MÁXIMO*/
    max(){ // Esse método irá nos mostrar o maior elemento presente na árvore. Para íniciar esse método, será criada uma variável chamada values que irá armazenar os valores dos nodos da árvore, e uma variável chamada max que irá receber o maior dado da árvore. Após a criação das variáveis, sera feita uma função chamada traverse que receberá o nodo como parâmetro, e irá percorrer a árvore apartir do nodo raiz com um percurso em-ordem, e irá armazenar os valores dos nodos no array values. Após toda a árvore ser percorrida, a variável max irá receber o maior valor do arrat values, como o percurso está em-ordem, o maior valor possívelmente estará na última posição do array values. Após a variável max receber o maior valor, ela será mostrada no console.
        let values = []; // aqui será criado um array vazio que irá armazenar os valores dos nodos da árvore.
        let max = 0; // aqui será criada uma variável que irá armazenar o maior valor da árvore.

        function traverse(node){ // aqui será criada a função que irá percorrer a árvore com um percurso em-ordem, e irá armazenar os valores dos nodos em um array.
            if(node !== null){ // aqui será verificado se o nodo é diferente de nulo.
                traverse(node.left); // caso seja, será chamado a função novamente passando o nodo a esquerda. Até que o nodo seja nulo.
                values.push(node.data); // ao encontrar um nodo nulo, o dado do nodo será inserido no array values.
                traverse(node.right);// e após todos os nodos da esquerda serem percorridos, será chamado a função novamente passando o nodo a direita. Até que o nodo seja nulo.
            }
        }

        traverse(this.root); // aqui a função traverse será chamada passando a raiz da árvore.
        max = Math.max(...values); // aqui a variável max irá receber o maior valor do array values.
        console.log(max); // aqui o maior valor da árvore será mostrado no console.


        //Esse método de busca tem uma complexidade O(n).
    }

    /*ALTURA*/
    height(){ // Esse método irá nos mostrar a altura da árvore. Ou seja, qual o caminho mais logo da raiz da árvore até a sua folha mais profunda. Para íniciar esse método, será criada uma função chamada traverse que receberá o nodo como parâmetro, e irá percorrer a árvore apartir do nodo raiz com um percurso em-ordem. Dentro dessa função, será primeiramente verificado se o nodo é nulo, caso seja, será retornado zero, ou seja, não tem mais nodos para percorrer. Caso o nodo não seja nulo, será criada duas variáveis, uma chamada rigth que irá receber a função traverse passando o nodo a direita, e outra chamada left que irá receber a função traverse passando o nodo a esquerda. Após a criação dessas variáveis, será feito um retorno que irá retornar o maior valor entre rigth e left, mais um, ou seja, o caminho mais longo da raiz da árvore até a sua folha mais profunda. Após a função traverse ser chamada, o resultado será mostrado no console.
        function traverse(node){ // aqui será criada a função que irá percorrer a árvore com um percurso em-ordem, e irá retornar a altura da árvore.
            if(node === null){ // aqui será verificado se o nodo é nulo.
                return 0; // caso seja, será retornado zero. Ou seja, não tem mais nodos para percorrer.
            }else { // caso o nodo não seja nulo, será passado para o bloco else
                let rigth = traverse(node.right); // aqui será criada uma variável que irá receber a função traverse passando o nodo a direita.
                let left = traverse(node.left); // e outra variável que irá receber a função traverse passando o nodo a esquerda.

                return Math.max(rigth, left) + 1; // aqui será retornado o maior valor entre rigth e left, mais um. Ou seja, o caminho mais longo da raiz da árvore até a sua folha mais profunda.
            }
        }

        let result = traverse(this.root); // aqui a função traverse será chamada passando a raiz da árvore.
        console.log(result); // aqui a altura da árvore será mostrada no console.

        //Esse método tem uma complexidade O(n).
    }

    /*PERCURSO EM PRÉ-ORDEM*/
    preOrder(){ // Esse método irá percorrer a árvore em pré-ordem, ou seja, será mostrado os nodos raiz das sub-árvores, depois os nodos a esquerda e por último os nodos a direita. Para íniciar esse método, será criada uma variável chamada values que irá armazenar todos os dados em um array, depois será criada uma função chamada traverse que irá percorrer a árvore em pré-ordem, armazenando primeiramente o dado do nodo raiz, depois os dados dos nodos a esquerda e por último os dados dos nodos a direita. Após a árvore ser percorrida, o array values será mostrado no console.
        let values = []; // aqui será criado um array vazio que irá armazenar os valores dos nodos da árvore.
        function traverse(node){ // aqui será criada a função que irá percorrer a árvore em pré-ordem, e irá armazenar os valores dos nodos em um array.
            if(node !== null){ // aqui será verificado se o nodo é diferente de nulo.
                values.push(node.data); // caso seja, o dado do nodo será inserido no array values.
                traverse(node.left); // após o dado do nodo ser inserido, será chamado a função novamente passando o nodo a esquerda.
                traverse(node.right); // e por último, será chamado a função novamente passando o nodo a direita.
            }
        }

        traverse(this.root); // aqui a função traverse será chamada passando a raiz da árvore.
        console.log(values); // aqui o array values será mostrado no console.

        //Esse método tem uma complexidade O(n).
    }


    /*PERCURSO EM PÓS-ORDEM*/
    postOrder(){ // Esse método irá percorrer a árvore em pós-ordem, ou seja, será mostrado os nodos a esquerda, depois os nodos a direita e por último os nodos raiz das sub-árvores. Para íniciar esse método, será criada uma variável chamada values que irá armazenar todos os dados em um array, depois será criada uma função chamada traverse que irá percorrer a árvore em pós-ordem, armazenando primeiramente os dados dos nodos a esquerda, depois os dados dos nodos a direita e por último os dados dos nodos raiz das sub-árvores. Após a árvore ser percorrida, o array values será mostrado no console.
        let values = []; // aqui será criado um array vazio que irá armazenar os valores dos nodos da árvore.
        function traverse(node){ // aqui será criada a função que irá percorrer a árvore em pós-ordem, e irá armazenar os valores dos nodos em um array.
            if(node !== null){ // aqui será verificado se o nodo é diferente de nulo.
                traverse(node.left); // caso seja, será chamado a função novamente passando o nodo a esquerda.
                traverse(node.right); // após o nodo a esquerda ser percorrido, será chamado a função novamente passando o nodo a direita.
                values.push(node.data); // e por último, o dado do nodo será inserido no array values.
            }
        }

        traverse(this.root); // aqui a função traverse será chamada passando a raiz da árvore.
        console.log(values); // aqui o array values será mostrado no console.

        //Esse método tem uma complexidade O(n).
    }

    /*MOSTRANDO OS VALORES DA ÁRVORE*/
    values(){ // Esse método irá nos mostrar os dados em ordem crescente que estão presentes na árvore. Para íniciar esse método, será criada uma variável chamada val que irá armazenar todos os dados em um array, depois será criada uma função chamada traverse que irá percorrer a árvore em-ordem, e irá armazenar os valores dos nodos em um array. Após a árvore ser percorrida, o array val será mostrado no console. Assim mostrando os valores.
        let val = []; // aqui será criado um array vazio que irá armazenar os valores dos nodos da árvore.

        function traverse(node){ // aqui será criada a função que irá percorrer a árvore com um percurso em-ordem, e irá armazenar os valores dos nodos em um array.
            if(node !== null){
                traverse(node.left);
                val.push(node.data);
                traverse(node.right);
            }
        }

        traverse(this.root);
        console.log(val); // aqui o array val será mostrado no console.
    }
}

/*UTILIZANDO AS PROPRIEDADES E MÉTODOS*/
const tree = new Tree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(2);
tree.insert(1);
tree.delete(10);
tree.values();
tree.min();
tree.max();
tree.height();
tree.preOrder();
tree.postOrder();
tree.search(5);
tree.search(1);
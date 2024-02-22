/*Lista duplamente encadeada*/

/*  Uma lista duplamente encadeada é similar a lista simplesmente encadeada, porém com algumas diferenças e vantagens. Na lista simplesmente encadeada, existe os nós e cada nó contém um espaço para a referência do próximo nó (chamado ponteiro) e contém a cabeça da lista (head) que irá armazenar o primeiro nó da lista e apartir dele será possível acessar os outros elementos da lista. Na lista duplamente encadeada, além dos nós que contém a referência para o próximo nó e a sua cabeça (head), ela também contém uma referência para o elemento anterior da lista, assim ela contendo dois ponteiros, um que aponta para o elemento anterior e outro que aponta para o próximo. Além dessa adição, a lista duplamente encadeada contém um nó no final (tail) da lista que retorna nulo, assim mostrando que a lista chegou ao fim.*/
/*   Ambas as lista pode ser implementadas de forma dinâmica ou estática. A lista dinâmica é alocada dinâmicamente na memória, ou seja, a mémoria é alocada conforme os dados são inseridos na lista. Já a estática, é alocada estaticamente na memória, ou seja, os dados são alocados em um espaço pré definido na memória. A lista duplamente encadeada tem vantagens sobre a lista simplesmente encadeada, podendo ser possível percorrer a lista em ambas as direções, podendo ser possível remover um nó da lista sem precisar percorrer a lista inteira. A sua desvantagem é que ela ocupa mais espaço em memória, pois contém um ponteiro a mais que a lista simplesmente encadeada, e dependendo do tamnho da sua lista, pode duplicar o seu tamanho ocupado na memória.
*/

/*Apartir de agora iremos implementar a lista duplamente encadeada.*/

class Node { // aqui é criado uma classe node que será a responsável por criar os nós da lista.
    constructor(element){ // o construtor da classe receberá um parâmentro chamado element que armazenará o dado do nó que será armazenado na lista.
        this.element = element; // aqui é criado uma propriedade chamada element que irá armazenar o dado que foi fornecido na criação do nó.
        this.next = null; // aqui é uma propriedade que armazenará a referência para o próximo nó da lista. Ela será inicializada como null, pois não há nenhum nó para ser referênciado enquanto a lista estiver vazia.
        this.prev = null; // aqui é uma propriedade que armazenará a referência para o nó anterior da lista. Ela será inicializada como null, pois não há nenhum nó para ser referênciado enquanto a lista estiver vazia.
    }
}

class DoubleLinkedList{ // aqui é criado a classe da lista duplamente encadeada.
    constructor(){ // esse construtor da classe irá inicializar a lista com a cabeça e o final da lista.
        this.head = null; // aqui está sendo criada a propriedade head que irá armazenar o primeiro nó da lista.
        this.tail = null; // aqui está sendo criada a propriedade tail que irá armazenar o último nó da lista.
        this.length = 0; // aqui está sendo criada a propriedade length que irá armazenar o tamanho da lista.
    }

    append(element){ // o método append irá adicionar um nó no final da lista.
        let newNode = new Node(element); // aqui é criado a instância de um novo nó que irá armazenar o dado que foi fornecido na hora da utilização do método append.
        if(this.head === null){ // essa estrutura if irá verificar se a lista está vazia.
            this.head = newNode; // caso a lista esteja vazia, head irá receber o nó que foi criado, e esse nó se tornará o primeiro nó da lista.
            this.tail = newNode; // e tail irá receber o nó que foi criado, e esse nó se tornará o último nó da lista.
        }else { // caso a instrução acima retornar falso, significa que a lista não estpa vazia, assim executará a instrução abaixo.
            newNode.prev = this.tail; // o nó que foi criado irá receber a referência para o nó anterior da lista.
            this.tail.next = newNode; // logo em seguida a referência para o próximo nó da lista irá ser o nó que foi criado.
            this.tail = newNode; // e o nó que foi criado se tornará o último nó da lista.
        }
        this.length++; // a cada nó que é criado, o tamanho da lista irá incrementar mais 1.

        //OBS: No caso desse método, estamo inserindo um nó para a direito da lista, ou seja, no final da lista. E sua complexidade é O(1). Pois como iremos apenas adicionar um elemento, não temos estruturas que dependerá do tamanho da lista.
    }

    prepend(element){ // esse método irá armazenar um nó no início da lista.
        let newNode = new Node(element); // aqui é criado o novo noó que irá armazenar o dado que foi fornecido na hora da utilização do método prepend.
        if(this.head === null){ // essa estrutura if irá verificar se a lista está vazia. Caso a lista esteja vazia, irá executar a instrução abaixo.
            this.head = newNode; // a cabeça da lista irá receber o nó que foi criado. Assim o tornando o primeiro da lista.
            this.tail = newNode; // e o final da lista também irá receber o nó que foi criado. Assim o tornando o último da lista.
        }else { //  caso a estrutura if acima retorne falso. Quer dizer que há elementos na lista, assim executará a instrução abaixo.
            newNode.next = this.head; // o nó que foi criado irá receber a referência para o próximo nó da lista.
            this.head.prev = newNode; // e a cabeça da lista irá receber a referência para o nó que foi criado.
            this.head = newNode; // e em seguida o nó que foi criado se tornará o primeiro nó da lista.
        }
        this.length++; // a cada nó que é criado, o tamanho da lista irá incrementar mais 1.

        //OBS: No casso desse método, estamos adicionando elementos a esquerda da lista, ou seja, no seu início. Por isso as instruções de certa forma estão de modo inverso ao primeiro método. E sua complexidade é O(1). Pois como iremos apenas adicionar um elemento, não temos estruturas que dependerá do tamanho da lista.
    }

    get(position){ // esse método irá retornar o elemento de uma posição que foi fornecida.
        if(position < 0 || position > this.length){ // essa estrutura if irá verificar se a poisção fornecida é válida. Verificando se ela é uma posição negativa ou se ela é maior que o tamanho da lista.
            return (console.log('Position is not found!!')); // caso a verificação retorne verdadeira, irá retornar a mensagem de erro.
        }

        let current = this.head; // após a verificação da posição, será criada uma variável chamada current que irá receber a cabeça da lista. Essa variável será responsável por percorrer a lista.
        let count = 0; // aqui é criada uma variável chamada count que irá armazenar a quantidade de vezes que a lista foi percorrida.

        while(current !== null && count < position){ // essa estrutura irá percorrer a lista até que a posição fornecida seja encontrada. Com as condições de que a variável current seja diferente de nulo e que a variável count seja menor que a posição fornecida.
            current = current.next; // enquanto a condição acima retornar verdadeira, a variável current irá receber a referência para o próximo nó da lista. Assim todos os elementos da lista passando por current, o que possibilitará a busca do elemento que está na posição fornecida.
            count++; // e o contador irá adicionar mais um a si mesma.
        }
        
        return current !== null ? current.element : console.log('Element not found!!'); // e aqui será retornado o elemento que está na posição fornecida. Caso o elemento da posição fornecida não seja encontrada, irá retornar a mensagem de erro.

        //OBS: Esse método percorre toda a lista até encontrar a posição fornecida. E sua complexidade é O(n). Pois a quantidade de operações realizadas dependerá do tamanho da lista.
    }

    removeFist(){ // esse método irá remover os elementos do início da lista. Sempre removendo o nó que está na cabeça da lista.
        if(this.head === null){ // essa estrutura if verificará se a lista está vazia. Com a condição de que a cabeça da lista seja igual a nulo.
            return console.log('List is empty'); // caso a condição retorne verdadeira, irá retornar a mensagem de erro.
        }

       if(this.head === this.tail){ // essa estrutura if irá verificar se a lista possui apenas um elemento. Com a condição de que a cabeça da lista seja igual ao final da lista.
            this.head = null; // caso a condição retorne verdadeira, tanto a cabeça da lista quanto o final da lista irá receber nulo. Assim a lista estará vazia.
            this.tail = null;
            return;
       }else { // caso a estrutura acima retorne falso, quer dizer que a lista possui mais de um elemento e assim executará a instrução abaixo.
            this.head = this.head.next; // a cabeça da lista receberá a referencia para o próximo elemento, assim adicionando o próximo elemento no inicio da lista. E como consequencia, o primeiro elemento da lista será removido.
            this.head.prev = null; // e como foi o primeiro elemento da lista que foi removido, a referência para o nó anterior da lista irá receber nulo. Pois não há mais nenhum elemento antes do primeiro elemento da lista.
       }

       //OBS: Esse método irá sempre remover o primeiro elemento da lista. E sua complexidade é O(1). Pois não temos estruturas que dependerá do tamanho da lista, já que estamos lidando com variáveis constantes, removendo sempre o primeiro elemento da lista.
    }

    removeLast(){ // esse método irá remover o último elemento da lista. sempre removendo o nó que está no final da lista.
        if(this.tail === null){ // essa estrutura if irá verificar se a lista está vazia. Com a condição de que o final da lista seja igual a nulo.
            return console.log('List is empty'); // caso a verificação retorne verdadeiro, irá retornar a mensagem de erro.
        }

        if(this.head === this.tail){ // essa estrutura if irá verificar se a lista possui apenas um elemento. Com a condição de que a cabeça da lista seja igual ao final da lista.
            this.head = null; // caso a condição retorne verdadeira, iremos remover o único elemento da lista atribuindo nulo a cabeça da lista e o final da lista.
            this.tail = null;
            return;
        }else { // caso a condição acima retorne falso, quer dizer que a lista possui mais de um elemento e assim executará a instrução abaixo.
            this.tail = this.tail.prev; // o final da lista irá receber a referência para o nó anterior da lista, assim removendo o último elemento da lista e adicionando o elemento anterior como o último da lista.
            this.tail.next = null; // e como não existe elemento após o último elemento da lista, a referência para o próximo nó da lista irá receber nulo.
        }

        //OBS: esse método remove sempre o último elemento da lista. E sua complexidade é O(1). Pois não temos estruturas que dependerá do tamanho da lista, já que estamos lidando com variáveis constantes, removendo sempre o último elemento da lista.
    }

    delete(position){ // esse métoo irá remover um elemento de uma posição que foi definida.
        if(this.head === null || position < 0 || position > this.length){ // essa estrutura if irá verificar se a lista está vazia ou se a posição fornecida é válida. Com as condições de que a cabeçã da lista seja igual a nulo ou se a posição fornecida é menor que 0 ou se a posição é maior que o tamanho da lista.
            return console.log('List is empty or position is not defined'); // caso a condição seja verdadeira, irá retornar a mensagem de erro.
        }

        if(position === 0){ // esse método irá verificar se a posição fornecida é igual a 0, ou seja, se o elemento que será removido é o primeiro da lista.
            this.head = this.head.next; // caso retorne verdadeira a condição, a cabeça da lista irá receber a referência para o próximo nó da lista, assim removendo o nó que está no início da lista.
            this.head.prev = null; // e como sendo o primeiro nó da lista, não haverá nenhum nó antes dele, assim a referência para o nó anterior da lista irá receber nulo.
        }

        let current = this.head; // após as verificações acima, será criada uma variável que irá armazenar o primeiro nó da lista, ou o nó atual. Essa variável será utilizada para percorrer a lista.
        let previous = null; // aqui é uma variável que armazenará o nó anterior da lista. Essa variável será útil para que quando um elemento de uma posição determinada seja deletado, o elemento anterior ao novo elemento atual seja o elemento anterior ao elemento removido. Exemplo: temos 3 elementos A,B E C. Se o elemento B for removido, o elemento A será o elemento anterior ao elemento C.
        let count = 0; // aqui é criada uma variável que será utilizada para contar a quantidade de vezes que a lista foi percorrida.

        while(current !== null && count < position){ // aqui temos uma estrutura de repetição que será usada para percorrer toda a lista. Com as condições de que a variável current seja diferente de nulo e que a variável counnt seja menor que a posição fornecida.
            current = current.next; // enquanto as codições acima retornarem verdadeira, a variável current irá receber a referência para o próximo nó da lista. Assim todos os elementos da lista passará por current, o que possibilitará a busca do elemento que está na posição fornecida.
            previous = current.prev; // e previous receberá o elemento anterior ao elemento atual.
            count++; // e a cada operação, a variável count irá incrementar mais 1.
        }

        if(current === null){ // após o loop terminar, será verificado se o elemento que foi encontrado da posição fornecida é igual a nulo.
            return console.log('Position not found'); // caso a verificação retorne verdadeira, irá retornar a mensagem de erro. Assim mostrando que a posição fornecida não foi encontrada.
        }

        if(current.next !== null){ // essa estrutura if irá verificar se o elemento encontrado tem o seu próximo elemento diferente de nulo.
            current.next.prev = previous; // caso a condição retorne verdadeiro, o próximo elemento do elemento que foi encontrado e deletado irá receber a referência para o elemento anterior do elemento que foi encontrado e deletado.
        } // essa estrutura irá fazer com que o elemento anterior ao elemento que foi deletado, seja atribuido como o elemento anterior do elemento posterior ao elemento que foi deletado.

        return true;

        //OBS: Esse método irá remover um elemento de uma posição fornecida. E sua complexidade é O(n). Pois temos estruturas nesse método que dependerá do tamanho da lista para que suas operações sejam realizadas.
    }

    value(){ // esse método irá nos mostrar os elementos que tem na lista.
        let current = this.head; // aqui criamos uma várivel que irá receber a cabeça da lista. Essa variável será utilizada para percorrer a lista.
        while(current !== null){ // esse loop irá percorrer a lista enquanto a condição de que a variável current seja diferente de nulo.
            console.log(current.element); // enquanto o loop acontecer, será mostrado no console o elemento que está no nó atual.
            current = current.next; // e o elemento atual irá receber a referência para o próximo nó da lista. Assim todos os elementos da lista passando por current, oque possibilitará que todos os elementos da lista sejam mostrados no console.
        }
    }

    //OBS: Esse método irá mostrar todos os elementos da lista. E sua complexidade é O(n). Pois temos estruturas que dependerá do tamanho lista para que as operações sejam realizadas.
}

//Aqui temos a implementação da lista duplamente encadeada. E abaixo temos a utilização da lista duplamente encadeada.

let newList = new DoubleLinkedList(); // estamos criando uma nova instância da lista duplamente encadeada. Essa instância será utilizada para que possamos utilizar os métodos da lista duplamente encadeada.
newList.append(1); // aqui utilizamos o método append para adicionar o elemento 1 ao final da lista.
newList.append(2); // aqui utilizamos o método append para adicionar o elemento 2 ao final da lista.
newList.delete(0); // e aqui deletamos o elemento que está na posição 0 da lista. Ou seja, o elemento 1.
//console.log(newList.get(0));
console.log(newList.value()); // e aqui mostramos no console os elementos que tem na lista. Como o elemento 1 foi deletado, só irá mostrar o elemento 2.
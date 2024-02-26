/*Lista encadeada*/

/*Uma lista encadeada ou lista ligada é uma estrutura dinâmica e linear, aonde é composta por vários nós. Cada nó contém o dado que será armazenado e um ponteiro que irá apontar para o próximo nó da lista. Os elementos da lista são alocados dinâmicamente na memória conforme cada novo dado é armazenado dentro de um nó na lista. A cada dado removido da lista, a memória em que esse dado foi criado, será desalocada, assim liberando espaço na memória. Também é possível criar uma lista encadeada com alocação estática, aonde se é usado um array com tamanho definido.*/

/*Aqui é criado uma classe node que criará os nós aonde será armazenado os dados da lista.*/
class Node{
    constructor(data){ // esse construtor recebe um parâmetro chamado "data", esse data representa os dados que serão armazenados na lista.
        this.data = data; // essa propriedade "data", irá armazenar o argumento data, ou seja, armazenará o dado da lista.
        this.next = null; // essa propriedade "next", será o ponteiro que dará referência ao próximo nó da lista. Ele será inicializado como null, pois não há nenhum para ser referênciado enquanto a lista estiver vazia.
    }
}

class List{ // a class list, cria a lista em si. Dentro dessa classe, será armazenado os métodos de inserção e remoção de dados, método para mostrar os dados armazenados na lista, método de limpeza da lista, métodos para verificar se a lista está cheia ou vazia, e entre outros métodos que podem ser inseridos dentro da classe. 
    constructor(){
        this.head = null; // dentro do construtor da lista, será criada uma propriedade chamada "head". O head servirá para mostrar o começo da lista, apontando para o primeiro nó da lista
        //obs: Apartir do momento que head aponta para o primeiro nó, seguindo as referências da propriedade next, será possível percorrer toda a lista. 
    }

    appended(data){ // o método appended, adicionará valores a lista.
        let newNode = new Node(data); // sempre que esse método for chamado, será criado um novo nó que armazenará o dado que foi requerido na hora da utilização do método.
        if(this.head === null){ // essa estrutura if, verifica se head é igual a null.
            this.head = newNode; // se head for null (não contém nenhum valor), head irá receber o nó que foi criado, e esse nó se tornará o primeiro nó da lista.
            return;
        } else { // o else irá executar uma instrução caso a estrutura if acima retorne falso. Resumindo, irá executar uma instrução diferente caso a propriedade head seja diferente de null. 
            let current = this.head; // caso head seja diferente de null, será criada essa váriavel "current" que irá iniciar com o primeiro nó da lista.
            while(current.next !== null){ // essa estrutura while percorrerá a lista até encontrar um nó que que aponte para null (que não contenha próximo nó). Esse loop ocorrerá enquanto o próximo nó que for referênciado seja diferente de null.
                current = current.next; // enquanto a comparação acima não retornar true, a variável current receberá a referência para o próximo valor da lista.
            }
            current.next = newNode // após ele encontrar um nó que referêncie para null, current irá receber um novo nó, assim tornando ele o último da lista. Essa instrução serve para estender a lista, conectando o último nó da lista a um novo nó que foi criado. 

            /*obs: a instrução current.next referência ao próximo nó da lista*/
        }
    }

    get(position){ // o método get retorna um valor em alguma posição específica da lista.
        if(position < 0){ // essa estrutura if verifica se a posição fornecida é menor que 0.
            return undefined; // caso a posição fornecida seja um número negativo, retornará undefined.
        }

        let current = this.head; // caso a estrutura if acima retorne falso, será criada uma váriavel chamada current que irá receber o primeiro nó da lista.
        let count = 0; // e também será criado um contador que será iniciado em 0. Esse contador será utilizado para contar a posição dos nós da lista.
        while (current !== null && count < position) { // essa estrutura while percorrerá a lista até encontrar a posição que foi fornecida. O loop irá acontecer enquanto current for diferente de null e count(contador de posições) for menor que a posição que foi fornecida.
            current = current.next; // enquanto o loop ocorrer current irá receber a referência para o próximo nó da lista.
            count++; // e o contador irá incrementar mais 1 a cada loop. Assim contando a posição dos nós da lista.
        }
        return current !== null ? current.data : undefined; // caso a posição seja encontrada, retornará o valor que está armazenado dentro do nó que foi encontrado. Caso contrário, retornará undefined.
    }

    delete(position){ // o método delete, irá remover um nó da lista.
        if(this.head === null || position < 0){ // essa estrutura if verifica se a lista está vazia ou se a posição fornecida é menor que 0.
            return console.log('List is empty or position is not defined') // se a lista estiver vazia ou a posição que foi solicitada for menor que 0, retornará essa mensagem dizendo que a fila está vazia, ou a posição não está definida.
        }

        if(position === 0){ // essa estrutura if irá verificar se a posição fornecida para ser removida é a posição 0. No caso a primeira posição da lista.
            this.head = this.head.next; // caso a posição seja 0 (primeira posição da lista), head irá receber a referência para o próximo nó da lista. Assim removendo o primeiro nó da lista.
            return;
        }

        /*Aqui iremos iterar essa lista para chegar até a posição que foi fornecida para que um dado seja deletado da lista*/

        let current = this.head; // enquanto a lista estiver vazia, current irá receber o primeiro nó da lista.
        let previous = null; // será criada uma váriavel chamada previous que será incializada como null. Essa váriavel será utilizada para armazenar a referência do nó anterior ao nó que será removido.
        let count = 0; // e será criado um contador iniciado em 0, que será utilizado para contar a posição dos nós da lista.

        while(current !== null && count < position){ // essa estrutura irá repetir um loop até encontrar a posição que foi fornecida. O loop irá acontecer enquanto current for diferente de null e count(contador de posições) for menor que a posição que foi fornecida.
            previous = current; // enquanto o loop ocorrer, previous (anterior) irá receber a referência do nó atual da lista.
            current = current.next; // e logo em seguida current(atual) irá receber a referência para o próximo nó da lista.
            count++; // e o contador irá incrementar mais 1 a cada loop. Assim contando a posição dos nós da lista.
        }

        if(current !== null){ // irá verificar se a posição fornecida é válida, ou seja, se contém algum elemento dentro do nó que foi fornecido.
            previous.next = current.next; // se tiver algum elemento dentro do nó que foi fornecido, previous irá receber a referência para o próximo nó da lista, assim removendo o nó que foi fornecido.

            return true; // e retornará true, dizendo que o nó foi removido com sucesso.
        }

        console.log('Position not found') // se a posição fornecida não for válida, retornará essa mensagem dizendo que a posição não foi encontrada.
    }

    values(){ // o método values, irá mostrar os valores que estão armazenados na lista.
        let current = this.head; // o current irá receber o primeiro nó da lista.
        let values = []; // aqui é criado um array vazio que será utilizado para armazenar os valores que estão dentro dos nós da lista.
        while(current !== null){// estrutura while irá percorrer a lista até encontrar um nó que referêncie para null. O loop irá acontecer enquanto current for diferente de null.
            values.push(current.data); // e enquanto o loop ocorrer, os valores que vão sendo encontrados dentro dos nós serão armazenados dentro do array values.
            current = current.next; // e logo em seguida current irá receber a referência para o próximo nó da lista.

            /*E assim a cada elemento encontrado, ele será armazenado dentro do array para que eles sejam exibidos na tela ou console.*/
        }

        return values;
    }
}

/*A seguir irei criar uma instância da classe list aonde será possível trabalha com os métodos da lista que foi criada.*/

let listNames = new List(); // aqui é criada uma instância da classe list que irá armazenar os métodos da lista.

listNames.appended(1); // aqui é chamado o método appended que irá adicionar um valor a lista.
listNames.appended(2);
listNames.appended(3);
listNames.delete(1); // aqui é chamado o método delete que irá remover um valor da lista.
console.log(listNames.get(1)); // aqui é chamado o método get que irá retornar um valor em uma posição específica da lista.
console.log(listNames.values()); // aqui é chamado o método values que irá retornar todos os valores que estão armazenados na lista.
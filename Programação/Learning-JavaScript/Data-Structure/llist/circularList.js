/*Lista circular*/

/*  A lista circular apresenta diferenças em relação a uma lista encadeada simples ou a uma lista duplamente encadeada. Em uma lista circular, não há um nó específico designado como o primeiro ou o último. Em vez disso, a lista circular possui um nó que indica qual é o nó principal da lista, podendo ser tanto o primeiro quanto o último nó. Ao contrário dos outros dois tipos de listas, na lista circular, quando se chega ao último nó, ele não referencia nulo; em vez disso, ele aponta de volta para o primeiro nó da lista. Isso cria um ciclo contínuo, permitindo que a lista circule do início ao fim e do fim de volta ao início.*/

/*Aqui iremos implementar a lista circular:
    Primeiramente, iremos criar uma classe node que será o nosso nó que contém as propriedades data e next; Data será o nosso dado que iremos armazenar e next guardará a referência para o próximo nó. Depois criaremos a classe da lista em si, aonde será armazenado os métodos de inserção, remoção, visualização e outros possíveis métodos.*/

class Node{ // essa classe irá conter as propriedades data e next que será o dado e a referência para o próximo nó. Ao ser insatanciada, ela irá criar um nó com o dado e a referência para o próximo nó.
    constructor(data){ // esse construtor irá criar um nó com o dado e a referência para o próximo nó
        this.data = data; // aqui será armazenado o dado.
        this.next = null; // aqui será armazenado a referência para o próximo nó.
    }
}

class CircularList{ // essa classe irá conter os métodos de inserção, remoção, visualização e outros possíveis métodos da nossa lista. E também irá conter a propriedade head que será a referência para o nó principal da lista e a propriedade size que será a quantidade de nós que a lista contém.
    constructor(){ // esse construtor irá criar a propriedade head e size.
        this.head = null; // a propriedade head será a referência para o nó principal da lista.
        this.size = 0; // e size armazenará a quantidade de nós que a lista contém.
    }

    advanced(){ // esse método irá avançar a referência para o próximo nó principal.
        this.head = this.head.next; // aqui a referência para o próximo nó principal será atualizada. aonde head irá receber a referência para o próximo nó do nó atual.
    }

    append(data){ // esse método adicionará um novo nó na lista. Com o parâmetro data sendo o dado que será armazenado no nó. Exemplo: list.append(0(o número que será armazenado no nó));
        let node = new Node(data); // aqui a classe node será instanciada e será criado um novo nó com o dado passado como parâmetro.	
        if(this.head === null){ // essa estrutura if irá verificar se a nossa referência para o nó principal é nula. Se for, quer dizer que a lista está vazia e o nó que estamos adicionando será o principal nó da lista.
            this.head = node; // aqui a referência para o nó principal será atualizada e irá receber o nó que acabamos de criar.
            node.next = this.head; // e para que a lista seja circular, a referência para o próximo nó do nó que acabamos de criar será o próprio nó que acabamos de criar.
        }else { // caso haja mais nós na lista, o nó que estamos adicionando será o novo nó principal da lista.	
            node.next = this.head.next; // aqui a referência para o próximo nó do nó que acabamos de criar será o próximo nó do nó principal. Ou seja, o nó que acabamos de criar será o novo nó principal da lista e a referência para o próximo nó do nó que acabamos de criar será o próximo nó do nó principal.
            this.head.next = node;  // e aqui a referência para o próximo nó do nó principal será atualizada e irá receber o nó que acabamos de criar. Ou seja, o nó principal da lista irá apontar para o nó que acabamos de criar.
        }

        this.advanced(); // aqui a referência para o próximo nó principal será atualizada.
        this.size++; // e aqui a cada inserção, a quantidade de nós da lista será incrementada.
    }

    remove(){ // esse método irá remover o nó principal da lista.
        let current = this.head; // uma variável chamada current será criada e irá receber a referência para o nó principal da lista.
        if(this.size === 1) return this.head = null; // caso a lista contenha apenas um nó, o nó principal será removido e a referência para o nó principal será nula.

        for(let i = 0; i < this.size - 1; i++){ // esse loop irá percorrer a lista até o último nó.
            this.advanced(); // a cada loop, a referência para o próximo nó principal será atualizada.
        }

        this.head.next = current.next; // após o loop, a referência para o próximo nó do nó que atualmente é o principal será atualizada e irá receber a referência para o próximo nó do nó principal. Ou seja, o nó que atualmente é o principal será removido e o próximo nó do nó principal será o novo nó principal.
        current.next = null; // e a referência para o próximo nó do nó que atualmente é o principal será nula. Ou seja, o nó que atualmente é o principal será removido.
        
        this.size--; // e a cada remoção de um nó, a quantidade de nós da lista será decrementada.

        /* OBS: O que esse código faz no geral é se mover até o penúltimo nó na lista. A cada iteração no loop, ele avança a referência do nó principal para o próximo nó. Quando o penúltimo nó é alcançado, ele muda a referência do próximo nó do penúltimo nó para o próximo nó do nó principal, e a referência do próximo nó do nó principal é definida como nula, consequentemente deletando o nó principal da lista.*/
    }

    delete(position){ // esse método irá deletar apartir de uma posição específica.
        if(position === 0){ // essa estrutura if irá verificar se a posição fornecida é 0. Caso seja siginifica que queremos remover o nó principal da lista.
            this.remove(); // caso a estrutura acima retorne verdadeiro, o método remove será chamado e o nó principal será removido.
            return true;
        }
        if(position >= this.size || position < 0) return console.log('Position not found'); // essa estrutura if irá verificar se a posição fornecida é válida, com as condições de que a posição fornecida seja menor quer 0, se for menor que 0 significa que ela não existe, e se for maior que a quantidade de nós que a lista contém, também não existe. E retornará uma mensagem dizendo que a posição não foi encontrada.

        let current = this.head; // após a verificação da posição, será criada uma variável chamada current que irá receber a referência para o nó principal da lista.
        let prev = null; // e também será criada um variável prev que servirá como referência para um nó anterior. Será iniciada como nula, pois não há nenhum nó anterior ao nó principal.
        let count = 0; // e um contador que será iniciado em 0, que será utilizado para contar a posição dos nós da lista. A cada iteração do futuro loop, o contador será incrementado, assim indicando qual é a posição do nó que estamos percorrendo.

        while(count < position){ // esse loop percorrerá pela lista até que a referência para o próximo nó do nó que estamos percorrendo seja o nó principal e o contador seja menor que a posição que foi fornecida.
            prev = current; //  a cada iteração, o prev recebe o nó atual que está sendo percorrido.
            current = current.next; // e o nó atual atualiza a referência para o próximo nó.
            count++; // e o contador é incrementado.

            /*OBS: prev sempre será o nó anterior ao atual, pois ele receberá o nó atual, e após ele receber o nó atual, o nó atual já será atualizado para o próximo nó.*/
        }

        if(current !== null){ // após o nosso loop terminar e a posição for encontrada, será verificado se o nó atual é diferente de nulo.
            prev.next = current.next; // se for, a referência para o próximo nó do nó anterior ao nó que queremos remover será atualizada e irá receber a referência para o próximo nó do nó que queremos remover. Assim removendo o nó que queremos remover.
            current.next.prev = prev; // após a remoção do nó principal e a referência daquele antigo nó principal se torna o nó principal, iremos atualizar o nó anterior desse novo nó principal para que ele aponte para o nó anterior daquele nó que removemos. Exemplo se o nó principal era o nó 2, seu anterior era o nó 1, e o seu próxima era o nó 3, após a remoção do nó 2, o nó 3 se torna o nó principal, e o seu anterior será o nó 1. 

            this.size--; // a cada remoção de um nó, a quantidade de nós da lista será decrementada.
            return true;
        }
    }

    values(){ // esse método irá mostrar os valores que estão armazenados na lista.
        if(this.head === null) return console.log('List is empty'); // caso a referência para o nó principal seja nula, quer dizer que a lista está vazia e retornará uma mensagem dizendo que a lista está vazia.

        let current = this.head; // será criada uma variável current que receberá a referência para o nó principal da lista. Essa variável será utilizada para percorrer a lista.
        do{ // esse método while irá percorrer a lista até encontrar o elemento principal novamente
            console.log(current.data); // a cada loop, será mostrado no console o valor que está armazenado no nó que está sendo percorrido.
            current = current.next; // e o nó atual será atualizado para o próximo nó.
        }while(current !== this.head);
    }
}

/*Aqui iremos testar a nossa lista circular*/

let list = new CircularList(); // será criada uma instâcia da nossa lista circular.
list.append(1); // e aqui é usado o método append que irá armazenar um elemento na lista.
list.append(2);
list.append(3);
list.append(4);


list.delete(1); // aqui é usado o método delete que irá remover um elemento da lista em um posição especifíca.
list.remove(); // aqui é usado o método remove que irá remover o nó principal da lista.
console.log(list.values()); // e aqui é usado o método values que irá mostrar os valores que estão armazenados na lista.
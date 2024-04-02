/*RED-BLACK TREES*/

/* As red-black trees é um tipo de árvore binária de busca balanceada, aonde cada nodo da árvore tem um atributo de cor, sendo eles preto ou vermelho. Esses atributos de cores é utilizado para que seja evitado o desbalanceamento da árvore, pois segue as segunites regras:

    1. Cada nodo é vermelho ou preto.
    2. A raiz será preta (em algumas outras implementações, a raiz pode ser vermelha, também podendo ser alterada de vermelha para preta, mas não pode ser alterada de preta para vermelha).
    3. Cada nodo folha (NIL) é preto.
    4. Se um nodo é preto, então ambos os seus filhos são vermelhos. E vice-versa. 
    5. Para cada nodo, todos os caminhos daquele nodo até os nodos folha descendentes contêm o mesmo número de nodos pretos.
*/

/* Com essas regras, é assegurado que o caminho mais longo da raiz a qualquer folha não seja mais do que duas vezes o caminho mais curto da raiz a qualquer outra folha da árvore. Durante a inserção de elementos na árvore, como descrito pelas regras acima*/
/*  Por exemplo, consideremos a seguinte situação: o nó raiz é o nodo 10 e queremos inserir o nodo 5. O nodo 5 será inserido como filho à esquerda do nodo 10 e será atribuída a cor vermelha. Em seguida, desejamos inserir o nodo 3. O nodo 3 será menor que o nodo raiz 10 e, portanto, será inserido à esquerda do nodo 5. No entanto, o nodo 5 já é um filho vermelho do nodo 10, violando a propriedade das cores dos nós. Para corrigir isso, será realizada uma rotação de nós. O nodo 5 será rotacionado para a esquerda, tornando-se o novo nó raiz, enquanto o nodo 10 será rotacionado para a direita, tornando-se o filho à direita do nodo 5. Então, o nodo 3 será inserido como filho à esquerda do nodo 5. Após a correção, a cor dos nodos 5 e 10 será ajustada, com o nodo 5 tornando-se preto e o nodo 10 tornando-se vermelho. Assim, a árvore satisfaz todas as regras da árvore red-black.*/

/* Devido a essa rotação e regras, o método de inserção acaba tendo um tempo de maior e terá uma complexidade maior devido ao algoritmo de rotação dos nodos. Ainda assim a red-black tree tem um bom pior caso, sendo O(log n). Se comparado com uma árvore comum e que está desbalanceada, o seu tempo de execução se tornou um pouco maior, porém sua ordem de grandeza ainda é identica e com o método de busca sendo o mesmo para ambas as árvores*/

/*IMPLEMENTAÇÃO*/

class Node{ // Para íniciar a implementação da árvore, primeiramente será criada a classe que irá conter as propriedades dos nodos da árvore. Cada nodo terá o seu valor, dois ponteiros para os nodos filhos (esquerda e direita), e uma propriedade que irá indicar qual será a sua cor.
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
        this.parent = null;
        this.color = 'red';
    }
}

class Tree{ // Após a criação da classe do nodo, será criada a árvore em si. Dentro dessa classe irá conter todos os métodos de inserção, rotação e remoção dos nodos da árvore. Ela será iniciada com a raiz da árvore sendo nula. Depois, será criado os métodos que irá rotacionar os nodos tanto para a esquerda quanto para a direita. Após os métodos de rotação ser criados, será criado o método de correção na inserção dos nodos, esse método irá ser o responsável por verificar o balanceamento da árvore após a inserção de um novo nodo. E por fim, será criado os métodos de inserção e remoção dos nodos da árvore.
    constructor(){
        this.root = null;
    }

    leftRotate(node){ // Esse é o método que irá rotacionar um nodo para a esquerda. Para íniciar o método, será passado o nodo como parâmetro do método (chamaremos esse nodo de nodo principal). Primeiramente, será criada uma variável temporária que irá armazenar o nodo filho a direita do nodo principal, em seguida, o nodo filho a esquerda do nodo temporário irá ser atribuído ao nodo filho a direita do nodo principal. Depois das atribuições, será verificado se o nodo temporário a esquerda é diferente de nulo, se for diferente de nulo, o nodo principal será atribuído ao nodo pai a esquerda do nodo temporário. Em seguida, o pai do nodo temporário irá receber o pai do nodo principal. Após, será feita mais três verificações, a primeira irá veirificar se o pai do nodo principal é nulo, se for, o nodo temporário será atribuído a raiz da árvore. caso a primeira verificação seja falsa, irá passar pela segunda, que irá verificar se o nodo principal é igual ao filho a esquerda do pai do nodo principal, se for, o nodo temporário será atribuído ao filho a esquerda do pai do nodo principal. Se tanto a primeira verificação, quando a segunda seja falsa, o nodo temporário será atribuído ao filho a direita do pai do nodo principal. Por fim, o nodo principal será atribuído ao filho a esquerda do nodo temporário e o pai do nodo principal será atribuído ao nodo temporário.
        let temp = node.right; // Criação da variável temporária que irá armazenar o nodo filho a direita do nodo principal
        node.right = temp.left; // Atribuição do nodo filho a esquerda do nodo temporário ao nodo filho a direita do nodo principal


        if(temp.left !== null) temp.left.parent = node; // Verificação se o nodo temporário a esquerda é diferente de nulo, se for, o nodo principal será atribuído ao nodo pai a esquerda do nodo temporário

        temp.parent = node.parent; // Atribuição do pai do nodo principal ao pai do nodo temporário

        if(node.parent === null) // Verificação se o pai do nodo principal é nulo
            this.root = temp; // Se for, o nodo temporário será atribuído a raiz da árvore
        else if(node === node.parent.left) // Verificação se o nodo principal é igual ao filho a esquerda do pai do nodo principal
            node.parent.left = temp; // Se for, o nodo temporário será atribuído ao filho a esquerda do pai do nodo principal
        else
            node.parent.right = temp; // Se ambas as verificações anteriores forem falsas, o nodo temporário será atribuído ao filho a direita do pai do nodo principal


        temp.left = node; // Atribuição do nodo principal ao filho a esquerda do nodo temporário
        node.parent = temp; // Atribuição do pai do nodo principal ao nodo temporário
    }

    rightRotate(node){ // Esse é o método que irá rotacionar um nodo para a direita. Ele tem a mesma lógica que o método de rotação para a esquerda, porém com mudanças nas atribuições dos nodos. O nodo será passado como parâmetro do método (será chamado de nodo principal). Após, será criada a variável temporária que irá armazenar o nodo filho a esquerda do nodo principal, em seguida, o nodo filho da direita do nodo temporário será atribuído ao nodo filho a esquerda do nodo principal. Depois das atribuições, será verificado se o filho a direita do nodo temporário é diferente de nulo, se for, o nodo principal será atribído ao pai da direita do nodo temporário. Em seguida pai do nodo principal será atribuído ao pai do nodo temporário. Após, será feita mais três verificações, a primeira irá verificar se o pai do nodo principal é nulo, se for, o nodo temporário será atribuído a raiz da árvore. Caso a primeira verificação seja falsa, irá passar pela segunda, que irá verificar se o nodo principal é igual ao filho a direita do pai do nodo principal, se for, o nodo temporário será atribuído ao filho a direita do pai do nodo principal. Se tanto a primeira verificação, quando a segunda seja falsa, o nodo temporário será atribuído ao filho a esquerda do pai do nodo principal. Por fim, o nodo principal será atribuído ao filho a direita do nodo temporário e o pai do nodo principal será atribuído ao nodo temporário.
        let temp = node.left; // Criação da variável temporária que irá armazenar o nodo filho a esquerda do nodo principal
        node.left = temp.right; // Atribuição do nodo filho a direita do nodo temporário ao nodo filho a esquerda do nodo principal

        if(temp.right !== null) temp.right.parent = node; // Verificação se o nodo filho a direita do nodo temporário é diferente de nulo, se for, o nodo principal será atribuído ao pai a direita do nodo temporário

        temp.parent = node.parent; // Atribuição do pai do nodo principal ao pai do nodo temporário

        if(node.parent === null) // Verificação se o pai do nodo principal é nulo
            this.root = temp; // Se for, o nodo temporário será atribuído a raiz da árvore
        else if (node === node.parent.right) // Verificação se o nodo principal é igual ao filho a direita do pai do nodo principal
            node.parent.right = temp; // Se for, o nodo temporário será atribuído ao filho a direita do pai do nodo principal
        else
            node.parent.left = temp; // Se ambas as verificações anteriores forem falsas, o nodo temporário será atribuído ao filho a esquerda do pai do nodo principal

        temp.right = node; // Atribuição do nodo principal ao filho a direita do nodo temporário
        node.parent = temp; // Atribuição do pai do nodo principal ao nodo temporário
    }


    //  O método insertFixup é o método de correção na inserção dos nodos da árvore. Ele será o responsável pelo inserção balanceada na árvore. Esse método tem uma complexidade de entendimento e implementação maior que os outros métodos, porém a lógica por de trás é bem simples. Para íniciar o método, o nodo será passado como parâmetro para o método (será chamado de nodo principal). No método, primeiramente, será feito um loop while que irá ocorrer enquando as seguintes condições forem verdadeiras: O nodo pai ser diferente de nulo, a cor do nodo pai ser igual a vermelha e o nodo principal ser diferente do nodo raiz. Dentro do loop, será feita uma verificação para saber se o pai do nodo principal é igual ao nodo filho a esquerda do pai do pai do nodo principal. Se for, será criada uma variável chamada uncle, que irá receber o nodo filho a direita do pai do pai do nodo principal. Em seguida será verificado se a variável uncle é diferente de nula e se a cor do nodo em uncle é igual a vermelha. Se for, a cor preta será atribuída ao nodo pai do nodo principal, a cor preta será atribuída a uncle, a cor vermelha será atribuída ao pai do pai do nodo principal e o nodo pai do pai do nodo principal será atribuído ao nodo principal. Caso a verificação retorne falsa, será passado para o bloco else. Dentro do bloco else, será veirificado se o nodo principal é igual ao nodo filho a direita do pai do nodo principal. Se for, o pai do nodo principal será atribuído ao nodo principal e o método de rotação para a direita será chamado passando o nodo principal como parâmetro. Quando essa verificação retornar falso, a cor do pai do nodo principal será alterada para preto e a cor do pai do pai do nodo principal será alterada para vermelha e será chamado o método de rotação para a esquerda também passando o nodo principal como parâmetro. Caso o pai do nodo principal não seja igual ao filho a esquerda do pai do pai do nodo principal, irá cair no bloco else. Dentro do bloco else, será criada a variável uncle que irá receber o nodo filho a esquerda do pai do pai do nodo principal. Em seguida será verificado se a variável uncle é diferente de nula e se a cor do nodo em uncle é igual a vermelha. Se for, a cor preta será atribuída ao nodo pai do nodo principal, a cor preta será atribuída a uncle, a cor vermelha será atribuída ao pai do pai do nodo principal e o nodo pai do pai do nodo principal será atribuído ao nodo principal. Caso a verificação retorne falsa, será passado para o bloco else. Dentro do bloco else, será veirificado se o nodo principal é igual ao nodo filho a esquerda do pai do nodo principal. Se for, o pai do nodo principal será atribuído ao nodo principal e o método de rotação para a esquerda será chamado passando o nodo principal como parâmetro. Quando essa verificação retornar falso, a cor do pai do nodo principal será alterada para preto e a cor do pai do pai do nodo principal será alterada para vermelha e será chamado o método de rotação para a direita também passando o nodo principal como parâmetro. Por fim, a cor preta será atribuída ao nodo raiz da árvore.

    insertFixup(node){ 
        while(node.parent !== null && node.parent.color === 'red' && node !== this.root){ // Loop while que irá ocorrer enquando as seguintes condições forem verdadeiras: O nodo pai ser diferente de nulo, a cor do nodo pai ser igual a vermelha e o nodo principal ser diferente do nodo raiz
            if(node.parent === node.parent.parent.left){ // Verificação se o pai do nodo principal é igual ao nodo filho a esquerda do pai do pai do nodo principal
                let uncle = node.parent.parent.right; // Criação da variável uncle que irá receber o nodo filho a direita do pai do pai do nodo principal
                if(uncle !== null && uncle.color === 'red'){ // Verificação se a variável uncle é diferente de nula e se a cor do nodo em uncle é igual a vermelha
                    node.parent.color = 'black'; // Atribuição da cor preta ao nodo pai do nodo principal
                    uncle.color = 'black'; // Atribuição da cor preta a uncle
                    node.parent.parent.color = 'red'; // Atribuição da cor vermelha ao pai do pai do nodo principal
                    node = node.parent.parent; // Atribuição do pai do pai do nodo principal ao nodo principal
                }else { // Caso a verificação retorne falso
                    if(node === node.parent.right){ // Verifica se o nodo principal é igual ao nodo filho a direita do pai do nodo principal
                        node = node.parent; // Atribuição do pai do nodo principal ao nodo principal
                        this.leftRotate(node); // Chamada do método de rotação para a esquerda passando o nodo principal como parâmetro
                    }
                    node.parent.color = 'black'; // Atribuição da cor preta ao pai do nodo principal
                    node.parent.parent.color = 'red'; // Atribuição da cor vermelha ao pai do pai do nodo principal
                    this.rightRotate(node.parent.parent); // Chamada do método de rotação para a direita passando o pai do pai do nodo principal como parâmetro
                }
            }else { // Caso o nodo pai seja diferente de do nodo filho a esquerda do pai do pai do nodo principal
                let uncle = node.parent.parent.left; // uncle irá receber o nodo filho a esquerda do pai do pai do nodo principal
                if(uncle !== null && uncle.color === 'red'){ // Verificação se a variável uncle é diferente de nula e se a cor do nodo em uncle é igual a vermelha
                    node.parent.color = 'black'; // Atribuição da cor preta ao nodo pai do nodo principal
                    uncle.color = 'black'; // Atribuição da cor preta a uncle
                    node.parent.parent.color = 'red'; // Atribuição da cor vermelha ao pai do pai do nodo principal
                    node = node.parent.parent; // Atribuição do pai do pai do nodo principal ao nodo principal
                }else { // Caso a verificação acima retorne falso
                    if(node === node.parent.left){ // Será verificado se o nodo principal é igual ao nodo filho a esquerda do pai do nodo principal
                        node = node.parent; // caso seja, o pai do nodo principal será atribuído ao nodo principal
                        this.rightRotate(node); // E será chamado o método de rotação para a direita passando o nodo principal como parâmetro
                    }

                    node.parent.color = 'black'; // Depois da verificação, a cor preta será atribuída ao pai do nodo principal
                    node.parent.parent.color = 'red'; // A cor vermelha será atribuída ao pai do pai do nodo principal
                    this.leftRotate(node.parent.parent); // E será chamado o método de rotação para a esquerda passando o pai do pai do nodo principal como parâmetro
                }
            }
        }

        this.root.color = 'black'; // E após as rotações e verificações, a cor preta será atribuída ao nodo raiz da árvore
    }

    insert(data){ // Esse é o método que irá inserir um nodo na árvore. O método de inserir de uma árvore rubro negra, é praticamente o mesmo que o de uma árvore binária simples, porém com a adição do método que irá corrigir a posição dos nodos na árvore. Para íniciar o método, será passado como parâmetro o dado que será inserido na árvore. Dentro do método, primeiramente, será criado o nodo que irá receber o dado e irá atribuir esse dado na propriedade data presente no nodo. Em seguida, será criada duas variáveis, a primeira irá conter o nodo atual que irá se chamar current, sendo iniciado apartir da raiz da árvore, e a segunda irá conter o pai do nodo atual que irá se chamar parent, sendo iniciado como nulo. Após a criação das variáveis, será feito um loop while que irá ocorrer enquanto a variável current for diferente de nula, ou seja, enquanto houver nodos a serem percorridos. Dentro do loop, a variável parent irá receber o nodo atual. Em seguida, será feita uma verificação para saber se o dado que será inserido é menor que o dado do nodo atual. Se for, a variável current irá receber o nodo a esquerda do nodo atual. Caso o dado a ser inserido é maior que o dado do nodo atual, a variável current irá receber o nodo a direita do nodo atual. Essa verificação é feita, para saber em qual lado da árvore o dado será inserido. Após a verificação, o loop irá se encerrar assim mostrando que há um espaço vazio na árvore para inserir o dado, seja na direita ou esquerda. Em seguida, o nodo que está em parent irá ser atribuído como pai do nod que será inserido. Após essa atribuição, será vericado se a variável parent é nula, o que quer dizer que a árvore está vazia, e o nodo que criado será inserido na raiz da árvore. Caso a verificação retorne falso, o que quer dizer que há elementos na árvore, será verificado se o dado a ser inserido é menor que o dado do nodo pai que está em parent. Se for, o nodo criado será inserido a esquerda do nodo pai. Caso o dado a ser iserido seja maior que o dado presente no seu nodo pai, ele será inserido a direita. Após a inserção, será chamado o método que irá corrigir as posições e balancear a árvore passando o nodo que foi inserido como parâmetro.
        let node = new Node(data); // Criação do novo nodo que irá receber o dado

        let current = this.root; // variável que irá receber o nodo atual
        let parent = null; // variável que irá receber o pai do nodo atual

        while(current !== null){ // Loop while que irá ocorrer enquanto a variável current for diferente de nula
            parent = current; // Atribuição do nodo atual a variável parent
            if(node.data < current.data) // Verificação se o dado que será inserido é menor que o dado do nodo atual
                current = current.left; // Se for, a variável current irá receber o nodo a esquerda do nodo atual, ou seja, irá percorrer a árvore para a esquerda
            else // Caso a verificação retorne falso, ou seja, o dado a ser inserido é maior que o dado do nodo atual
                current = current.right; // A variável current irá receber o nodo a direita do nodo atual, percorrendo a árvore para a direita
        }

        node.parent = parent; // Após o loop, o nodo que está em parent será atribuído como pai do nodo que será inserido

        if(parent === null) // Verificação se a variável parent é nula, se for, quer dizer que a árvore está vazia
            this.root = node; // O nodo que foi criado será inserido na raiz da árvore. Assim criando uma nova árvore
        else if(node.data < parent.data) // Caso a verificação retorne falso, ou seja, a árvore não está vazia. Será verificado se o dado a ser inserido é menor que o dado do nodo pai que está em parent
            parent.left = node; // Se for, o nodo criado será inserido a esquerda do nodo pai
        else // Caso a verificação retorne falso, ou seja, o dado a ser inserido é maior que o dado presente no seu nodo pai
            parent.right = node; // O nodo criado será inserido a direita do nodo pai

        this.insertFixup(node); // E após a inserção, será chamado o método que irá corrigir as posições e balancear a árvore passando o nodo que foi inserido como parâmetro
    }

    height() { // O método height, é o método que irá verificar a altura/profundidade da árvore, e também irá verificar se árvore está balanceada ou não. Para íniciar o método, será criado uma função chamada traverse que irá receber um nodo como parâmetro. Dentro da função, será verificado se o nodo que foi passado como parâmetro é diferente de nulo, se for, será criada duas variáveis, uma chamada right que irá fazer uma chamada recursiva da própria função traverse passando o nodo o próximo nodo a direita, e outra chamada left fazendo a mesma chamada recursiva, porém com o próximo nodo a esquerda sendo passado como parâmetro. Após essas duas chamadas, será criada outra variável chamda blackHeight que irá receber a soma da altura da altura preta dos nodos a esquerda e a direita. Em seguida, será feita uma verificação para saber se a altura preta dos nodos a esquerda é diferente da altura preta da direita, ou se os filhos a esquerda e a direita não estão balanceados. Caso alguma dessas verificações seja verdadeira, será retornado um objeto com a altura preta igual a 0 e a propriedade isBalanced sendo falsa. Caso todas as verificações sejam falsas, será retornado o mesmo objeto, porém passado a altura preta da árvore e a propriedade isBalanced sendo verdadeira. Caso o nodo que foi passado como parâmetro seja igual a nulo, será retornado um objeto com a altura preta igual a 1 e a propriedade isBalanced sendo verdadeira. Após as verificações, será criada a variável result que irá receber a chamada da função traverse passando a raiz da árvore como parâmetro. Em seguida, será feita uma verificação para saber se a propriedade isBalanced do objeto que foi retornado é verdadeira, se for, será impresso no console 'Árvore balanceada', caso contrário, será impresso 'Árvore desbalanceada'.
        function traverse(node) { // Função que irá verificar a altura da árvore e se ela está balanceada
            if (node !== null) { // Verificação se o nodo é diferente de nulo
                let right = traverse(node.right); // Criação da variável right que irá receber a chamada recursiva da função traverse passando o nodo a direita como parâmetro
                let left = traverse(node.left); // Criação da variável left que irá receber a chamada recursiva da função traverse passando o nodo a esquerda como parâmetro
    
                let blackHeight = (left && left.blackHeight ? left.blackHeight : 0) + (node.color === 'black' ? 1 : 0); // Criação da variável blackHeight que irá receber a soma da altura preta dos nodos a esquerda e a direita
    
                if ((left && left.blackHeight) !== (right && right.blackHeight) || (left && !left.isBalanced) || (right && !right.isBalanced)) { // Verificação se a altura preta dos nodos a esquerda é diferente da altura preta da direita, ou se os filhos a esquerda e a direita não estão balanceados
                    return { blackHeight: 0, isBalanced: false }; // Caso alguma dessas verificações seja verdadeira, será retornado um objeto com a altura preta igual a 0 e a propriedade isBalanced sendo falsa
                }
    
                return { blackHeight: blackHeight, isBalanced: true }; // Caso todas as verificações sejam falsas, será retornado o mesmo objeto, porém passado a altura preta da árvore e a propriedade isBalanced sendo verdadeira
            } else { // Caso o nodo seja nulo
                return { blackHeight: 1, isBalanced: true }; // Será retornado um objeto com a altura preta igual a 1 e a propriedade isBalanced sendo verdadeira
            }
        }
    
        let result = traverse(this.root); // Criação da variável result que irá receber a chamada da função traverse passando a raiz da árvore como parâmetro
        console.log(result.isBalanced ? 'Árvore balanceada' : 'Árvore desbalanceada'); // Verificação se a propriedade isBalanced do objeto que foi retornado é verdadeira, se for, será impresso no console 'Árvore balanceada', caso contrário, será impresso 'Árvore desbalanceada'
    }

    delete(data) { // O método delete, é o método que irá deletar um nodo da árvore. Para íniciar o método, será passado como parâmetro o dado que será deletado da árvore. Dentro do método, será chamado um método com o nome de remove, que terá como parâmetros a raiz da árvore e o dado que será deletado. O método remove, será o responsável por remover o nodo da árvore e ele será explicado detalhadamente a seguir. Após a chamada do método remove, será verificado se a raiz da árvore é diferente de nulo, caso seja, a cor preta será atribuída a raiz da árvore. E por fim a raiz da árvore será retornada.
        this.root = this.remove(this.root, data); // Chamada do método remove passando a raiz da árvore e o dado que será deletado
        if (this.root !== null) this.root.color = 'black'; // Verificação se a raiz da árvore é diferente de nulo, caso seja, a cor preta será atribuída a raiz da árvore
        return this.root; // E por fim a raiz da árvore será retornada
    }
    

    /*Como dito anteriormente no método delete, o método remove será o método que de fato removerá o nodo da árvore. Sendo íniciado com o nodo (que será chamado de nodo principal) e o dado que será deletado, primeiramente, será verificado se o nodo principal é igual a nulo, o que quer dizer que não há nodo a ser verificado, caso seja nulo, o próprio nodo será retornado. Após essa verificação, será feita outra, que irá verificar se o dado a ser deletado é menor que o dado presente no nodo principal. Se for, será verificado se o nodo a esquerda do nodo principal é nulo ou se a cor desse mesmo nodo é preta. Caso uma dessas verificações seja verdadeira, o método moveRedLeft será chamado passando o nodo principal como parâmetro. Esse método será responsável por rotacionar os nodo para a esquerda e também trocar as cores do nodo. Após a chamada do método e a rotação e troca de cores se feita, o método remove será chamado novamente passando para o próximo nodo a esquerda e o dado que será deletado, essa chamada será feita até encontrar o dado a ser deletado. Agora, caso o dado a ser deletado seja maior que o dado dentro do nodo principal, será feita outra verificação para saber se o nodo a esquerda do nodo principal é diferente de nulo e se a cor desse mesmo nodo é vermelha. Caso as duas verificações sejam verdadeiras, o método rightRotate será chamado passando o nodo principal como parâmetro para que ele seja rotacionado para a direita. Logo depois será feita mais uma verificação, verificando se o dado a ser removido é o mesmo que o dado do nodo e se o nodo filho a direita é igual a nulo. Caso as duas verificações sejam verdadeiras, será retornado nulo. Caso a verificação seja falsa, será verificado se o nodo filho da direita é nulo, ou se a cor desse mesmo nodo é preta. Caso uma dessas verificações seja verdadeira, o método moveRedRight será chamado passando esse mesmo nodo como parâmetro, para que ele seja rotacionado para a direita e as cores sejam trocadas. Após, a rotação para direita e as cores serem trocadas, será verificado se o dado a ser removido é o mesmo que o dado do nodo principal, se for, será criada uma variável temporária que irá armazenar o nodo que contém o menor valor a direita do nodo principal. Em seguida o dado do nodo principal será substituído pelo dado do nodo temporário, e o método remove será chamado novamente, deletando o nodo e também deletando o dado que foi substituído. Caso o dado a ser deletado não seja o mesmo que o dado do nodo principal, o método remove será chamado passando o próximo nodo a direita e o dado que será deletado. Após todas as verificações e remoções, o método balance será chamado passando o nodo principal como parâmetro, esse método irá balancear e corrigir a posição e cores dos nodos da árvore.*/

    remove(node, data) {
        if (node === null) return node; // Verificação se o nodo é igual a nulo, caso seja, o próprio nodo será retornado
    
        if (data < node.data) { // Verificação se o dado a ser deletado é menor que o dado presente no nodo principal
            if (node.left === null || node.left.color === 'black') { // Verificação se o nodo a esquerda do nodo principal é nulo ou se a cor desse mesmo nodo é preta
                node = this.moveRedLeft(node); // Caso uma dessas verificações seja verdadeira, o método moveRedLeft será chamado passando o nodo principal como parâmetro
            }
            node.left = this.remove(node.left, data); // Após a chamada do método e a rotação e troca de cores ser feita, o método remove será chamado novamente passando para o próximo nodo a esquerda e o dado que será deletado
        } else { // Caso o dado a ser deletado seja maior que o dado presente no nodo principal
            if (node.left !== null && node.left.color === 'red') { // Verificação se o nodo a esquerda do nodo principal é diferente de nulo e se a cor desse mesmo nodo é vermelha
                node = this.rightRotate(node); // Caso as duas verificações sejam verdadeiras, o método rightRotate será chamado passando o nodo principal como parâmetro
            }
            if (data === node.data && (node.right === null)) { // Verificação se o dado a ser removido é o mesmo que o dado do nodo e se o nodo filho a direita é igual a nulo
                return null; // Caso as duas verificações sejam verdadeiras, será retornado nulo
            }
            if (node.right === null || node.right.color === 'black') { // Verificação se o nodo filho da direita é nulo, ou se a cor desse mesmo nodo é preta
                node = this.moveRedRight(node); // Caso uma dessas verificações seja verdadeira, o método moveRedRight será chamado passando esse mesmo nodo como parâmetro
            }
            if (data === node.data) { // Verificação se o dado a ser removido é o mesmo que o dado do nodo principal
                let temp = this.findMin(node.right); // Caso seja, será criada uma variável temporária que irá armazenar o nodo que contém o menor valor a direita do nodo principal
                node.data = temp.data; // O dado do nodo principal será substituído pelo dado do nodo temporário
                node.right = this.remove(node.right, temp.data); // E o método remove será chamado novamente, deletando o nodo e também deletando o dado que foi substituído
            } else { // Caso o dado a ser deletado não seja o mesmo que o dado do nodo principal
                node.right = this.remove(node.right, data); // O método remove será chamado passando o próximo nodo a direita e o dado que será deletado
            }
        }
        return this.balance(node); // Após todas as verificações e remoções, o método balance será chamado passando o nodo principal como parâmetro. Balanceado e corrigindo as posições e cores dos nodos da árvore.
    }
    
    findMin(node) { // Estando presente no método remove, o método findMin será o responsável por encontrar o menor valor a direita do nodo principal, esse método é importante para a remoção de um nodo que contém dois filhos, ou que o nodo a ser deletado seja a própria raiz da árvore. Para íniciar o método, será passado o nodo como parâmetro. Dentro do método, será criada uma variável chamada current que irá receber o nodo do parâmetro. Em seguida, será feito um loop while que irá ocorrer enquanto o nodo a esquerda do nodo atual for diferente de nulo. Dentro do loop, a variável current irá receber os filhos a esquerda até encontrar o menor valor. Após o loop, será retornado o nodo que contém o menor valor.
        let current = node; // Criação da variável current que irá receber o nodo do parâmetro
        while (current.left !== null) { // Loop while que irá ocorrer enquanto o nodo a esquerda do nodo atual for diferente de nulo
            current = current.left; // A variável current irá receber os filhos a esquerda até encontrar o menor valor
        }
        return current; // E após o loop, será retornado o nodo que contém o menor valor
    }
    
    moveRedLeft(node) { // Também estando presente no método remove, o método moveRedLeft será o responsável por mover o nodo vermelho para a esquerda e também de alterar sua cor. Para íniciar o método, será passado o nodo como parâmetro. Dentro do método, será chamado o método flipColors passando o nodo como parâmetro. Em seguida, será feita uma verificação para saber se o nodo a direita é diferente de nulo e se o seu "neto" a esquerda é diferente de nulo e também se a cor desse mesmo "neto" é vermelha. Caso as três verificações sejam verdadeiras, o nodo a direita será rotacionado para a direita, o nodo principal será rotacionado para a esquerda e o método flipColors será chamado alterando a cor do nodo. Após a chamada do método, o nodo será retornado.
        this.flipColors(node); // Chamada do método flipColors passando o nodo como parâmetro
        if (node.right !== null && node.right.left !== null && node.right.left.color === 'red') { // Verificação se o nodo a direita é diferente de nulo e se o filho a esquerda do nodo a direita é diferente de nulo e também se a cor desse mesmo nodo é vermelha
            node.right = this.rightRotate(node.right); // Caso as três verificações sejam verdadeiras, o nodo a direita será rotacionado para a direita
            node = this.leftRotate(node); // O nodo principal será rotacionado para a esquerda
            this.flipColors(node); // E o método flipColors será chamado passando o nodo como parâmetro
        }
        return node; // E após a chamada do método, o nodo será retornado
    }
    
    flipColors(node) { // Presente no método moveRedLeft e também no método moveRedRight, o método flipColors será o responsável por alterar a cor dos nodos. Para íniciar o método, ele receberá o nodo como parâmetro. Dentro do método, a cor do nodo será alterada para o seu oposto, em seguida, será verificado se o nodo a esquerda é diferente de nulo, se for, a cor do nodo a esquerda será alterada para o seu oposto. E por fim, será verificado se o nodo a direita é diferente de nulo, se for, a cor do nodo a direita será alterada para o seu oposto.
        node.color = !node.color; // Alteração da cor do nodo para o seu oposto
        if (node.left !== null) node.left.color = !node.left.color; // Verificação se o nodo a esquerda é diferente de nulo, se for, a cor do nodo a esquerda será alterada para o seu oposto
        if (node.right !== null) node.right.color = !node.right.color; // Verificação se o nodo a direita é diferente de nulo, se for, a cor do nodo a direita será alterada para o seu oposto
    }

    moveRedRight(node) { // Presente no método remove, o método moveRedRight será o responsável por mover o nodo vermelho para a direita e também de alterar sua cor. Para íniciar o método, ele receberá o nodo como seu parâmetro. Dentro do método, será chamado o método flipColors passando esse mesmo nodo como parâmetro. Em seguida, será feita uma verificação para saber se o nodo a esquerda é diferente de nulo e se o seu "neto" a esquerda é diferente de nulo e também se a cor desse "neto" é vermelha. Caso as três verificações sejam verdadeiras, o nodo a esquerda será rotacionado para a direita, o nodo principal será rotacionado para a esquerda e o método flipColors será chamado alterando a cor do nodo. Após a chamada do método, o nodo será retornado.
        this.flipColors(node); // Chamada do método flipColors passando o nodo como parâmetro
        if (node.left !== null && node.left.left !== null && node.left.left.color === 'red') { // Verificação se o nodo a esquerda é diferente de nulo e se o seu "neto" a esquerda é diferente de nulo e também se a cor desse "neto" é vermelha
            node = this.leftRotate(node); // Caso as três verificações sejam verdadeiras, o nodo a esquerda será rotacionado para a direita
            this.flipColors(node); // E o método flipColors será chamado trocando a cor do nodo
        }
        return node; // E após a chamada do método, o nodo será retornado
    }
    
    balance(node) { // Sendo chamado no final do método remove, o método balance será o responsável por balancear a árvore após a remoção de um nodo. Para íniciar o método, ele receberá o nodo como parâmetro. Dentro do método, primeiramente, será verificado se o filho a direita é diferente de nulo e se a cor desse filho é vermelha. Caso as duas verificações sejam verdadeiras, o nodo será rotacionado para a esquerda. Em seguida, será verificado se o filho a esquerda é diferente de nulo, se a cor desse mesmo filho é vermelha, se o seu "neto" a esquerda é diferente de nulo e se a cor desse "neto" é vermelha. Caso todas as verificações sejam verdadeiras, o nodo será rotacionado para a direita. Após, será feita mais uma verificação, verificando se o filho a esquerda é diferente de nulo, se a cor desse filho é vermelha, se o filho a direita é diferente de nulo e se a cor desse mesmo filho é vermelha. Caso todas as verificações sejam verdadeiras, o método flipColors será chamado trocando as cores dos nodos. E por fim, o nodo será retornado.
        if (node.right !== null && node.right.color === 'red') { // Verificação se o filho a direita é diferente de nulo e se a cor desse filho é vermelha
            node = this.leftRotate(node); // Caso as duas verificações sejam verdadeiras, o nodo será rotacionado para a esquerda
        }
        if (node.left !== null && node.left.color === 'red' && (node.left.left !== null && node.left.left.color === 'red')) { // Verificação se o filho a esquerda é diferente de nulo, se a cor desse mesmo filho é vermelha, se o seu "neto" a esquerda é diferente de nulo e se a cor desse "neto" é vermelha
            node = this.rightRotate(node); // Caso todas as verificações sejam verdadeiras, o nodo será rotacionado para a direita
        }
        if (node.left !== null && node.left.color === 'red' && node.right !== null && node.right.color === 'red') { // Verificação se o filho a esquerda é diferente de nulo, se a cor desse filho é vermelha, se o filho a direita é diferente de nulo e se a cor desse mesmo filho é vermelha
            this.flipColors(node); // Caso todas as verificações sejam verdadeiras, o método flipColors será chamado trocando as cores dos nodos
        } 
        return node; // E por fim, o nodo será retornado
    }

    inOrder(){ // O método inOrde irá apenas atraversar a árvore e imprimir os valores dos nodos em ordem crescente. 
        let values = [];
        function traverse(node){
            if(node !== null){
                traverse(node.left);
                values.push(node.data);
                traverse(node.right);
            }
        }

        traverse(this.root);

        console.log(values);
    }
}

/*INSTÂNCIANDO A ÁRVORE E UTILIZANDO SEUS MÉTODOS*/

let tree = new Tree();
tree.insert(10);
tree.insert(5);
tree.insert(3);
tree.insert(20);
tree.insert(30);
tree.insert(15);
tree.insert(25);
tree.insert(1);
tree.delete(1);
tree.height();
tree.inOrder();
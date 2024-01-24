// STACK: A stack(pilha) é uma estrutura de dado que empilha os dados de forma sequêncial utilizando a regra LIFO(Last In First Out, último a entrar, primeiro a sair).Na pilha só é possível acessar um dado por vez a partir do último elemento adicionado a pilha. Para adicionar elementos a pilha é usado o método push e para retirar um elemento da fila é utilizado o elemento pop. Um exemplo de pilha pode ser dado a um algoritmo que recebe e armazena dados de livros, o primeiro livro a entrar dentro da pilha acabará se tornando a base dela, e todos os dados de outros livros serão armazenados sequencialmente acima desse primeiro livro que foi adicionado.

/* POR QUE USAR PILHAS?
   
    A pilha por ser uma estrutura de dado que pode ser muito bem organizada, ela pode ser aplicada em diversas aplicações, como por exemplo para gerenciamento do fluxo de um programa e também:

    . Avaliação de expresões e parsing sintático;
    . Algoritmos de Backtrancking;
    . Gerencialmento de memória em tempo de compilação;
    . Implementações em diversos algoritmos;
    . Controlar a navegação de browsers;
    . Endereçamento de instruções em microprocessadores;
    . Análise de expressões aritméticas.
*/


// EXEMPLO DE PILHA


// Nessa pilha estamos armazenando o nome e a idade de duas pessoas, primeiro foi criada uma classe chamada pilha, aonde é construido um array que irá ser usada como pilha. Logo após é implementado o método PUSH, na qual irá adicionar um elemento na pilha, esse método irá utilizar um argumento chamado people, que será o nosso objeto que armazenará o nome e a idade das pessoas, dentro do método push iremos adicionar o elemento para dentro do array que servirá como pilha. Em uma pilha existe vários métodos como o próprio push que já mencionei e outros como pop, isEmpty, peek, clear, isFull, size e entre outros. Dentro da classe pilha podemos colocar outros métodos para utilização futura no algoritmo.

class Stack
{
    constructor() // este método constructor, irá ser o responsável por criar os objetos myItems e countItems
    {
        this.myItems = []; // aqui é criado um array que servirá como base para a montagem da pilha
        this.countItems = 0; // este é apenas um contador de quantos itens existe dentro da pilha.    
    }

    push(people) // este é o método que irá ser o responsável por adicionar um elemento a pilha.
    {
        this.myItems.push(people); // essa instrução é responsável por adicionar o objeto people para dentro da pilha. O objeto people será usado como base para a adição de elementos a pilha, a instrução chama o array myItems e adiciona o objeto people a ele, assim dizendo que instâncias do objeto people deverá ser adicionado ao myItems.
        this.countItems++; // a cada adição de novos elementos a pilha, o contador será atualizado;
        this.capacity = 10; // esse é um objeto opcional que servirá apenas como uma demonstração do método isFull que checa se a pilha está cheia.
    } 

    pop() // método que irá retirar o elemento do topo na pilha, ou seja, o último elemento adicionado na pilha
    {
        return this.myItems.pop(); // aqui é instrução que servirá como removedor do elemento da pilha.
    }

    peek() // esse método mostrará o elemento que está no topo da pilha.
    {
        return this.myItems[this.myItems.length - 1] // essa é a instrução que nos mostrará o elemento do topo da pilha. o myItems.length - 1 irá retornar o último elemento do array que serve como armazenamento para a pilha.
    }

    clear() // esse método irá limpar a pilha completamente.
    {
        this.myItems = []; // essa instrução limpa o array.
    }

    isFull() // método que irá comparar o comprimento atual do array com a capacidade máxima que foi imposta a ele.
    {
        return this.myItems.length == this.capacity; // instrução que irá comparar o tamanho atual de myItems com o valor atribuido a capacity. Mais tarde você poderá criar uma instrução sobre o que o programa deve fazer caso a instrução retorne verdadeiro.
    }

    isEmpty() // esse é o método que retorna true caso a pilha esteja completamente vazia
    {
        return this.myItems.length === null; // essa instrução será responsável por verificar se a pilha está completamente vazia e irá retorna true caso ela esteja vazia, caso contrário, ela retornará false, assim tendo certeza de que a pilha contém elementos.
    }   

    display() // esse método ira mostrar na tela os elementos presentes dentro da pilha.
    {
        for(let i = this.myItems.length - 1; i >= 0; i--) // essa iteração for irá percorrer a nossa pilha de trás para frente e mostrará no console em ordem de inserção os elementos da pilha, ou seja, o último elemento adicionad a pilha será o primeiro na lista apresentada no console, enquanto o primeiro será a base.
        {
            console.log(this.myItems[i]); // essa instrução mostrará os elementos que foram percorridos pela iteração for e mostrará no console o elemento baseado na sua posição.
            console.log(this.countItems); // mostrará a quantidade de elementos presente dentro da pilha.
        }
    }
}

function viewElements() // essa função foi criada fora da classe pilha para que trabalhe com a pilha, adicionando os elementos, retirando elementos e etc.
{
        class People // Com essa classe criamos um objeto que irá conter o nome e a idade de uma pessoa que servirá como teste para adicionarmos a pilha criada acima.
        {
            constructor(Name, Age) // Esse é um construtor que recebe como argumentos "Name" e "Age" que servirá para futuramente receber o nome e a idade de uma pessoa a partir da instância de um objeto criado.
            {
                this.Name = Name; // aqui é criado um objeto Name que recebe como seu valor o argumento Name do construtor.
                this.Age = Age; // aqui é criado uma objeto Age que recebe como seu valor o argumento Age do construtor.

                // Quando uma instância da classe People for criada, e que os argumentos do construtor contenha valores, esses valores serão atribuidos para os objetos Name e Age.
            }
        }

        let people1 = new People("Rafael", 19); //  aqui é criada uma instância da classe People e que é atribuido aos argumentos do construtor os valores  "Rafael" e "19", atribuindo "Rafael" ao argumento Name e "22" ao argumento Age.
        let people2 = new People("Vitória", 22); // aqui é criada uma instância da classe People e que é atribuido aos argumentos do construtor os valores "Vitória" e "22", atribuindo "Vitória" ao argumento Name e "22" ao argumento Age.

    function createStack() // essa função foi criada para encapsular o algoritmo que irá armazenar as instâncias criada pela classe People dentro da pilha.
    {
        let myStack = new Stack; // essa instrução cria uma instância da classe pilha, aonde myStack recebe todas as propriedades e métodos contidos dentro da classe pilha
        myStack.push(people1); // essa instrução irá armazenar na pilha a instância people1 que foi criada para a classe People.
        myStack.push(people2); // essa instrução irá armazenar na pilha a instância people2 que foi criada para a classe People.
        myStack.pop(); // essa instrução irá remover o elemento do topo da pilha. 
        myStack.display(); // essa instrução chama o método da pilha que irá nos mostrar os elementos da pilha.
        let topElement = myStack.peek(); // essa é uma instrução que irá chamar o método peek que receberá o elemento do topo da pilha.
        console.log(topElement); // mostrará na tela o elemento do topo da pilha que foi atribuido a variável topElement.
    }
    createStack(); // chama a função createStack para que ela seja executada corretamente.
}

viewElements(); // chama a função viewElements para que ela seja executada corretamente.


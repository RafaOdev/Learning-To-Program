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


// Nessa pilha estamos armazenando o nome e a idade de duas pessoas, primeiro foi criada uma classe chamada pilha, aonde é construido um array que irá ser usada como pilha. Logo após é implementado o método PUSH, na qual irá adicionar um elemento na pilha, esse método irá utilizar um argumento chamado people, que será o nosso objeto que armazenará o nome e a idade das pessoas, dentro do método push iremos adicionar o elemento para dentro do array que servirá como pilha. Em uma pilha existe vários métodos como o próprio push que já mencionei e outros como pop, isEmpty, peek, clear, isFull, size e entre outros. Dentro da classe pilha podemos colocar outros métodos para utilização futura no algoritmo;

class Pilha
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
    }

    isEmpty() // esse é o método que retorna true caso a pilha esteja completamente vazia
    {
        return this.myItems.length === null; // essa instrução será responsável por verificar se a pilha está completamente vazia e irá retorna true caso ela esteja vazia, caso contrário, ela retornará false, assim tendo certeza de que a pilha contém elementos.
    }   

    display()
    {
        for(let i = this.myItems.length - 1; i >= 0; i--)
        {
            console.log(this.myItems[i]);
            console.log(this.countItems);
        }
    }
}

function viewElements()
{
    let myStack = new Pilha;

    let people1 = {
        name: "Rafael",
        age: 19
    };
    let people2 = {
        name: "vitoria",
        age: 22
    }

    myStack.push(people1);
    myStack.push(people2);
    myStack.display();
    console.log(myStack.isEmpty());
}

viewElements();


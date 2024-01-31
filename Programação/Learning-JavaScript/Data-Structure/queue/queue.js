/*
    A fila é uma estrutura de dado que se pode ter uma organização mais completa, pois ela é mais restrita que as pilhas e os arrays. Com a fila é você conseguira ter um controle maior, pois você terá que ter um algoritmo para controlar o ínicio da fila, assim sabendo de onde e qual elemento você irá retirar da fila, e també um controle para o fim da fila.

    COMO FUNCIONA A INSERÇÃO DOS ELEMENTOS?

    Para inserir elementos na fila, será necessário criar um vetor(array) e pelo menos 4 variáveis, a primeira variável será para armazenar o primeiro elemento da fila, a segunda para armazenar o último elemento, a terceira que irá armazenar o total de elementos na fila e uma quarta para a capacidade da fila, que servirá como um controle. As variáveis para o primeiro e último elemento servirá como ponteiro. Quando a fila estiver vazia os ponteiros irão do primeiro e último irão apontar para a mesma posição, o índice 0, mas por que?. Como não tem elementos na fila, tanto a primeira posição quanto a última serão a mesma, porque lembre-se, na fila um elemento sempre é adicionado na última posição da fila, como a fila está vazia, e a inserção de novos elementos é sempre na última posição, os ponteiros irão iniciar na mesma posição 0. Após a inserção do primeiro elemento na fila, a o ponteiro da última posição se deslocará para a proxima posição do array que no caso seria o índice 1, e o ponteiro da primeira posição da fila se manterá no índice 0, e assim sucessivamente até que as posições da fila chega ao fim. Com isso o ponteiro da última posição irá voltar para o índice 0, apontando que a primeira posição é a última, pois não há mais posições para que novos elementos seja inserido.

    COMO SABER QUE A FILA ESTÁ CHEIA?

    Aqui entra a variável de total de elementos, após cada inserção de elementos acontecer, o valor da última posição é apontada para a proxima posição do vetor e com isso a variável total vai armazenando a quantidade de elementos que foi armazenado dentro do vetor, cada elemento inserido e a cada posição percorrida pelo ponteiro do último elemento, a variável total incrementa um a si mesma. Quando o ponteiro volta para o índice 0 e o total é igual ao tamanho que foi delimitado para o vetor, confirma que a fila está completamente cheia e ai começa a necessidade de retirar os elementos da fila para inserir novos.
    
    fila vazia: total = 0;
    fila ainda tem elementos: total < tamanho máximo do vetor; 
    fila cheia: total = tamanho máximo do vetor.
    
    COMO FUNCIONA A DECREMENTAÇÃO DOS ELEMENTOS?

    Para decrementar um elemento da fila, deverá começar logicamente pelo primeiro elemento. Após a decrementação do primeiro elemento, o ponteiro do primeiro elemento irá apontar para a proxima posição do vetor. Exemplo, o número 1 está armazenado no índice 0 e o número 2 no índice 1, após o número 1 ser retirado da fila, o ponteiro irá apontar para o número 2, assim declarando que ele é o primeiro elemento da fila e abrindo vaga para outro elemento ser adicionado no índice 0, pois como dito acima, após todas as posições da fila ser preenchidas, o ponteiro da último posição volta para o índice 0, para que futuramente possa ser inserido novo elemento após a remoção do elemento atual. E assim sucessivamente até que a fila não seja mais utilizada.

    ONDE É USADO A ESTRUTURA FILA?

    A estrutura fila é bastante usada em diversos tipos de softwares:

    .Sistemas operacionais: Para gerenciar a ordem de execução de processos na CPU com o escalonador de processos;
    .Softwares de gerenciamento de fila: softwares que gerenciam a fila com senhas e etc em bancos, hospitais e etc;
    .Aplicações de Redes: A fila é frequentemente usada para gerenciar a ordem de processamento de pacotes de dados, pedido de recursos em um servidor web e etc;
    .Sitemas de gerenciamento de impresões: Gatante que as tarefas de impressão sejam processadas na ordem em que foram recebidas;
    .Servidores web: Servidores web usa a fila para gerenciar a ordem de solicitações de arquivos de um site e etc;
    .Algoritmos de busca em largura(BFS): Pode ser usado para explorar os vértices de forma ordenada
    .Sistemas de simulação e modelagem: A fila pode ser usada para gerenciar as entidades ou processos que esperam por algum processamento.
*/

// Agora vamos criar a fila e adicionar os elementos a ela. Para isso criamos uma classe chamada Queue (de forma semelhante da pilha), nessa classe será criado todos os métodos que será usado na pilha. Essa fila terá o conceito de fila circular e com implementação com array, mas a fila pode ser implementada de algumas outras formas, como em lista encadeada e etc.

class Queue
{
    constructor() // nesse construtor será criada todas as propriedades que serão usadas para criar a fila
    {
        this.queue = Array(7); // aqui é criado um array com tamanho de 7, indo dos índices de 0 a 6, ele será usado para implementar a fila.
        this.front = 0; // essa propriedade será usada como um ponteiro no qual irá apontar para a primeira posição (índice do array) que terá o seu elemento removido.
        this.back = 0; // essa propriedade será usada como um ponteiro no qual irá apontar qual será a posição em que um novo elemento será adicionado, nesse caso sempre sendo a última posição do array;
        this.total = 0; // essa propriedade será usada para mostrar a quantidade de elementos presente na fila, essa propriedade é essencial para que nos diga se a fila está cheia ou vazia.
    }

    isEmpty() // esse método retorna se true caso a fila esteja vazia, e false caso o contrário.
    {
        return this.total == 0; // essa instrução retorna o true se a propriedade total for igual a 0, se total for diferente de 0, retornará falso;
    }

    isFull() // esse método irá nos mostrar se a fila está cheia, se a fila estiver cheia irá retornar true, caso contrário, será falso. 
    {
        return (this.queue.length === this.total); // essa isntrução verifica se o tamanho do array é o igual ao total de elementos inserido dentro da fila;
    }

    enqueue(element) // esse método é o responsável por adicionar os elementos da fila, nesse caso sempre na última posição
    {
        if(!this.isFull()) // essa estrutura verifica se a fila está cheia. No sentido literal !this.isFull significa o estado contrário de isFull, aonde o operador unário ! serve para fazer a comparação e nos dizer se a propriedade é diferente de seu estado padrão. Nesse caso, se o estado da fila for diferente de cheio, ele executará as instruções abaixo.
        {
            this.queue[this.back] = element // essa instrução serve para armazenar os elementos na fila, com a instrução this.queue[this.back] significa que o elemento deve ser inserido na fila, na posição this.back, que é o ponteiro que irá apontar sempre para a última posição que o elemento deve ser inserido.
            this.back = (this.back + 1) % this.queue.length; // depois que foi feita a inserção do elemento. This.back avança para frente (com a instrução this.back + 1) apontando para qual será a posição que o próximo elemento será inserido. E após o ponteiro avançar, será feita uma comparação com o tamanho do array que está servindo como implementação para a fila, a instrução (% this.queue.length) retornará o restante da divisão entre this.back na nova posição e o tamanho do array (this.queue), e enquanto não retornar 0 no restante da divisão, significa que ainda há posições para ser percorridas no array.
            this.total++ // e essa instrução incrementará mais um a cada novo elemento inserido na fila, essa instrução servirá para nos dizer se a fila está vazia ou cheia.
        }

        return;
    }

    dequeue(element) // esse método é o responsável por retirar os elementos da fila, nesse caso, sempre o primeiro.
    {
        this.queue[this.front] = element; // essa instrução irá armazenar o primeiro elemento na fila e na primeira posição da mesma. 
        this.front = (this.front + 1) % this.queue.length; // depois que o primeiro elemento foi removido da fila, this.front (que serve como um ponteiro) irá apontar para o próximo elemento que será retirado da fila com a instrução this.front + 1. E enquanto houver elementos na fila que podem ser retirados, this.front irá continuar apontando para a próxima posição.
        this.total--; // após a retirada de um elemento, total será decrementado, assim nos mostrando que a fila contém posições vazias.

        return;
    }

    Front() // esse método retornará o primeiro elemento da fila.
    {
       return (this.queue[this.front]); // essa instrução retorna qual é o elemento da fila (this.queue) na primeira posição (this.front).
    }

    size() // esse método retornará o tamanho maximo do array.
    {
        return (this.queue.length); // essa instrução retorna o tamanho da fila.
    }

    clear() // esse método limpa todas as propriedades da fila.
    {
        this.queue = [];
        this.front = 0;
        this.back = 0;
        this.total = 0
    }

    display() // esse método irá nos mostrar os elementos presentes na fila.
    {
        for(let i = 0; i < this.queue.length; i++) // essa estrutura percorrerá por toda a fila e nos mostrará cada elemento em cada posição percorrida pela estrutura.
        {
            console.log(this.queue[i]); // essa instrução imprimirá no console cada elemento presente na fila (this.queue) em cada posição dela ([i])
        }

        console.log("This is first element:", this.queue[this.front]); // essa instrução imprimirá no console o primeiro elemento da fila.
        console.log("This Last position:", this.back) // essa instrução imprimirá qual é a última posição que poderá ser inserido algum elemento.
        console.log("Total elements:", this.total) // essa instrução imprimirá no console o total de elementos na fila.
    }
}

function addElements(element) // essa função servirá para encapsular a criação de uma nova instância da classe Queue, que servirá para utilizar os métodos que foram criados dentro da classe.
{
    element = new Queue(); // cria uma instância da classe Queue.
    element.enqueue(1);  
    element.enqueue(2);
    element.enqueue(3);
    element.enqueue(4); // as seguintes instruções irá usar o método enqueue para armazenar os elementos na fila.
    element.enqueue(5);
    element.enqueue(6);
    element.dequeue(); // essa instrução usa o método dequeue para a retirada dos elementos, nesse caso sempre o primeiro da fila.
    //console.log(element.Front()); essa instrução usa o método Front para mostrar o primeiro elemento da fila, mas nesse caso, como já estamos mostrando o primeiro elemento com o método display, irie deixar essa instrução como comentada apenas para mostrar como que ela é usada.
    console.log(element.size()); // essa instrução irá usar o método size que imprimirá o tamanho do array que está sendo usado para implementar a fila.
    console.log(element.isFull()) // essa instrução usa o método isFull para imprimir no console se a fila está cheia, se ela estiver cheia, retornará true, caso contrário, será false.
    console.log(element.isEmpty()); // essa instrução usa o método isEmpty para imprimir no console se a fila está vazia, se ele estiver vazia, retornará true, caso contrário, será false.
    element.display(); // essa instrução chama o método display para imprimir no console os elementos e propriedades da fila.
}

addElements(); // essa instrução chama a função para que ela seja executada corretamente.
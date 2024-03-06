/*TABELA HASH*/

/* A tabela hash é uma estrutura de dados que tem uma ótima eficiência em busca de elementos, e essa busca se dá pela sua característica que associa uma chave ao elemento que desejamos armazenar na tabela. Sua implementação é feita com base em um array, onde cada elemento é armazenado em um índice que é gerado a partir de uma função de hash. Há muitas maneiras de encontrar a chave de um elemento, sendo ela de valor único. Uma chave, pode ser gerada apartir de uma string, inteiro, float, booleano ou qualquer outro tipo de dado. Com essa chave gerada, também é gerado um índice apartir dela. Exemplo, para gerar uma chave apartir de uma string, pode ser utilizado o valor UTF-16 de cada caractere da string, e com esses valores, pode ser feito uma soma, multiplicação, divisão ou até mesmo todas juntas para gerar a chave.

    chave = "Rafael"

    R = 82
    a = 97
    f = 102
    a = 97
    e = 101
    l = 108

    chave = 82 + 97 + 102 + 97 + 101 + 108 = 587
    chave = 587
*/

/* Com essa chave será possível acessar diretamente o elemento na tabela, sem a necessidade de acessar sequencialmente cada elemento da tabela. Com o acesso acesso direto ao elemento, sua eficiência é melhor se comparado a outras estruturas de dados, sendo uma complexidade constante O(1) tanto para a busca quanto para inserção e remoção de elementos. Para a sua implementação, será necessário a criação de uma função que se chama função hash, essa função irá gerar um índice, e nesse índice será armazenado o elemento e também é com esse mesmo índice que iremos acessar o elemento. Essa função é importante, pois as chaves podem conter uma sequêncai muito grande de caracteres, o que tornaria a implementação em um array inviável, pois teríamos que criar um array com inúmeras posições, o que seria um disperdício enorme de memória. Com a função hash, podemos reduzir o tamanho do array, e com isso, a busca do elemento se torna mais eficiente. Para que seja gerado índice do apartir da chave, a função hash irá dividir o valor da chave pelo tamanho do array, e o resto dessa divisão será o índice que será armazenado o elemento.

    587 % 100 = 87

  Agora o elemento associado a essa chave, será armazenado no índice 87 do array. E também com esse mesmo calcúlo será feita a busca do elemento.  
*/

/* Porém existe complicações e difícilmente existirá uma função hash completamente perfeita (a função hash perfeita seria aquela função que não irá ter colisões de chaves), pois ao gerar um índice apartir da chave, poderá ocorrer a colisão. A colisão acontece quando duas chaves diferentes geram o mesmo índice, para tratar as colisões podem ser feitos diversos métodos, tanto métodos ruins quanto eficiêntes. Um dos métodos usados para tratar colisções, seria utilizar um array onde cada índice teria um ponteiro para uma lista encadeada, e quando houvesse uma colisão, um novo nó na lista presente no índice seria criado assim possibilitando que sejam armazenadas várias chaves em um mesmo índice; Esse método pode ter uma eficiência limitada pois geraria um alto consumo de memória, já que haveria inúmeros ponteiros nulo o que disperdiçaria muita memória caso houver pouca memória disponível. Um dos melhores métodos para tratar uma colisão e também para ter uma boa eficiência seria com um array de tamanho primo, onde iremos pegar a quantidade de chaves que possívelmente será armazenados na tabela, multiplicar por 2 e pegariamos o número primo mais próximo do resultado da multiplicação.

    m = 2 * quantidade de chaves

    quantidade de chaves = 100
    m = 2 * 100 = 199 (o resultado deu 199 pois pegamos o número primo mais próximo de 200 que seria o resultado correto de 2 multiplicado por 100)
*/

/*  Com esse resultado, iremos criar um vetor com o 199 posições (índices). Esse método de criação aumenta a eficiência da tabela, pois ela não terá tantas posições vazias e também não terá tantas posições cheias. Nesse método, ao ser gerado o índice da chave e houver uma colisão, a chave irá percorrer pelos índices seguintes até que seja encontrada uma posição vazia, e assim o elemento associado a chave será armazenado nesse índice. Esse método é chamado de endereçamento aberto, e é um dos métodos mais eficientes para tratar colisões. Com esse método podendo ter que percorrer a tabela para encontrar um índice vazio, a complexidade da busca, inserção e remoção de elementos pode aumentar caso a estrutura tenha muitos elementos e também muitas colisões, saindo de O(1) para O(n). Porém, com um bom tratamento de colisões, a complexidade pode ser mantida em O(1).
*/

/* Na tabela hash, também é de bom agrado, junto ao método de tratamento de colisões, ter um método que acompanha a porcentagem de ocupação da tabela. Com esse método, é possível ter uma noção se a tabela está com uma porcentagem muito baixa de ocupação, o que gera disperdiçio de memória, ou se ela tem uma porcetagem de ocupação muito alta, assim tendo uma queda na sua eficência.


    fc = quantidade de chaves / tamanho da tabela = porcentagem de ocupação    
*/

/* O fator de carga divide a quantidade de chaves pelo tamanho da tabela, com o resultado sempre sendo de 0.0 até 1.0. Quanto mais próximo de 0 o resultado estiver, mais espaços vazios há na tabela, e quanto mais próximo de 1 o resultado estiver, menos espaços há na tabela

    fc = 100/199
    fc = 0.50 
    
    O resultado dessas divisões podem gerar números como por exemplo, 0.5025125628140703. Por isso seria de boa prática utilizar uma função para reduzir o número de casas decimais, e assim irá apenas mostrar 0.50.
*/


/*TABELA HASH*/

// 2 * 10 = 19 (pegamos o número primo mais próximo de 20 que seria 19)
const m = 19;

class Table{  // aqui criamos a classe que conterá todos os métodos e atributos necessários para a implementação da tabela hash. Essa tabela será baseada no método de endereçamento aberto, esse método utiliza um array de tamanho primo para armazenar os elementos, e também para tratar as colisões. 
    constructor(){ // nesse construtor, será criado o array onde será armazenado os elementos, e também será criado um atributo que irá armazenar o índice gerado pela função hash
        this.table = new Array(m); // o atributo table será o responsável por armazenar os elementos com um array de acordo com o tamanho m
        this.currentIndex = null; // o atributo currentIndex será o responsável por armazenar o índice gerado pela função hash
    }

    hash(key){ // esse método é a função hash, a partir de uma chave, ela irá gerar o índice aonde o elemento associado aquela chave será armazenado. Esse método irá conter duas variáveis, index e fold. A variável index será aonde o índice gerado será armazenado, e a variável fold irá armazenar o seu próprio valor multiplicado por 10 somado com o valor UTF-16 de cada caracterer da chave a cada iteração do loop for. E dentro do loop for, além da multiplicação e soma dos valores de cada caracterer da chave, será verificado se a variável fold tem um tamanho maior que o tamanho da tabela, e caso tenha um tamanho maior, fold será redimensionado para dentro do tamanho da tabela. E após o loop for, será feito a divisão do valor de index pelo tamanho do array, e o resto dessa divisão será o índice que será armazenado o elemento. 
        let index = 0;  // essa variável irá armazenar o índice gerado pela função hash
        let fold = ''; // essa variável irá armazenar o seu próprio valor multiplicado por 10 somado com o valor UTF-16 de cada caracterer da chave a cada iteração do loop for.
        for(let i = 0; i < key.length; i++){ // o loop for irá percorrer cada caractere da chave
            fold = (fold * 10) + key.charCodeAt(i); // dentro do loop, fold irá receber o seu próprio valor multiplicado por 10 somado com o valor UTF-16 de cada caracterer da chave a cada iteração do loop for.

            if(fold.length > m){ // essa estrutura verifica se a variável fold tem um tamanho maior que o tamanho da tabela, e caso tenha um tamanho maior, fold será redimensionado para dentro do tamanho da tabela.
                index += parseInt(fold) % m; // dentro da estrutura if, para que seja redimensionado o fold para dentro da tabela, será feita a divisão do valor de fold pelo tamanho da tabela, e o resto dessa divisão será adicionado a variável index com esse valor sendo o índice aonde o elemento será armazenado.	 
                fold = "0"; // e depois, a variável fold será zerada.
            }
        }

        index += parseInt(fold) % m; // ao sair do loop, significa que os valores já foram todos calcúlados e que o resultado de fold está dentro do limte da tabela, então será feita a divisão do valor inteiro de fold pelo tamanho da tabela, e o resto dessa divisão será adicionado a variável index com esse valor sendo o índice aonde o elemento será armazenado.
        this.currentIndex = index // e por fim, o atributo currentIndex irá receber o valor da variável index.

        return this.currentIndex; // e o método irá retornar o valor do atributo currentIndex.
    }

    insert(value){ // esse é o método que irá inserir o elemento associado a chave na tabela. No método, temos o argumento value, que será o elemento a ser armazenado na tabela. Esse argumento irá ser passado para a função hash, aonde será gerado o índice que será armazenado o elemento. Nesse método também é tratado a colisão, caso haja uma colisão, será feito um loop while até que seja encontrado um índice vazio, com esse índice encontrado, o elemento será armazenado.	 
        let id = this.hash(value); // essa variável id irá armazenar o índice gerado pela função hash. Para que seja armazenado, iremos chamar a função hash e será passado como argumento o valor que será armazenado. A função irá gerar o índice, e retornará o valor do índice para a variável.
        if(this.table[id] === undefined){ // essa estrutura if irá verificar se o índice no qual o elemento deverá ser armazenado está vazio, caso esteja, o elemento será armazenado nesse índice
            this.table[id] = value; // e aqui armazenamos o elemento na tabela no índice que foi armazenado na variável id.
        } else{ // caso a posição desejada seja diferente de undefined, o que quer dizer que possui um elemento armazenado nesse índice, será feito um loop while até que seja encontrado um índice vazio, e assim o elemento será armazenado nesse índice. Esse é o método de tratamento de colisões, e é chamado de endereçamento aberto.
            while(this.table[id] !== undefined){ // o loop irá ocorrer enquanto a posição desejada for diferente de undefined. O que quer dizer que há um elemento armazenado nesse índice.
               id = (id + 1) % m; // e enquanto o loop ocorrer, a variável id irá receber o valor id + 1 % m, o quer dizer que a cada iteração do loop, id irá receber o valor do próximo índice do array e também irá verificar se o índice está dentro do limite da tabela.
            }

            this.table[id] = value; // após sair do loop, significa que foi encontrada uma posição vazia, e irá ser armazenado o elemento nesse índice.
        }
    }

    search(value){ // esse é o método que irá buscar um dado elemento, o método recebe como argumento o valor que será buscado na tabela. Esse argumento será passado para a função hash, aonde será gerado o índice de busca. Nesse método também é tratado a colisão, caso o índice gerado tenha um elemento diferente do elemento buscado, será feito um loop while até que seja encontrado o índice que contnha o elemento buscado.
        let id = this.hash(value); // essa variável id irá armazenar o índice gerado pela função hash. Para que seja armazenado, iremos chamar a função hash e será passado como argumento o valor que será buscado. A função irá gerar o índice, e retornará o valor do índice para a variável.
        let initial = id; // essa variável irá servir como um controle, para evitar que a estrutura while entre em um loop infinito em busca de um elemento que possa não existir na tabela. Ela irá receber o valor de id, e se caso o loop percorrer toda a tabela, e encontrar novamente o valor de id, o loop irá ser quebrado e será retornado no console que o elemento não foi encontrado.

        while(this.table[id] !== undefined){ // o loop irá ocorrer enquanto não seja encontrado um elemento no índice que foi gerado.
            if(this.table[id] === value){ // a cada iteração do loop, será feita uma verificação sobre o índice. Nesse caso, será verificado se o índice gerado contém o elemento buscado.
                console.log("element found in index: " + id); // caso o índice gerado contenha o elemento buscado, será retornado no console o índice que contém o elemento buscado.
                return;
            }

            id = (id + 1) % m; // caso o índice gerado não contenha o elemento buscado, a variável id irá receber o valor id + 1 % m, o quer dizer que a cada iteração do loop, id irá receber o valor do próximo índice do array e também irá verificar se o índice está dentro do limite da tabela.

            if(id === initial){ // e essa estrutura irá verificar um possível loop infinito, caso o loop encontre novamente o seu valor inicial, significa que o loop percorreu toda a tabela e não encontrou o elemento buscado, o loop será quebrado.
                break;
            }
        }

        
        console.log("element not found"); // caso ao sair do loop e não tenha sido encontrado o elemento buscado, será retornado no console que o elemento não foi encontrado.
        return;
    }

    delete(value){ // esse método irá deletar um elemento desejado da tabela. O método recebe como argumento o valor que será deletado. Nesse método também será tratado a colisão, caso o índice gerado tenha um elemento diferente do elemento que será deletado, será feito um loop while até que seja encontrado o índice que contém o elemento que será deletado.
        let id = this.hash(value); // essa variável id irá armazenar o índice gerado pela função hash. Para que seja armazenado, iremos chamar a função hash e será passado como argumento o valor que será deletado. A função irá gerar o índice, e retornará o valor do índice para a variável.
        while(this.table[id] !== undefined){ // a estrutura while ocorrerá enquanto não seja encontrado um elemento no índice que foi gerado.
            if(this.table[id] === value){ // caso o loop encontre um elemento no índice, será feita uma verificação sobre o índice. Nesse caso, será verificado se o índice gerado contém o elemento que será deletado.
                this.table[id] = undefined; // caso o índice contenha o elemento que será deletado, iremos definir aquele índice para undefined, assim deletando o mesmo da tabela.
                return;
            }

            id = (id + 1) % m; // caso o índice gerado não contenha o elemento que será deletado, a variável id irá receber o próximo índice do array e retornará para o início do loop.
        }

        console.log("element not found"); // ao sair do loop e não ter sido encontrado o elemento que será deletado, será retornado no console que o elemento não foi encontrado.
    }

    fc(){ // o método fc (fator de carga), mede o fator de carga da tabela, na qual é verificado a porcentagem de ocupação da tabela. O método irá conter um contador e uma estrutura for que irá percorrer a tabela, a cada iteração do loop que conter um elemento diferente de undefined, o contador irá ser incrementado. E após o loop terminar, será feita uma divisão do valor do contador pelo tamaho da tabela, e o resultado será a porcentagem de ocupação da tabela.
        let count = 0; // essa variável será o contador na qual a cada elemento encontrado na tabela, ele irá ser incrementado.
        for(let i = 0; i < this.table.length; i++){ // essa é estrutura for que irá percorrer por toda a tabela.
            if(this.table[i] !== undefined) count++; // e a cada elemento diferente de undefined encontrado, o que quer dizer que há um elemento armazenado nesse índice, o contador será incrementado. 
        }

        let fc = count / m; // após sair do loop, significa que toda a tabela já foi percorrida, e será dividido o valor do contador pelo tamanho da tabela. O resultado da divisão será a porcentagem de ocupação da tabela.

        console.log(fc.toFixed(2)); // esse console.log irá mostrar a porcentagem de ocupação da tabela, e o método toFixed irá reduzir o número de casas decimais, pois o resultado dessa operação pode gerar números com muitas casas decimais, e usando o método toFixed, será mostrado apenas 2 casas decimais.
    }

    values(){ // o método values irá mostrar todas as posições ocupadas e os elementos de tais posições. O método irá conter uma estrutura for que irá percorrer por toda a tabela, e a cada iteração do loop que conter um elemento diferente de undefined, será mostrado no console o índice e o elemento que está armazenado nesse índice.
        for(let i = 0; i < this.table.length; i++){ // estrutura for que irá percorrer por toda a tabela.
           if(this.table[i] !== undefined) console.log(`${i} = ${this.table[i]}`); // e a cada elemento diferente de undefined encontrado, o que quer dizer que há um elemento armazenado nesse índice, será mostrado no console o índice e o elemento que está armazenado nesse índice.
        }
    }
}


/*A tabela hash pode ter variações na sua complexidade, dependendo da quantidade de colisões que pode ocorrer e de como ela é tratada, e também em como é tratado o método de busca. No caso dessa tabela, a complexidade da função hash O(k), aonde k é o comprimento da chave. E no método de busca, o seu pior caso pode ser O(n). Essas complexidade se dá pelo fato do tratamento de colisão, pois caso haja uma colisão, será preciso percorrer pela tabela. No pior dos caso, caso a tabela esteja cheia, tanto o método de busca, quanto a função hash, terá que percorrer toda a tabela.*/


/*TESTE*/

// aqui é feita a implementação da tabela hash, e também é feita a chamada de todos os métodos da tabela.

let testTable = new Table();
testTable.insert("Rafael");
testTable.insert("Rafaela");
testTable.insert('vitoria');
testTable.insert('josé');
testTable.insert('maria');
testTable.insert('pedro');
testTable.insert('julia');
testTable.insert('carla');
testTable.insert('carlos');
testTable.insert('Contaparajogos20182018@gmail.com');
testTable.fc();
testTable.delete('Rafael');
testTable.delete('maria');
testTable.search('Rafael');
testTable.search('carlos');
testTable.search('josé');
testTable.search("Rafael");
testTable.search("Rafaela");

testTable.values();
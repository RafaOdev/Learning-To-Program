/*Análise e complexidade de algoritmos*/

/*  A análise de algoritmos tem como sua função medir os recursos necessários para a execução de um dado algoritmo. Grande parte do algoritmos trabalham com entradas (inputs) de tamanho arbitrário para a sua execução. Em geral, a eficiência de um algoritmo se mede pela sua complexidade temporal (o tempo de execução que mede aquantidade de operações necessárias para um algoritmo encerrar sua execução) e pela complexidade espacial (mede a quantidade de espaço ocupada na memória pelo algoritmo). A área de análise de algoritmos é muito importante, pois com ela será possível a escolha de um algoritmo eficiente.*/
/*  Na análise de algoritmos existe a análise de correção, onde procura entender por que um dado algoritmo funciona e se a sua resposta é a correta. Exemplo: um algoritmo aonde é necessário fazer divisões, porém sem a utilização de operadores como o próprio operador de divisão, multiplicação e o operador mod(operador que retorna o resto de uma divisão). Após você terminar de montar o seu algoritmo, será necessário fazer a análise de correção, aonde será realizado testes com operações de divisões matemáticas para descobrir se o seu algoritmo retorna as respostas correta.*/
/*  Na análise de algoritmos também tem a análise de complexidade aonde se procura estimar a velocidade e o espaço que será utilizado pelo algoritmo. Porém neste aspecto se encontra duas dificuldades ao se análisar a complexidade de um algoritmo. A primeira é que a velocidade de um algoritmo pode depender do hardware em que o algoritmo será executado, e o segundo é que o tempo dependerá do número de dados de entrada do algoritmo.*/
/*  Além do hardware e da quantidade de dados na entrada do algoritmo, outras características podem influenciar na eficiência do algoritmo, como por exemplo, a ordem dos dados. Um algoritmo no qual os seus dados estão organizados, pode ter uma eficiência diferente (melhor ou pior) do que esse mesmo algoritmo porém com os seus dados parcialmente ou completamente desordenados, por isso a organização dos dados pode ser um fator muito importante para o algoritmo.*/
/*  A complexidade de um algoritmo pode ser estabelecida apartir de algumas estratégias, pessimista, otimista ou média. A estratégia pessimista leva em conta o pior dos casos. Por exemplo, um algoritmo aonde se é preciso achar um elemento A em um conjunto de 100 elementos, na estratégia pessimista, iriamos ter que percorrer todos os 100 elementos para finalmente encontrar esse elemento A o que torna o tempo de execução maior. Já a estratégia otimista, encontrariamos esse elemento A já na primeira iteração com o conjunto, no caso encontrando o elemento logo na primeira posição, sem precisar percorrer todo o conjunto e assim torna o seu tempo de execução menor. O caso médio tem uma complexidade maior no seu entendimento, já que se é necessário uma distribuição de probabilidade para considerar todas as possíveis entradas de tamanho n. Resumidamente, o caso médio como o próprio nome diz, leva em consideração uma avaliação média do cenário de operações de um algoritmo.*/

/*ESTRATÉGIA OTIMISTA*/

let A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let elementoA = 1;
for(let i = 0; i < A.length; i++){
    if(A[i] === elementoA){
        console.log('O caso otimista encontrou o elemento na posição: ' + i);
        break;
    }
}

/*Nesse algoritmo encontramos o elemento que queriamos logo na primeira posição, oque nos mostra como funciona a estratégia otimista. Esse algoritmo apesar de encontar o seu elemento logo na primeira posição, ele será O(n), pois para encontrar o elemento, o algoritmo precisará percorrer pelo array. Assim o algoritmo podendo crescer o número de operações linearmente dependendo do tamanho da entrada n.*/

/*ESTRATÉGIA PESSIMISTA*/
let B = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let elementoB = 10;
for(let j = 0; j < B.length; j++){
    if(B[j] === elementoB){
        console.log('O caso pessimista encontrou o elemento na posição: ' + j);
        break;
    }
}

/*Nesse algoritmo, tivemos que percorrer por todos os elementos para finalmente encontrar o nosso elemento dessejado, oque nos mostra como funciona a estratégia pessimista. Esse algoritmo tem sua complexidade temporal sendo O(n), pois que para o algoritmo encontre o elemento necessário, ele precisa passar por todos os elementos do array, fazendo com que cresca linear o seu tempo de execução dependendo do tamanho de entrada n*/

/*ESTRATÉGIA MÉDIA*/

let treeBinarie = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let item = 6;
function search(){
    baixo = 0;
    alto = treeBinarie.length - 1;

    while(baixo <= alto){
        let meio = Math.floor((baixo + alto) / 2);
        let chute = treeBinarie[meio];

        if(chute === item){
           return console.log('O caso médio encontrou o elemento na posição: ' + meio);
        } else if(chute > item){
            alto = meio - 1;
        } else{
            baixo = meio + 1;
        }
    }

    return null;
}

console.log(search());

/*Nesse algoritmo, a estratégia média é utilizada para encontrar o elemento desejado. Aonde a cada iteração cortamos pela metade os número de um possível resultado e pela notação Big O esse algoritmo é O(log n), pois esse algoritmo cresce de forma logarítmica, e com esse algoritmo podendo reduzir de forma significativa o seu número de operações necessárias para encontrar o elemento.*/

/*  A análise de para calcular essas medidas podem ser realizadas impiricamente. Isto é, levando em conta a experiência e observação prática em algoritmos reais que já foram criados e executados E também pode ser calculado utilizando a teoria, se baseando em calcúlos matemáticos para determinar uma possível quantidade de operações que o tal algoritmo pode realizar em função ao tamanho de sua entrada.*/

/*BIG O NOTATION*/

/* A notação Big O é usada para descrever o comportamento de um algoritmo em relação ao seu pior caso em tempo de execução e ao seu espaço de memória. Sendo chamado de análise assintótica. A sua descrição formal é denotada pela seguinte função: f(n) = O(g(n)), aonde f(n) é a função que descreve o tempo de execução do algoritmo em relação a entrada (n) e g(n) é a função que descreve o comportamento do algoritmo e O(g(n)) descreve que f(n) está assintóticamente limitada por g(n) a medidade que n cresce para o infinito. De forma geral, f(n) não crescerá mais rápido que uma constante multiplicada por g(x).*/

/*  Na Big O notation, o O significa ordem de uma função de acordo com a sua entrada. Aonde queremos saber a ordem de crescimento daquele algoritmo, por isso existe as seguintes ordens de função:

    1. Crescimento constante - O(1): A notação O(1) representa um crescimento constante nas operações do algoritmo, ou seja, a eficiência daquele algoritmo não irá ser afetada sempre realizando um número constante de operações.
    
    2. Crescimento logáritmico - O(log n): A notação O(log n) representa um crescimento logarítmico das operações, sendo um algoritmo muito eficiênte. Pois a cada aumento no número da entrada, ele pode diminuir pela metade o seu esse valor de entrada o que consequentemente pode reduzir drasticamente o número de operações em um algoritmo. 
    
    3. Crescimento linear - O(n): A notação O(n) representa um crescimento linear das operações de acordo com o número da entrada, ou seja, um algoritmo em que sua eficiência depende exclusivamente da sua entrada. Se o número de entrada de um algoritmo for 1, ele fará apenas uma operação, se for 100, agora o algoritmo poderá fazer até 100 operações dependendo de sua implementação.
    
    4. Crescimento logarítmicamente linear - O(n log(n)): Essa notação combina características da notação logarítmica e linear, ou seja, o algoritmo cresce de forma linear mas com um fator logarítmico. Esse tipo de notação é comum em algoritmos de ordenação, aonde o algoritmo pode fazer um número de operações linearmente, mas com um fator logarítmico.
    
    5. Crescimento quadrático - O(n^2): A notação O(n^2) representa um crescimento quadrático a uma determinada entrada, esse tipo de notação pode ser descrito em algoritmos que possui loops de forma aninhada, crescendo o número de operações de quadráticamente. Ou seja, se a entrada for 10, será 10^2 sendo como resultado 100 operações, caso fosse 100, seria 100^2 sendo como resultado 10.000 operações.
    
    6. Crescimento exponencial - O(2^n): A complexidade exponecial representa o crescimento exponencial de operações em um algoritmo, tendo o seu número de operações aumentando drasticamente e consequentemente piorando o seu desempenho. Dada uma entrada de 10, seria O(2^10), aonde 2 elevado a 10 seria 1024. Assim com essa entrada em um algoritmo com complexidade O(2^n), o algoritmo faria possíveis 1.024 operações. 
    
    7. Crescimento fatorial - O(n!) : A complexidade fatorial representa o crescimento fatorial de operações em um algoritmo, tendo o seu número de operações aumentando de forma fatorial e consequentemente piorando o seu desempenho. Dada uma entrada de 10, seria O(10!), aonde 10! seria 3.628.800. Assim com essa entrada em um algoritmo com complexidade O(n!), o algoritmo faria possíveis 3.628.800 operações.
*/

/*EXEMPLOS*/

/*Crescimento constante - O(1)*/

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let temp = a[0];
console.log('O(1)', temp);

/*Nesse exemplo de algoritmo, temos a complexidade O(1), pois independente do tamanho do array, estamos acessando diretamente um índice.*/

/*Crescimento logarítmico - O(log n)*/

let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let itemB = 4;

function binareTree(){
    baixo = 0;
    alto = b.length - 1;

    while(baixo <= alto){
        let meio = Math.floor((baixo + alto) / 2);
        let chute = b[meio];

        if(chute === itemB){
           return console.log('algoritmo O(log n) encontrou o elemento na posição: ' + meio)
        }else if(chute > itemB){
            alto = meio - 1;
        }else{
            baixo = meio + 1;
        }   
    }

    return null;
}

console.log(binareTree());


/*Nesse exemplo de algoritmo, temos a complexidade O(log n), pois a cada iteração cortamos pela metade os número de um possível resultado e pela notação Big O esse algoritmo é O(log n), pois esse algoritmo cresce de forma logarítmica, e com esse algoritmo podendo reduzir de forma significativa o seu número de operações necessárias para encontrar o elemento.*/

/*Crescimento linear - O(n)*/

let c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let itemC = 7;

for(let i = 0; i < c.length; i++){
    if(c[i] === itemC) console.log('O algoritmo 0(n) encontrou o elemento na posição: ' + i);
}

/*Nesse exemplo de algoritmo, temos a complexidade O(n), pois para encontrar o elemento, o algoritmo precisará percorrer pelo array. Assim o algoritmo podendo crescer o número de operações linearmente dependendo do tamanho da entrada n.*/

/*Crescimento logarítmicamente linear - O(n log(n))*/

let d = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let itemD = 6;

function mergeSort(d){
    if(d.length === 1) return d;

    const mid = Math.floor(d.length / 2);
    const right = d.slice(0, mid);
    const left = d.slice(mid);

    return merge(mergeSort(right), mergeSort(left));
}

function merge(rigth, left){
    let result = [];
    let i = 0;
    let j = 0;

    while(i < rigth.lenght && j < left.length){
        if(rigth[i] < left[j]){
            result.push(rigth[i]);
            i++;
        }else{
            result.push(left[j]);
            j++;
        }
    }

    return result.concat(rigth.slice(i)).concat(left.slice(j));
}

console.log(mergeSort(d));

/*Nesse exemplo de algoritmo, temos a complexidade O(n log(n)), pois primeiramente é feito um dos fatores de um algoritmo O(log n) que é dividir dividir os elementos, no caso desse algoritmo, foi o array. E depois é utilizado um dos fatores de algoritmos O(n), que é percorrer pelos pelas divisões do array.*/

/*Crescimento quadrático - O(n^2)*/

let e = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function ordenationSort(){
    for(let i = 0; i < e.length; i++){
        for(let j = i + 1; j < e.length; j++){
            if(e[i] > e[j]){
                let temp = e[i];
                e[i] = e[j];
                e[j] = temp;
            }            
        }
    }

    return e;
}

console.log(ordenationSort());

/*Nesse exemplo de algoritmo tem a complexidade quadrática, pois ele percorre duas vezes o array, o que acaba dobrando o número de operações. Com o array tendo 9 posições e a função tendo dois for, ele percorre o array 9^2 vezes o que resulta em 18 operações para apenas um array que se tivesse apenas um for, teria 9 operações.*/

/*Crescimento exponencial - O(2^n)*/

function fibonacci(n){
    if(n <= 1){
        return n;
    }else{
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

const result = fibonacci(1);
console.log(result);

/*Nesse exemplo de complexidade exponencial, será calculado o fibonacci de n, pegando n - 1 + n - 2. Exemplo, se n fosse 10, a cada chamada recursiva, seria somado o valor de 10 10 - 1 com 10 - 2. Assim, na primeira chamada recursiva dupla, seria pego o fibonacci 9 e o fibonacci 8, e assim por diante até encontrar o n ser menor ou igual a 0. Depois seria somado os fibonacci começando de 1 + 0 até 9 + 8 e somando o fibonacci pelo valor da soma anterior. Como será mostrado no exemplo abaixo:

    fibonacci(10) chama fibonacci(9) + fibonacci(8)
    fibonacci(9) chama fibonacci(8) + fibonacci(7)
    fibonacci(8) chama fibonacci(7) + fibonacci(6)
    fibonacci(7) chama fibonacci(6) + fibonacci(5)
    fibonacci(6) chama fibonacci(5) + fibonacci(4)
    fibonacci(5) chama fibonacci(4) + fibonacci(3)
    fibonacci(4) chama fibonacci(3) + fibonacci(2)
    fibonacci(3) chama fibonacci(2) + fibonacci(1)
    fibonacci(2) chama fibonacci(1) + fibonacci(0)
    fibonacci(1) = 1
    fibonacci(0) = 0

    Depois os fatoriais iram ser somados pelo resultado da soma anterior, assim:

    fibonacci(0) = 0
    fibonacci(1) = 1
    fibonacci(2) = 1 + 0 = 1
    fibonacci(3) = 1 + 1 = 2
    fibonacci(4) = 2 + 1 = 3
    fibonacci(5) = 3 + 2 = 5
    fibonacci(6) = 5 + 3 = 8
    fibonacci(7) = 8 + 5 = 13
    fibonacci(8) = 13 + 8 = 21
    fibonacci(9) = 21 + 13 = 34
    fibonacci(10) = 34 + 21 = 55
*/

/*Crescimento fatorial - O(n!)*/

function fatorial(n){
    if(n === 0){
        return 1;
    }else{
        return n * fatorial(n - 1);
    }
}

console.log(factorial(10));

/*Nesse exemplo de algoritmo com complexidade fatorial, será calculado o fatorial de um número dado em n, para que seja calculado o fatorial de n, a função irá usar da recursividade (chamando ela mesma) várias vezes multiplicando n por n - 1. Por exemplo, se n fosse 10, o que a função iria fazer, seria multiplicar 10 pelo fatorial 9, e assim por diante até que n seja igual a 0. Então dependendo do valor de n, o número de operações necessárias até encontrar o fatorial de n, pode ser gigantesco, podendo até ser números impossíveis de serem calculados, o que torna esse um algoritmo de complexidade O(n!). No exemplo abaixo será mostrado como funciona o calcúlo dessa função:


    fatorial(10) chama fatorial(9)
    fatorial(9) chama fatorial(8)
    fatorial(8) chama fatorial(7)
    fatorial(7) chama fatorial(6)
    fatorial(6) chama fatorial(5)
    fatorial(5) chama fatorial(4)
    fatorial(4) chama fatorial(3)
    fatorial(3) chama fatorial(2)
    fatorial(2) chama fatorial(1)
    fatorial(1) chama fatorial(0)

    Depois os fatoriais iram ser multiplicados pelo resultado da multiplicação anterior, assim:
    
    fatorial(0) = 1
    fatorial(1) = 1 * 1 = 1
    fatorial(2) = 2 * 1 = 2
    fatorial(3) = 3 * 2 = 6
    fatorial(4) = 4 * 6 = 24
    fatorial(5) = 5 * 24 = 120
    fatorial(6) = 6 * 120 = 720
    fatorial(7) = 7 * 720 = 5040
    fatorial(8) = 8 * 5040 = 40320
    fatorial(9) = 9 * 40320 = 362880
    fatorial(10) = 10 * 362880 = 3.628.800
*/


/*Na hora de calcular a complexidade de um algoritmo, a notação Big O seguira pelo menos 3 passos. O primeiro passo, é sempre levar em consideração as repetições ou iterações do algoritmo e a forma com essas iterações são estruturadas no algoritmo. O segundo passo, é verificar a complexidade das funções que contém na linguagem, e o terceiro passo, é ignorar as constantes do algoritmo e sempre utilizar como medida os termos de maior notação. Ou seja, para calcular a complexidade do algoritmo, o termo de maior grau irá se sobressair. As estruturas de repetição, são consideradas O(n), pois elas ocorrem de acordo com o tamanho da entrada n.*/

/*EXEMPLOS*/

let f = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function example1(f){
    for(let i = 0; i < f.length; i++){ // O(n)
        console.log(f[i]); // O(1)
    }
}

/*Utilizando os passos descritos acima, iremos verificar se o algoritmo possui alguma estrutura de repetição. Caso houver, as constantes será ignoradas e sempre será utilizada a notação de maior grau. No caso desse algoritmo, ele possui uma estrutura de repetição, aonde ele irá percorrer o array de acordo com o tamanho da entrada n. Com a estrutura de repetição sendo O(n) e as constantes sendo ignoradas, a complexidade do algoritmo será O(n).*/


let g = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function example2(g){
    for(let i = 0; i < g.length; i++){ // O(n)
        for(let j = 0; j < g.length; j++){ // O(n)
            if(g[i] === g[j]){ // O(1)
                console.log(g[i]); // O(1)
            }
        }
    }

    return;
}

/*Sendo ignoradas as constantes e havendo duas ou mais estrutura de repetição alinhadas (uma estrutura dentro da outra com os mesmos valores de n), será multiplicada as notações de maior de grau e assim a complexidade geral desse algoritmo será O(n^2) que é a complexidade quadrática.

    
    O(n) * O(n) + O(1) + O(1)

    As constantes será eliminadas

    O(n) * O(n) = O(n^2)

    E será multiplicado as notações de maior grau tendo como resultado O(n^2)  
*/


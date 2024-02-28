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
        console.log('Elemento encontrado na posição: ' + i);
        break;
    }
}

/*Nesse algoritmo encontramos o elemento que queriamos logo na primeira posição, oque nos mostra como funciona a estratégia otimista. Esse algoritmo apesar de encontar o seu elemento logo na primeira posição, ele será O(n), pois para encontrar o elemento, o algoritmo precisará percorrer pelo array. Assim o algoritmo podendo crescer o número de operações linearmente dependendo do tamanho da entrada n.*/

/*ESTRATÉGIA PESSIMISTA*/
let B = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let elementoB = 10;
for(let j = 0; j < B.length; j++){
    if(B[j] === elementoB){
        console.log('Elemento encontrado na posição: ' + j);
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
        meio = Math.floor((baixo + alto) / 2);
        let chute = treeBinarie[meio];

        if(chute === item){
           return console.log('Elemento encontrado na posição: ' + meio);
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



/*let A = [];
let temp;
let i;

temp = A[0];

for(i = 0; i < 10; i++){
    if(temp < A[i]) temp = A[i]
    console.log(temp)
}*/


/*
    A estrutura de repetição FOR(para), é uma estrutura que é executada por um período de tempo pré-determinado e em uma quantidade de vezes que será determinada pelo programador

    sintaxe:

    for(váriavel de controle; análise da váriavel, incremento da váriavel de controle){
        bloco de código;
    }

    Na estrutura for, primeiro você declara uma váriavel que será uma váriavel para controlar o fluxo de repetição da estrutura, depois é feita uma análise sobre a váriavel de controle que determinará até aonde e quando será feita a repetição da estrutura, e no final será feita o incremento que diz até quando e o quanto de vezes que a váriavel de controle será alterada após o final de cada execução da estrutura.
*/
var nome = 'vitória';

for(let letra = 0; letra < nome.length; letra++){
    console.log(nome[letra]);
}

/*
    Primeiro declarei uma váriavel com o nome vitória, logo após, criei uma estrutura for que tem como condição uma váriavel de controle chamada letra que receberá o valor 0, logo em seguida é feita uma comparação entre o valor da váriavel letra com o tamanho do valor da váriavel nome, se o valor da váriavel letra for menor que o tamanho do valor da váriavel nome, será incrementado o valor da váriavel nome a váriavel letra e a partir dai e feita uma repetição. Essa repetição é feita até o momento em que a váriavel letra contiver o mesmo tamanho que a váriavel nome, após ser feita toda essa repetição, o bloco de código é executado, e mostrará cada valor que a váriavel letra obteve até chegar no último valor encontrado dentro da váriavel nome. Após toda a repetição ser feita até o último valor, a estrutura será encerrada.
*/
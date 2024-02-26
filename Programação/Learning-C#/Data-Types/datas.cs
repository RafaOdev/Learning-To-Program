/*TIPOS DE DADOS*/

/*Os tipos de dados nos ajuda a específicar qual será o dado que o programa irá manipular na sua execução. Onde o programador irá informar se aquele dado é um número, seja ele inteiro ou de ponto flutuante, um valor booleano, um caracterer ou uma cadeia de caracteres que geram uma palavra ou texto. Utilizar uma linguagem fortemente tipada como C#, tem uma maior otimização, já que os dados tem os seus tipos definidos, assim o processador tem uma melhor clareza para aonde irá armazenar aquele dado. Mas com um contra sendo a menor liberdade na hora de declarar uma variável, já que será obrigatória a definição do tipo daquele dado.*/

/*Esses tipos de dados são:
 
    .Integrais: 
        sbyte: 8 bits, inteiro com sinal.
        byte: 8 bits, inteiro sem sinal.
        short: 16 bits, inteiro com sinal.
        ushort: 16 bits, inteiro sem sinal.
        int: 32 bits, inteiro com sinal. Um tipo int pode armazenar valores de -2^31 até 2^31 que representa de -2.147.483.648 até 2.147.483.647, ao total podendo armazenar 4.294.967.295.
        uint: 32 bits, inteiro sem sinal.
        long: 64 bits, inteiro com sinal.
        ulong: 64 bits, inteiro sem sinal.

    .Numéricos de Ponto Flutuante:
        float: 32 bits, ponto flutuante de precisão simples.
        double: 64 bits, ponto flutuante de precisão dupla.
        decimal: 128 bits, ponto flutuante de alta precisão para valores financeiros.

    .Caracteres:
        char: 16 bits, representa um caractere Unicode.

    .Booleano:
        bool: Representa um valor verdadeiro ou falso.

    .Estruturas Personalizadas:
        struct: Permite a criação de tipos de valor personalizados.

    .Tipos de Referência:
        string: Sequência de caracteres Unicode

    .Objetos Dinâmicos:
        object: Base para todos os tipos em C#. Pode conter qualquer valor.

    .Tipos Nullable:
        Tipos básicos podem ser tornados nulos adicionando um "?". Exemplo: "int?" ou "double?".
 */
using System;
using System.Collections;

class DataTypes
{

    static void Main()
    {
        MainInt();
        MainChar();
        MainFloat();
        MainString();
        MainBoolean();
        MainFloat();
        MainDecimal();
        MainObject();
    }

    static void MainInt()
    {
        /*O tipo de dado inteiro, é o tipo de dado que utiliza apenas números inteiros (1,2,3,4,5, ...). Tipos que não sejam números inteiros e que sejam armazenados dentro de uma váriavel com tipagem int. Exemplo, uma string ("Rafael") sendo armazenada em uma variável com tipagem int, acabará retornando um erro na hora da compilação do código*/

        int number1 = 1; // aqui estou declarando que a variável number1 irá receber um número inteiro, nesse caso, 1.
        int number2 = 2; // aqui é declarado outra variável com um número inteiro, o 2;
        int maxValue = int.MaxValue; // essa variável retornará o valor máximo que um tipo inteiro pode armazenar.

        /*ERROS DE TIPAGEM*/

        //esses dois exemplos abaixo de variáveis inteiras, ira demonstrar dois tipos de tipagem errada.

        int text = "20"; // aqui está sendo declarado uma variável inteira, que recebe o número 20, porém o número está dentro de aspas duplas, o que acaba tornando o número em uma string, com isso será retornado um erro no console.
        int floatPoint = 1.32; // aqui é declarado uma variável do tipo inteira, porém ela recebe um valor com número em ponto flutuante e com isso irá retornar um erro no console.

        Console.WriteLine($"Number 1: {number1}\nNumber 2: {number2}");
    }

    static void MainChar()
    {

        /*O tipo de dado char, é o tipo de dado que armazena apenas um caracterer (a, b, c, ...) no formato de texto (utilizando aspas simples ou duplas). Outros tipos de dados armazenados dentro de um char, retornará erro na compilação do código.*/

        char a = 'A'; // essa aqui é a declaração correta de uma variável do tipo char, aonde apenas um caracterer foi declarado no valor da variável.

        /*ERROS DE TIPAGEM*/
        char text = "Liverpool"; // essa váriável retornará um erro na compilação, pois foi declarado uma cadeia de caracteres (string), ao invés de apenas um caracterer.
        Console.WriteLine(a);
    }

    static void MainString()
    {
        /*O tipo de dado string, armazena cadeia de caracteres, ou seja, todo tipo de texto pode ser armazenado dentro de uma variável do tipo string. Dentro da variável do tipo string, pode ser armazenado por exemplo ("liverpool", "A", "algum texto......")*/

        string text = "Liverpool é o maior clube de futebol do mundo"; // essa é uma variável do tipo string que armazena uma cadeia de caracteres que forma uma frase.
        string textNumber = "20"; // essa variável do tipo string armazena um número, mas esse número está dentro de aspas duplas, o que há torna uma string, assim acaba não retornando erro na hora da compilação.

            /*ERROS DE TIPAGEM*/
        string number = 20; // já essa variável tem o tipo string, mas sendo declarada com um valor de tipo int, acabará retornando um erro na hora da compilação.
        string floatPoint = 23.65; // essa variável também retornará um erro na compilação do código, pois é um número de ponto flutuante sendo armazenado em uma variável do tipo string.
    }

    static void MainBoolean()
    {
        /*O tipo de dado booleano, poderá apenas armazenar ou receber os valores true e false.*/

        bool trueValue = true;  // essa variável do tipo booleano armazena o valor booleano true;
        bool falseValue = false; // já essa armazena o valor false.

        /*ERROS DE TIPAGEM*/

        bool text = "true"; // mesmo tendo true no valor dessa variável, terá um erro na compilação do código, pois true está entre duas aspas, o que há torna uma string.
        bool text2 = "false"; // mesma coisa acontece com essa variável.
    }

    static void MainFloat()
    {
        /*O tipo de dado float, trabalha com números de ponto flutante (1.2, 24.5, 0.1, ...) e que representa os números reais. Vale resaltar que números inteiros poderá ser declarado em uma variável do tipo float, porém não será uma boa prática.*/

        float floatPoint1 = 1.2f; // essas duas variáveis são representações de números reais como ponto flutuante, e será compilado corretamente sem nenhum erro.
        float floatPoint2 = 100.0f;

        /*ERROS DE TIPAGEM*/

        float numberInt = 1; // como dito na explicação, números inteiros poderá ser declarados em uma variável do tipo float, porém, não será uma boa prática.
        float text = "25.3"; // mesmo sendo um número de ponto flutante, essa variável retornará um erro, pois o número está dentro de aspas duplas. Assim tornando o número em string, causando erro na compilação do código.
    }

    static void MainDecimal()
    {
        /*O tipo de dado decima representa de forma exata o números decimais mantendo valores de 128bits(16 bytes) e fornecendo o maior número de dígitos significativos para um número*/

        decimal number = 1.00D; // essa variável do tipo decimal armazena um ponto flutuante, porém com uma precisão maior que o float e double. o "D" no final do número é para informar que o número é do tipo decimal.
        decimal number2 = 2.00M; // essa variável do tipo decimal armazena um ponto flutuante, porém com uma precisão maior que o float e double. o "M" no final do número também informar que o número é do tipo decimal.
        decimal number3 = 1; // essa variável armazena um número inteiro, porém com o tipo decimal, como dito anteriormente, números inteiros poderá ser declarado em uma variável de tipos númericos diferente, porém não será uma boa prática.

        /*ERROS DE TIPAGEM*/
        decimal text = "1.00"; // essa variável retornará um erro na compilação, pois o número está dentro de aspas duplas, o que há torna uma string.
        decimal char = 'A'; // essa variável retornará um erro na compilação, pois foi declarado um caracterer ao invés de um número.
        decimal floatPoint = 1.2; // essa variável retornará um erro na compilação, pois foi declarado um número de ponto flutuante ao invés de um número inteiro. Para que um número de ponto flutuante seja armazenado em uma variável do tipo decimal, é necessário que o número tenha o "D" no final do número ou que ela seja convertida para o tipo decimal utilizando decimal Number = (decimal)1.2.
    }

    static void MainObject()
    {
        /*O tipo de dado object é a classe raiz de todos os tipo de dados, em um object pode ser armazenado qualquer tipo de valor, seja o dado uma string, um inteiro, ponto flutuante, decimal e etc. Porém, com o uso do tipo object, a tipagem do código se torna insegura, pois você não declarou claramente qual tipo que ele é.*/
        object text = "Liverpool";
        object number = 20;
        object floatPoint = 1.2;
        object boolean = true;
        object char = 'A';
        object decimal = 1.00M;
    }
}

/*Ao tentar compilar esse código, irá causar vários erros, pois o código contém erros propositais nos tipos de dados para que tenha uma melhor clareza sobre os erros e acertos na hora de declarar uma variável.*/
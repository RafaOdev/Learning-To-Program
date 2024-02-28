/*Inteiros invertidos*/

/*  Nesse teste de algoritmo teremos que inverter uma sequência de números inteiros. Exemplo, com a sequência em x sendo 123 teremos que retornar 321.*/

/*SOLUÇÃO:*/

/* Uma das soluções que implementei nesse algoritmo foi uma manipulção de números inteiros. Começando criando 3 variáveis, a primeira irá receber o valor 2^31 - 1, que é o valor máximo de um inteiro de 32 bits. A segunda variável irá receber o valor 0, que será o nosso resultado final. E a terceira variável irá receber um valor booleano que irá verificar se o número é negativo. Logo após, será feita uma verificação se a sequência de números em x é menor que 0, ou seja, se a sequência é negativa. Se a verificação for verdadeira, a variável negative irá receber true, assim indicando que a sequência é negativa, e a sequência será transformada em negativa. Após essa verificação, iremos criar um loop while que irá rodar enquanto a sequência de números x for maior que 0. Dentro do loop, iremos criar uma variável que fará um calcúlo que retornará o último digito da sequência, esse calcúlo retornará o restante da divisão entre a sequência de números e 10, o que sempre irá retornar o último digito. Depois iremos atribuir a variável do resultado o resultado do calcúlo do resultado anterior (no começo da sequência o resultado sempre estará em 0, logo o calcúlo será: 10 x 0 + 3, e 3 último digito de um sequência 123) aonde iremos multiplicar por 10 o resultado anterior e somar com o digito atual. E retornaremos a sequência de x sem o último digito com o calcúlo x dividido por 10 e retornando o menor número inteiro. Exemplo:

    primeiro loop:
        x = 123
        resultado = 0
  
        digito = 123 % 10 = 3
        resultado = 10 x 0 + 3 = 3
        x = 123 / 10 = 12 (menor número inteiro)

    segundo loop:
        x = 12
        resultado = 3

        digito = 12 % 10 = 2
        resultado = 10 x 3 + 2 = 32
        x = 12 / 10 = 1 (menor número inteiro)
    
    terceiro loop:
        x = 1
        resultado = 32

        digito = 1 % 10 = 1
        resultado = 10 x 32 + 1 = 321
        x = 1 / 10 = 0 (menor número inteiro)

    Ao sair do loop, iremos retornar o seu resultado, sendo a sequência de números invertida. Porém, se a sequência nos dar um resultado que possa ser maior do um número inteiro de 32 bits, haverá um estouro e para evitar o estouro, iremos retornar 0. E também iremos verificar se a sequência é negativa, se for, retornaremos o resultado multiplicado por -1, se não, retornaremos o resultado sendo positivo. 
*/

/*Complexidade*/

/*  Esse algoritmo tem um complexidade O(n), aonde n é a quantidade de números em x. E para que tenhamos o resultado deveremos percorrer por toda a sequência x o que o torna um algortimo com crescimento linear.*/


var reverse = function(x) {
    let burst = Math.pow(2, 31) - 1; // aqui será armazenado nosso valor máximo de um inteiro de 32 bits
    let result = 0; // aqui será armazenado o resultado da sequência de números invertida
    let negative; // aqui será armazenado um valor booleano que irá verificar se a sequência é negativa
    
    if(x < 0){ // essa estrutura irá verificar se a sequência de números é negativa
        negative = true; // caso seja, negative irá receber true, indicando que a estrutura é verdadeira.
        x = -x; // e a sequência será transformada em negativa
    }

    while(x > 0){ // loop que irá percorrer a sequência de números x
        let digit = (x % 10); // receberá o último digito da sequência de números x
        result = (10 * result) + digit; // e irá multiplicar o resultado anterior por 10 e somar com o digito atual
        x = Math.floor(x/10); // e retornará a sequência de x sem o último digito. OBS: Math.floor irá retornar o menor número inteiro
    }

    if(result > (burst) || result < -(burst)) return 0; // irá verificar se o resultado é maior que o valor máximo de um inteiro de 32 bits, o que pode significar um estouro, se for verdade, retornará 0
    return negative ? -result : result; // e retornará o resultado, se a sequência for negativa, retornará o resultado multiplicado por -1, se não, retornará o resultado sendo positivo.
};

/*Testes*/
console.log(reverse(-Math.pow(2, 31))); // 0 
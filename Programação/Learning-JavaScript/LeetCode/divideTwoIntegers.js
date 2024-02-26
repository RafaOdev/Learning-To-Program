/*Dividindo dois inteiros*/

/*Nesse algoritmo receberemos dois números inteiros; Dividend e Divisor, aonde teremos que dividir o Dividend pelo Divisor. Porém com a proibição do uso de operadores de divisão, multiplicação e mod ou %(operador que retorna o restante de uma divisão). E ao retorna o quociente, devemos retornar o seu menor número inteiro mais próximo.*/

/*SOLUÇÃO:*/

/*  Uma de suas soluções que implementei nesse algoritmo, seria a manipulação de bits usando o operador << que desloca os bits de um determinado número para a sua esquerda, o que em teoria o multiplicaria por 2. Exemplo: dado o número 2 que tem como seu representante em binário 0010, deslocando 1 bit para a esquerda utilizando << 1, se tornaria 0100, assim nos retornado o número 4 e ao deslocar os bits do número 4, receberiamos 1000, que seria o número 8, e seguiria assim a cada 1 bit deslocado para a esquerda. Para chegarmos ao nosso resultado utilizando esse método, iremos montar o algoritmo da seguinte forma:

    1. Primeiramente iremos criar uma variável que receberá o nosso resultado para que possamos retornar o mesmo ao final do algoritmo. Ele comecará com o valor 0 pois ainda não sabemos o resultado final.

    2. Depois iremos verificar se o Divisor é igual a 0, se for, retornaremos NaN, pois não é possível dividir um número por 0.

    3. Iremos verificar se o Dividend é o nosso valor mínimo de um inteiro de 32 bits, e se o Divisor é igual a -1, se for, retornaremos o valor máximo de um inteiro de 32 bits, pois o resultado dessa divisão seria um número muito grande para ser representado em um inteiro de 32 bits.

    4. Criação de uma variável que irá receber um valor booleano, aonde irá verificar se o Dividend é menor que 0 e o Divisor é maior que 0 ou se o Dividend é maior que 0 e o Divisor é menor que 0, se for verdade, a variável irá receber true, se não, irá receber false.

    5. Iremos transformar o Dividend e o Divisor em BigInt, pois o JavaScript tem um limite de 53 bits para representar números inteiros, e com o BigInt, podemos representar números inteiros de até 2^53 bits. E também iremos transformar o Dividend e o Divisor em números positivos utilizando a função Math.abs que retorna o valor absoluto de um número passando como argumento o Dividend e o Divisor.

    6. Iremos criar um loop while que irá rodar enquanto o Dividend for maior ou igual ao Divisor.

    7. Dentro do loop while, criaremos uma variável que irá receber o valor do Divisor, e uma variável que irá receber o valor 1, aonde essa variável irá ser o nosso quociente sendo o resultado da divisão do Dividend pelo Divisor.

    8. Iremos criar outro loop while que irá rodar enquanto o Dividend for maior ou igual ao valor do Divisor multiplicado por 2.

    9. Dentro do loop while, iremos multiplicar o valor do Divisor por 2, e multiplicar o valor do quociente por 2. Assim, a cada iteração, o valor do Divisor e do quociente irá dobrar.

    10. Iremos subtrair o valor do Dividend pelo valor do Divisor, e adicionar o valor do quociente ao nosso resultado. Isso irá acontecer até que o Dividend seja menor que o Divisor. Essa instrução irá fazer com que o nosso quociente seja o resulado da divisão do Dividend pelo Divisor. Esse quociente armazenará a quantidade de operações que foram realizadas para que o Dividend fosse menor que o Divisor, assim nos dando o resultado da divisão.

    11. Ao sair de todos os loops, significa que o Dividend é menor que o divisior e assim retornaremos a quantidade de operações que foram realizadas para que o Dividend fosse menor que o Divisor e armazenadas na variável resultado. Porém, antes de retornar o resultado, iremos verificar se o Dividend e o Divisor são de sinais diferentes, se for verdade, iremos retornar o resultado multiplicado por -1, se não, retornaremos o resultado sendo positivo.
*/

/*POR QUE USAR O OPERADOR BIT AND BIT?*/

/* Ao usar o operador bit and bit para esquerda, estamos multiplicando por dois o nosso divisor e dobrando o seu valor até que seja encontrado um valor maior que o nosso dividend. E essa multiplicação é feita rapidamente, o que torna viável a divisão de números extensos*/


var divide = function(dividend, divisor) {
   let result = 0n; // variável que irá armazenar o resultado da divisão

    if(divisor === 0) return NaN; // se o divisor for igual a 0, retornamos NaN
    if(dividend === -2147483648 && divisor === -1) return 2147483647; // se o dividend for igual ao valor mínimo de um inteiro de 32 bits e o divisor for igual a -1, retornamos o valor máximo de um inteiro de 32 bits

    let isNegative = (dividend < 0) !== (divisor < 0); // variável que irá verificar se o dividend e o divisor são de sinais diferentes

    /*transformando o dividend e o divisor em um inteiro de 53 bits e positivo*/
    dividend = BigInt(Math.abs(dividend)); 
    divisor = BigInt(Math.abs(divisor));

    while(dividend >= divisor){ // loop que irá rodar enquanto o dividend for maior ou igual ao divisor
        let temp = divisor; // variável que irá receber o valor do divisor
        let quociente = 1n; // variável quociente que armazenará o resultado da divisão do dividend pelo divisor

        while(dividend >= (temp << 1n)){ // loop que irá rodar enquanto o dividend for maior ou igual ao valor do divisor multiplicado por 2
            temp <<= 1n; // multiplicando o valor do divisor por 2
            quociente <<= 1n; // multiplicando o valor do quociente por 2
        }

        dividend -= temp; // após o loop while, subtraímos o valor do dividend pelo valor do divisor. Isso irá acontecer até que o dividend seja menor que o divisor
        result += quociente; // adicionamos o valor do quociente ao nosso resultado. Isso será o número de operações que foram realizadas para que o dividend fosse menor que o divisor
    }

    return isNegative ? -Number(result) : Number(result); // retornamos o resultado, se o dividend e o divisor forem de sinais diferentes, retornamos o resultado multiplicado por -1, se não, retornamos o resultado sendo positivo.
}

console.log(divide(10, 3));

/*COMPLEXIDADE*/

/*Esse algoritmo tem complexidade temporal O(log n), pois esse algoritmo cresce de forma logarítmica, e com esse algoritmo podendo reduzir de forma significativa o seu número de operações necessárias para encontrar o elemento.*/
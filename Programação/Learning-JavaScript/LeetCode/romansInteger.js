/*Romano para inteiro*/

/*  Nesse desafio, teremos que converter números romanos para os seus respectivos valores em números inteiros. Exemplo, dado o número romano "XX" teremos que retornar o seu resultado em formato inteiro que no caso é 20.*/

/*SOLUÇÃO*/

/*  Para solucionar esse desafio, iremos criar um objeto que irá conter os símbolos romanos e os seus valores em inteiro. Esse obejto será útil para que a cada romano verificado, seja possível saber qual o seu valor inteiro. Também será criada a variável sum, essa variável irá armazenar a soma do valor inteiro de cada romano que esteja em uma sequência. Para que seja possível verificar cada número romano em uma sequência, será criada uma estrutura for que percorrerá cada romano. Dentro desse for, será criada a variável current que irá armazenar o atual romano que a estrutura está, e também será criada a variável next que irá armazenar o próximo romano da sequência, essas duas variáveis são importantes por que, como sabemos, se em uma sequência de números romanos um romano com valor menor estiver antes de um romano de maior valor, iremos subtrair o valor maior pelo valor menor que antecede ele. Exemplo, dado o romano IV, vemos que I que tem o valor 1 vem antes de V que tem valor 5, com isso em mente, iremos subtrair 1 de 5, tornado o romano IV no número 4. Então com essas duas variáveis, poderemos verificar se o próximo romano na sequência tem um valor maior que o seu antecessor.*/
/*  Com isso em mente, após a criação das duas variáveis dentro do loop e com cada uma tendo o seu respectivo romano, iremos verificar com a estrutura if se o romano atual do loop tem um valor menor que o próximo romano da sequência. Caso tenha um valor menor, iremos pegar o próximo romano e subtrair pelo romano atual e depois somar e armazenar o resultado a variável sum. Caso o atual não tenha um valor menor que o próximo, apenas iremos somar os valores e armazenar na variável sum. E após sair do loop for, significando que não há mais romanos para ser verificado, será retornado o valor de sum que contém o valor total daquela sequência de números romanos.*/


/*COMPLEXIDADE:

    O(n) - Linear

*/




var romanToInteger = (s) => {
    let sum = 0; // Armazena a soma dos valores inteiros dos números romanos
    let romans = { // Objeto que contém os símbolos romanos e os seus respectivos valores inteiros
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500, 
        M: 1000
    }

    for(let i = 0; i < s.length; i++){ // Loop que percorre cada número romano
        let current = s[i]; // Armazena o atual número romano
        let next = s[i + 1]; // Armazena o próximo número romano

        if(romans[current] < romans[next]){ // Verifica se o atual número romano tem um valor menor que o próximo
            sum += romans[next] - romans[current]; // Caso tenha, subtrai o próximo pelo atual e soma o resultado a variável sum
            i++; // Incrementa o i para que o próximo número romano seja verificado
        }else {
            sum += romans[current]; // Caso o atual número romano não tenha um valor menor que o próximo, apenas soma o valor do atual a variável sum
        }
    }

    return sum; // Retorna o valor total da sequência de números romanos
}

console.log(romanToInteger("III")) // 3
console.log(romanToInteger("IV")) // 4
console.log(romanToInteger("IX")) // 9
console.log(romanToInteger("LVIII")) // 58
console.log(romanToInteger("MCMXCIV")) // 1994
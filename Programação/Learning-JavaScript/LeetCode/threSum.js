/*SOMA DO MAIS PRÓXIMO*/


/*  Nesse desafio, teremos que encontrar três números inteiro em um array que a soma seja a mais próxima do número alvo que se apresenta em target. Exemplo, com um array que contém os seguintes números [-1, 2, 1, -4] e o valor alvo sendo 1, teremos que somar três desses 4 números, e a soma dos 3 ser próximo do valor alvo.*/


/*SOLUÇÃO*/

/*  Para solucionar esse desafio, iremos primeiramente ordenar os valores que estão presentes no array nums e criar duas variáveis. A primeira variável chamada sum irá armazenar o resultado da soma dos 3 números inteiros. E a segunda chamda closes irá armazenar a soma dos 3 inteiros iniciais de nums após a sua ordenação.*/
/*  O próximo passo será criar uma estrutura for que irá percorrer todo o array nums, passando por cada inteiro presente nele. Dentro do loop, será criada mais duas variáveis, a variável j que irá armazenar o próximo inteiro, e a variável k que irá armazenar o último inteiro de nums. Após isso, será feita uma estrutura de repetição while, essa repetição irá acontecer enquanto o valor de j for menor que o valor de k. Durante a repetição, a variável sum irá receber a soma do inteiro atual em nums, com o próximo inteiro de nums, mais o último inteiro de nums. Após sum receber a soma dos 3 inteiros, será verificado se a soma tem o mesmo valor que o número alvo em target, caso seja o mesmo valor, será retornado a soma.*/
/*  Também será verificado se o valor absoluto de target - sum é menor que o valor absoluto de target - closes, caso seja, closes irá receber o valor de sum, isso ocorre para que seja encontrada a menor diferença entre target e closes verificando se a soma anterior é mais próxima que a soma atual. Depois é verificado se o valor de sum é menor que o valor de target, caso seja, j irá para o próximo valor e voltará para o ínicio da repetição. Como ja dito antes, essa repetição irá acontecer até j seja igual ou maior que k.*/
/*  Após sair da repetição while, significando que a menor diferença já foi encontrada, também irá sair da estrutura for e a função retornará o valor em closes, que será o resultado mais próximo do valor alvo.*/

/* COMPLEXIDADE:

    O(n^2) - Quadrática

*/

var threeSumClosest = function(nums, target) { // Função que recebe um array de inteiros e um número alvo
    nums.sort((a, b) => a-b); // Ordena os inteiros presentes no array
    let sum = 0; // Armazena a soma dos 3 inteiros
    let closes = nums[0] + nums[1] + nums[2]; // Armazena a soma dos 3 primeiros inteiros de nums após a ordenação

    for(let i = 0; i < nums.length - 2; i++){ // Loop que percorre os inteiros presentes em nums
        let j = i + 1; // Armazena o próximo inteiro
        let k = nums.length - 1; // Armazena o último inteiro de nums

        while(j < k){ // Repetição que acontece enquanto j for menor que k
            sum = nums[i] + nums[j] + nums[k]; // Soma os 3 inteiros

            if(sum === target){ // Verifica se a soma é igual ao valor alvo
                return sum; // Caso seja, retorna a soma
            }
            if(Math.abs(target - sum) < Math.abs(target - closes)){ // Verifica se a diferença entre o valor alvo e a soma é menor que a diferença entre o valor alvo e a soma anterior
                closes = sum; // Caso seja, closes recebe o valor de sum
            }
            
            if (sum < target){ // Verifica se a soma é menor que o valor alvo
                j++; // Incrementa j
            }else{
                k--; // Caso a soma não seja menor que o valor alvo, decrementa k
            } 
        }
    }

    return closes; // E após sair do loop, retorna o valor de closes
};


console.log(threeSumClosest([-1,2,1,-4], 1)) // 2
console.log(threeSumClosest([0, 0, 0, 0], 1)) // 0
console.log(threeSumClosest([0,1,2], 0)) // 3
console.log(threeSumClosest([1,1,1,0], -100)) // 2

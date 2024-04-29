/*THREE SUM*/

/*
    Dada uma matriz de inteira nums, deverá ser retornado todos os trigêmeos (nums[i], nums[j], nums[k]) e que i != j, i != k, j != k, e também que a soma desses elementos (nums[i] + nums[j] + nums[k]) seja igual a 0.

    EXEMPLO
    
    Dada uma matriz [-1, 0, 1, 2, -1, 4], deverá ser encontrada todas as combinações de três números que com a soma desses três números seja 0. No caso dessa matriz, os valores retornados será [-1, -1, 2] e [-1, 0, 1], sendo -1 + -1 + 2 = 0 e -1 + 0 + 1 = 0.


    EXPLICAÇÃO

    Para começar a resolução desse algoritmo, primeiramente será feita a ordenação dos elementos na matriz, que irá facilitar a soma e organização dos elementos e também será criada uma matriz vazia que irá armazenar as triplas encotradas sendo chamada de result. 

    Após, será feito um loop for que irá percorrer por toda a matriz de tamanho n. Dentro do loop, será feito um if que irá verificar se a variável i (que indica em qual índice da matriz o loop está) é maior que 0 e também se o elemento atual do loop é igual ao elemento anterior da matriz, caso essa condição retorne verdadeiro, o loop será continuado para o próximo elemento da matriz, e caso retorne falso o loop continuará no mesmo elemento. Com a estrutura if retornando falso e o loop se mantendo no elemento, será criada as variáveis j e k, com j recebendo i + 1 (sendo o índice do próximo elemento da matriz) e k recebendo o tamanho da matriz menos o último elemento. 

    Essas duas variáveis será responsáveis por executar um loop while, que será executado enquanto a variável j for menor que k. Dentro desse loop, será criada a variável que irá armazenar a soma dos elementos nums[i], nums[j] e nums[k]. Exemplo, com a matriz do exemplo acima e a ordenação dos elementos ([-1, -1, 0, 1, 2, 4]), a primeira soma seria, -1 + -1 + 2 sendo nums[i] = -1, nums[j] = -1 e nums[k] = 2.

    Com a soma, será verificado se o valor da soma é maior, menor ou igual a 0. Caso seja maior, k será decrementando indo para o elemento anterior em relação a posição k na matriz. Caso seja menor, j será incrementado, indo para o próximo elemento em relação a posição j na matriz. E caso o valor da soma seja igual a 0, os três elementos que somados deram a soma 0, serão armazenados na matriz result e j será incrementado indo para o próximo elemento. E dentro dessa terceira verificação, terá um loop while que irá continuar incrementando j enquanto o elemento em nums[j] for igual ao elemento anterio (nums[j - 1]) e também enquanto j for menor k. Assim evitando a duplicação dos três números que somados dão 0 e garantindo apenas triplas únicas como resultado.

    Esse processo será repetido até que todos os elementos da matriz tenham sidos examinados e todas as triplas únicas em que suas somas seja 0 também tenham sido encontradas e armazenadas na matriz result.


    COMPLEXIDADE

    O(n^2) - Quadrática
*/


function threeSum(nums){ // função que irá retornar o as triplas
    const result = []; // matriz vazia que irá armazenar as triplas

    nums.sort((a, b) => {
        return a-b; // função que irá ordenar os elementos da matriz
    })

    for(let i = 0; i<nums.length; i++){ // loop que irá percorrer todos os elementos da matriz
        if(i > 0 && nums[i-1] === nums[i]) continue; // estrutura if que irá verificar se elemento atual do loop é igual ao elemento anterior, e caso seja, o loop irá para o próximo elemento

        let j = i+1; // variável j que irá receber o próximo elemento em relação a i
        let k = nums.length-1; // variável k que irá receber o tamanho da matriz menos o último elemento
        
        while(j<k){ // loop que ira ocorrer enquanto j for menor que k
            let sum = nums[i] + nums[j] + nums[k]; // variável que irá armazenar a soma de três números da matriz nas posições i, j e k

            if(sum > 0){ // irá verificar se a soma é maior que 0
                k--; // caso seja, k será decrementado voltando para o elemento anterior da matriz em relação a posição k
            }else if(sum < 0){ // irá verificar se a soma é menor que 0
                j++ // caso seja, j será incrementado indo para o próximo elemento da matriz em relação a posição j
            }else{ 
                result.push([nums[i], nums[j], nums[k]]); // e se nenhuma das duas verificações anteriores seja verdadeira, a soma é igual a 0 e a tripla de números que somados deram soma 0, será armazenado na matriz result
                j++ // e o loop irá seguir

                while(nums[j] == nums[j-1] && j<k){ // esse loop que irá ocorrer enquanto o elemento atual nums[j] for igual ao elemento anterior nums[j - 1] e enquanto j for menor que k. Esse loop será feito para que seja evitada a duplicação de triplas na matriz que terá os resultados
                    j++; // enquanto o loop ocorrer, j será incrementado
                }
            }
        }
    }

    return result; // Após todos os elementos serem examidados e todas as triplas serem encontradas, a matriz que conterá o resultado será retornada
}

console.log(threeSum([-1,0,1,2,-1,-4])); // [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([0,1,1])); // []
console.log(threeSum([0,0,0])); // [0, 0, 0]
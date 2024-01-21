/* 
  1- FUNÇÕES: Funções em programação é usada quando o programador tem um algoritmo muito bem definido, encapsulando ele em um bloco de código aonde possa ser invocado a qualquer momento por outro código ou outra função.
    A função em programação foi baseada na função matemática, para montar um função você precisa de um nome, qual o tipo da função, a definição dela e posteriormente a invocação da mesma.
 
  2- SINTAXE: function nomeDaFunção(parâmetro){
                    corpo da função (corpo aonde o código será encapsulado)
                }

  3- PARÂMETROS: Os parâmetros servem como valores de entrada para uma função ou o seu valor que será retornado              
*/ 

function calculate(x, y){
    return x + y;            // essa função tem como objetivo somar os valores de x e y, e após a soma, retornar o resultado da soma
}                            // mas você se pergunta, "E qual é o valor de x e y?, aonde que irá sair o resultado da soma do valores de x e y?".                       
/*
  Pois bem, para que a gente descubra qual o valor de x e y, a gente pode apenas dar o valor a essas variáveis ou pegar os valores que já foram implementados a x e y por alguma outra função ou bloco de código. Nesse caso vamos adicionar o valor de x e y, apenas digitando "console.log()" e dentro dos colchetes digitar o nome da função "console.log(calculate())", dentro dos colchetes aonde está escrito os parâmetros x e y, colocar os valores de tais variáveis "console.log(calculate(10, 25))". Sendo assim, sairá no console da sua IDE o resultudado da função.
*/

console.log(calculate(10, 25)); // O resultado será 35.
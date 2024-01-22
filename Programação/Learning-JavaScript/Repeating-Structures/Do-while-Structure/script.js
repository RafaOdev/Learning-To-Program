/* 
    A estrutura de repetição Do-While, é uma estrutura parecida com a estrutura While. Mas com a mudança de que o código primeiro será executado e depois será feita a verificação da condiçao que foi passada, se a condição continuar sendo verdadeira, o bloco de código sera executado novamente, até que a condição seja falsa.

    sintaxe:

    do{
        bloco de código;
    } while(condição);
*/

var i = 0;

do{
    i++
    console.log(i);
}while (i < 10)

// O que acontece neste código é que primeiro será executado a incrementação da váriavel i e também será printada no console, e só após o código ser executado, será feita a verificação da condição, que no caso é se i é menor que 10, e enquanto essa condição for verdadeira, ele voltará ao inicio da estrutura e executará mais uma vez o código até que a condição seja totalmente falsa.
/*
    A estrutura condicional Switch/Case, permite que você execute um bloco de código diferente para cada opção (case). O uso é mais indicado quando se tem condições pré-definidas

    As comparações na estrutura switch/case é sempre feita de forma sequencial ou seja, irá fazer uma verificação por vez até encontrar a que satisfaça a condição pré estabelecida.

    sintaxe:

    Switch(condição){
        case 0:
            bloco de código;
        break
        
        default:
            bloco de código;
    }

    A instrução break é a instrução que encerra a sequencia de comparações caso o case que foi comparado seja o verdadeiro, se não for especificado ao final de cada case, a estrutura irá ser percorrida até o seu final, dando um resultado inválido.
*/

var date = new Date();
var dia = date.getDay();

switch(dia){
    case 0:
        console.log('Domingo');
    break;    

    case 1:
        console.log('Segunda');
    break;   

    case 2:
        console.log('Terça');
    break;   

    case 3:
        console.log('Quarta');
    break   

    case 4:
        console.log('Quinta');
    break   

    case 5:
        console.log('Sexta');
    break   

    case 6:
        console.log('Sábado');
    break   

}

console.log(dia);
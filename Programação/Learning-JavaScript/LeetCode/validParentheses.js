/*Validação de parênteses*/

/*  O problema de validação de parênteses é um problema clássico de pilhas. O problema consiste em verificar se uma string contém parênteses corretamente abertos e fechados. Por exemplo, a string "()" é válida, mas a string "(]" não é.*/

/*SOLUÇÃO*/

/*  Para essa solução, irei criar uma pilha implementada em um array que irá servir como um rastreador para o caracter na string s. Depois crio um objeto chamado map, esse objeto irá conter as propriedades de abertura  (, [ e }  com o seus valores sendo as suas tags de fechamento  ), ] e } ).*/
/*  Após isso a string  será percorrida para que as comparações sejam executadas. A primeira comparação será se o caractere que atualmente está em s na posição i existe como propriedade em map, caso ele exista, será armazenado na pilha e assim por diante. Se o caracter em s na posição i não existir em map, o último caractere que foi inserido na pilha será retirado e o valor desse último caractere será comparado com o caractere atual em s, caso ele seja diferente, retornará false, assim nos mostrando que o caractere atual em s não é a tag de fechamento do último caractere retirado da pilha. Se o caractere atual em s for igual ao valor do último caractere que está presente como propriedade em map, retornará true.*/

var isValid = function(s) {
    let stack = []; // essa pilha implementada com um array servirá para rastrear os caracteres em s.
    let map = { // esse objeto é criado com as propriedades sendo a abertura (, [, {. E seus valore sendo o seu fechamento ), ], }. Esse objeto será usado para comparação.
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for(let i = 0; i < s.length; i++){ // agora iremos percorrer a string s.
        if(map[s[i]]){ // iremos verificar se o caracter em s na posição i é o mesmo presente em map.
            stack.push(s[i]); // caso seja, iremos adicionar ele na nossa pilha.
        }else { 
            let last = stack.pop(); // se o caracter não for o mesmo presente em map, ou seja, se for um parêntese de fechamento, iremos retirar o parêntese de abertura da pilha.
            if(s[i] !== map[last]) return false; // e esse parêntese de abertura retirado será comparado com o caracter atual em s na posição i.
        }
    }

    return stack.length === 0; // se todos os caracteres forem verificados e forem abertos e fechados corretamente, a pilha ficará vazia, e assim retornará true.
};

console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false
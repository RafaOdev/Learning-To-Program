/*  A estrutura condicional IF(se) e else(se não), é uma estrutura que verifica uma condição e se essa condição for verdadeira (true), irá ser executado um bloco de código dentro da estrutura. Se a condição for falsa (false), o código irá continuar fora da estrutura if.

    A sintaxe é bem simples:

    if(condição){
        bloco de código;
    }

    Existem dois tipos de estrutura IF e ELSE. A simples e a composta.

    A condicional simples é declarada apenas com a instrução IF(se):
*/

    function SimpleIF(){
        idade1 = 17;
        if(idade1 < 18){
            console.log('você é menor de idade');
        }
        return idade1
    }

    console.log(SimpleIF())
 /*    se o valor da váriavel idade for menor que 18, irá imprimir no console "você é menor de idade";

    A condicional composta é declada com IF(se) e ELSE(se não), podendo ser declarado vários ELSE IF após o primeiro IF:
*/

    function ifCompaund(){
        idade2 = 18
        if(idade2 >= 18){
            console.log('você já tem a maioridade');
        } else {
            console.log('você é menor de idade');
        }
      return idade2  
    }

    console.log(ifCompaund());

    // se o valor da váriavel idade for menor que 18, irá imprimir no console "você é menor de idade". Agora,  se o valor da váriavel não for menor que 18, irá imprimir no console "você já tem a maioridade";


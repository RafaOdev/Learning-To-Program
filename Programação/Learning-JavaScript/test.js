function fatorial(array, i, j){
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
 }

function generate(array, n){
    if(n === 1){
        console.log(array);
    }else{
        for(let i = 0; i < n - 1; i++){
            generate(array, n - 1);
            if(n % 2 === 0){
                fatorial(array, i, n - 1);
            }else{
                fatorial(array, 0, n - 1);
            }
        }
        generate(array, n - 1);
    }
}

const elements = [1, 2, 3, 4];
generate(elements, elements.length);
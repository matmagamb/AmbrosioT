let numbers = [5, 9, 3, 19, 3070, 8, 100, 2, 35, 27];
let maiorNumero = numbers[0];
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] >maiorNumero){
    maiorNumero = numbers[i];
    }
}
console.log(maiorNumero);
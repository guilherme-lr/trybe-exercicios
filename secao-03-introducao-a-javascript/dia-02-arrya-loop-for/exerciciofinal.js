let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaNumbers = 0

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
    somaNumbers += numbers[index];
}
//Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
console.log(' Soma dos numeros = ' + somaNumbers);
let media = somaNumbers / numbers.length;
if (media >= 20) {
    console.log('valor da media maior que 20');
} else {
    console.log('valor da media menor que 20');
}
//Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let higherNumber = numbers[0]
for (let index2 = 0; index2 < numbers.length; index2 += 1) {
    if (numbers[index2] > higherNumber) {
        higherNumber = numbers[index2];
    }
}
console.log('The largest number in the array is: ' + higherNumber);

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
let quantidadeNumerosImpares = 0
for (let index3 = 0; index3 < numbers.length; index3 += 1) {
    if (numbers[index3] % 2 !== 0) {
        quantidadeNumerosImpares += 1
    }
}
console.log(quantidadeNumerosImpares);

//Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let smallNumber = numbers[0]
for (let index4 = 0; index4 < numbers.length; index4 += 1) {
    if (numbers[index4] < smallNumber) {
        smallNumber = numbers[index4];
    }
}
console.log('The small number in the array is: ' + smallNumber);

//Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let number = [];

for (let index5 = 1; index5 <= 25; index5 += 1) {
    number.push(index5);
}
console.log(number);

//Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2

for (let index6 = 0; index6 < number.length; index6 += 1) {
    console.log(number[index6] / 2);
};
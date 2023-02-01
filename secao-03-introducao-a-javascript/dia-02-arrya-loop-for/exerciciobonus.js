
//Ordene o array numbers em ordem crescente e imprima seus valores;let 
//numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; 
// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] < numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//       }
//     }
//   }
//   console.log(numbers);


///  Ordene o array numbers em ordem decrescente e imprima seus valores;
//   numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; 
//   for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] > numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//       }
//     }
//   }
//   console.log(numbers);


//Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numberMult = []
for (let index = 0; index < numbers.length; index += 1) {
    if (index + 1 < numbers.length) {
        numberMult.push(numbers[index] * numbers[index + 1])
    } else {
        numberMult.push(numbers[index] * 2)
    }
}
console.log(numbers);
console.log(numberMult);


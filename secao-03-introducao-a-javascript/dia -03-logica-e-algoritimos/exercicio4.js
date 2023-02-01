
//Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = [0]
for (let index = 0; index < array.length; index += 1) {
    if (maiorPalavra.length < array[index].length) {
        maiorPalavra = array[index];
    }
}
console.log(maiorPalavra);

// Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a menor palavra desse array
let array2 = ['java', 'javascript', 'python', 'html', 'css'];
let menorPalavra = ['palavra']
for (let index2 = 0; index2 < array2.length; index2 += 1) {
    if (array2[index2] < menorPalavra) {
      menorPalavra = array2[index2];
    }
  }
console.log(menorPalavra);
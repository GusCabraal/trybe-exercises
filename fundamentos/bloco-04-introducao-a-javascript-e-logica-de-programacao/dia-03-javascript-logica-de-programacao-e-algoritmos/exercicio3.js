//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.


let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestLength = array[0].length;
let biggestWord;

for (let index = 0; index < array.length; index += 1){
    if(array[index].length > biggestLength){
        biggestLength = array[index].length;
        biggestWord = array[index];   
    }
}
console.log("A maior palavra do array é",biggestWord, "com",biggestLength,"letras.")

let smallestLength = array[0].length;
let smallestWord;

for (let index = 0; index < array.length; index += 1){
    if(array[index].length < smallestLength){
        smallestLength = array[index].length;
        smallestWord = array[index];   
    }
}
console.log("A menor palavra do array é",smallestWord, "com",smallestLength,"letras.")
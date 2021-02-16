/*
    Manipulando Strigns e Números

      * Separar o texto pelos espaços, em um array. Colocando _
*/

let phrase = "Esta é uma frase totalmente aleatória sem o menor sentido"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_").toLowerCase()
console.log(myArray)
console.log(phraseWithUnderscore)

/*
    Operadores lógicos (logical operators)

      * 2 valores booleanos, quando     verificados, resultará em true ou false
        
*/

let cafe = true
let leite = true
let noCoffee = false
let noMilk = false

// AND &&
    console.log(cafe && leite)
    console.log(noCoffee && leite)

// OR ||
    console.log(cafe || leite)
    console.log(noCoffee || leite)
    console.log(noCoffee || noMilk)

// NOT !
    console.log(!cafe)
    console.log(!noCoffee)
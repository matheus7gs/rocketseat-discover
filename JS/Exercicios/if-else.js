/*
  Transformar notas escolares

    * de 90 para cima - A
    * entre 80 - 90   - B
    * entre 70 - 79   - C
    * entre 60 - 69   - D
    * menor que 60    - F
*/
let nota = 59
let notaA = nota >= 90
let notaB = nota >= 80 && nota <= 89
let notaC = nota >= 70 && nota <= 79
let notaD = nota >= 60 && nota <= 69

if (notaA) {
  newnota = "A"
} else if (notaB) {
  newnota = "B"
} else if (notaC) {
  newnota = "C"
} else if (notaD) {
  newnota = "D"
} else {
  newnota = "F"
}
 
console.log(newnota)
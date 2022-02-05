/*
  Transformar notas escolares

    * de 90 para cima - A
    * entre 80 - 90   - B
    * entre 70 - 79   - C
    * entre 60 - 69   - D
    * menor que 60    - F
*/
let nota = 59

function getNota(nota) {
  let notaA = nota >= 90 && nota <= 100
  let notaB = nota >= 80 && nota <= 89
  let notaC = nota >= 70 && nota <= 79
  let notaD = nota >= 60 && nota <= 69
  let notaF = nota >= 0 && nota < 60

  let newnota;

  if (notaA) {
    newnota = "A"
  } else if (notaB) {
    newnota = "B"
  } else if (notaC) {
    newnota = "C"
  } else if (notaD) {
    newnota = "D"
  } else if (notaF) {
    newnota = "F"
  } else {
    newnota = "Nota Invalida"
  }

  return newnota
}

console.log(getNota(nota))
console.log(getNota(99))
console.log(getNota(150))
console.log(getNota(-10))
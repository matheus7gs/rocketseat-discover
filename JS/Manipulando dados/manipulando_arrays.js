/*
    Manipulando Array

*/

let techs = ["html", "css", "js"]

// Adicionar um item no fim
techs.push("nodejs")
// Adicionar um item no começo
techs.unshift("sql")
// Remover no fim
//techs.pop()
// Remover no começo
//techs.shift()
// Pegar somente alguns elemnetos do array
//console.log(techs.slice(1, 3))
// Remover 1 ou mais items em qualquer posição do array
//techs.splice(1, 2)
// Encontrar a posição de um elemnnto no array
let index = techs.indexOf('css')
techs.splice(index, 1)

console.log(techs)
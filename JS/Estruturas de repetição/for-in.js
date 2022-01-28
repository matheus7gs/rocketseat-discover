/*
  Estrutura de repetição

    * for...in
*/
let person = {
  name: 'Matheus',
  age: 21,
  weight: 65.5
}

for(let property in person) {
  console.log(property)
  console.log(person[property])
}
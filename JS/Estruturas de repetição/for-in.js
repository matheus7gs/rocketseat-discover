/*
  Estrutura de repetição

    * for...in
*/
let person = {
  name: 'Matheus',
  age: 21,
  weight: 65.5
}

for(let prooerty in person) {
  console.log(prooerty)
  console.log(person[prooerty])
}
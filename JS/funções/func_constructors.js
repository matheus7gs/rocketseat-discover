/*
    Function() constructor
    
    * expressão new
    * criar um novo Objeto
    * this keyword
*/

function Person(name) {
  this.name = name
  this.talk = () => {
    return this.name + " está falando"
  }
}
const matheus = new Person('Matheus')
const mayk = new Person('Mayk')

console.log(matheus.talk())
console.log(mayk.talk())
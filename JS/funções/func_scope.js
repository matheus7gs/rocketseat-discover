// fuction scope
let subject = 'studing'

// sem parámetro
// function createThink() {
//   subject = 'study'
//   return subject
// }
// com parámetro
function createThink(subject) {
  subject = 'study'
  return subject
}

console.log(subject)
console.log(createThink(subject))
console.log(subject)
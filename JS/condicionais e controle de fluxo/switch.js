/*
  switch
        
*/

/*let expression = 'a'

switch (expression) {
  case 'a':
    // codigo
    console.log('a')
    break
  case 'b':
    // codigo para b
    console.log('b')
    break
  default:
    console.log('default')
    break
}*/

function calculate(number1, number2, operator) {
  let result = 0;

  switch (operator) {
    case '+':
      result = number1 + number2
      break
    case '-':
      result = number1 - number2
      break
    case '*':
      result = number1 * number2
      break
    case '/':
      result = number1 / number2
      break
    default:
      console.log('não implementado')
      break
  }

  return result
}

console.log(calculate(1, 2, ""))
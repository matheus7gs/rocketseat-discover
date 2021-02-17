/*
  if...else
        
*/

let temperature = 37.4
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >=37

if (highTemperature) {
  console.log('Está com febre alta')
} else if (mediumTemperature) {
  console.log('Está com febre moderada')
} else {
  console.log('Está saldável')
}

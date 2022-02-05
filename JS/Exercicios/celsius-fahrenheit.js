/* 
   Crie uma função que receba uma string em celsius ou fahrenheit
   e faça a transformação de uma unidade para outra 
      C = (F - 32) * 5/9 
      F = C * 9/5 + 32
 */

      function convertTemperture(temperature) {
         const isCelcius = temperature.toUpperCase().includes('C')
         const isFahrenheit = temperature.toUpperCase().includes('F')
       
         const value = Number(temperature.slice(0, temperature.length -1))
       
         if(isCelcius) {
           updatedTemperature = value * 9/5 + 32
           
         } else if(isFahrenheit) { 
           updatedTemperature = (value - 32) * 5/9
       
         } else {
           return 'Formato inválido'
         }
       
         return updatedTemperature
       }
        
       console.log(convertTemperture('0c'))
// Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
//     * receitas: [] 
//     * despesas: []
// Agora, crie uma função que irá calcular o total de receitas e 
// despesas e irá mostrar uma mensagem se a família está com 
// saldo positivo ou negativo, seguido do valor do saldo.


let cashFlow = {
   incomes: [
     1200,
     500,
     3000,
     700,
   ],
   expenses: [
     100,
     1500,
     550,
     400,
     997,
   ]
 }
 
 function sum(data) {
   let total = 0;
 
   for(let value of data) {
     total += value
   }
 
   return total
 }
 
 function calcBalance() {
   
   const totalIncomes = sum(cashFlow.incomes)
   const totalExpenses = sum(cashFlow.expenses)
 
   const totalBalance = totalIncomes - totalExpenses
 
   const itsOk = totalBalance >= 0
 
   const balaneMessage = itsOk ? "positivo" : "negativo"
 
   console.log(`Seu saldo está ${balaneMessage}: R$ ${totalBalance.toFixed(2)}`)
 }
 
 calcBalance(cashFlow)
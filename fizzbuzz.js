/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */
const fizzbuzz =(n) => {
if(n<=100){
let multi3 = 
    n % 3 === 0 && n % 5 === 0 ? 
    "fizzbuzz" : 
    n % 5 === 0 ? 
    "buzz" : 
    n % 3 === 0 ? 
    "fizz" :
    n
console.log(multi3)
fizzbuzz(n + 1)
}else{
  return
}
}
fizzbuzz(1)

//sum all numbers prime before to number target
function sumPrimes(num) {
  const primes =[]
  
  let count=2
  while(count<=num){
    primes.push(count)
    count++
  }
  
    return primes.filter(number=>{
    let attemps=0
    let count=2
    while(count<=number){
      if(Number.isInteger(number/count))
        attemps++
      count++
    }
    return attemps>=2 ? false : true
  }).reduce((acc,current)=>acc+current)
}

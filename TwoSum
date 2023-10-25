/*
Two Sum exercise Without Loops
*/
function twoSum(array:number[],target:number) :number[]{
  let indexes=[]
  const obj={}
array.reduce(function (valorAnterior, valorActual, indice) {
obj[valorAnterior + valorActual] = [indice-1,indice]
  //the currentvalue change to te pre-value for this return currentvalue that doesnt not effect
  return valorActual;
});
  return obj[target]??[]
}
twoSum([1,2,3,4,5],7)

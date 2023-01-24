/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */
_fizzbuzz(n) {
  int fizz = n % 3;
  int buzz = n % 5;
  String fizzbuzz = (fizz==0 && buzz==0) ? 'fizzbuzz': '';
  if(n<=100){
    dynamic result = fizz==0 ? 'fizz': (buzz==0)? 'buzz':n;
    print (result);
     _fizzbuzz(n+1);  
  }else{
    return;
  }
  
}

void main() {
 _fizzbuzz(1);
}


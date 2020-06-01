function get_fibonacci_number(index_number) {
  let fibonacci_number = 0;
  let fib1 = 0; //1 -> 0
  let fib2 = 1; //2 -> 1
  for (let counter = 0; counter < index_number && index_number > 1; counter++) {
    //for loop
    //compute the fibonacci number for the current counter;
    fibonacci_number = fib1 + fib2;
    fib1 = fib2;
    fib2 = fibonacci_number;
  }
  return fibonacci_number;
}
console.log(get_fibonacci_number(0)); //0
console.log(get_fibonacci_number(1)); //0
console.log(get_fibonacci_number(2)); //1
console.log(get_fibonacci_number(3)); //3
console.log(get_fibonacci_number(4)); //5

/* Fizz buzz
This is a classic programming task.
Create a function that prints the numbers from 1 to 100. 
But for multiples of three print Fizz instead of the number and 
for the multiples of five print Buzz.
 For numbers which are multiples of both three and five print FizzBuzz.
When that works. Make the two number for multiples into parameters. So it can be called like this:
fizzBuzz(4, 12); */
function fizzbuzz(num1, num2) {
  for (let i = 0; i < 100; i++) {
    if (i % num1 == 0 && i % num2 == 0) {
      console.log("FizzBuzz(" + i + ")");
    } else if (i % num1 == 0) {
      console.log("Fizz(" + i + ")");
    } else if (i % num2 == 0) {
      console.log("Buzz(" + i + ")");
    } else {
      console.log(i);
    }
  }
}
console.log(fizzbuzz(3, 4));

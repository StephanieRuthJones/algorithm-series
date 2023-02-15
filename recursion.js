// Explanation: Factorials are a mathematical operation that
//multiplies a number by each of the numbers below it, down to 1.
//For example: 4! = 4 x 3 x 2 x 1 = 24.

//Write an iterative function in JavaScript called factorial() that takes a number, n, as a parameter and returns the factorial of that number.

const factorial = (n) => {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};
console.log(factorial(4));
//Write a recursive function in JavaScript called recursiveFactorial() that takes a number, n, as a parameter and returns the factorial of that number.

// Recursive solution:

function recursiveFactorial(n) {
  // base case
  if (n === 1) {
    return 1;
  }
  // recursive case
  return n * factorial(n - 1);
}
console.log(recursiveFactorial(4));
// Explanation: The function takes a number, n, as a parameter and checks if n is equal to 1.
//If it is, the recursive function returns 1.
//If it isn't, the recursive case returns n multiplied by the factorial of n minus 1.
//This causes the function to call itself recursively until n is equal to 1,
//at which point it returns 1 and the recursive calls return their results up the call stack.

// Let's look at an example: computing 5!.

// You can compute 5! as 5⋅4!.
// Now you need to solve the subproblem of computing 4!, which you can compute as 4⋅3!.
// Now you need to solve the subproblem of computing 3!, which is 3⋅2!.
// Now 2!, which is 2⋅1!.
// Now you need to compute 1!. You could say that 1! equals 1, because it's the product of all the integers from 1 through 1. Or you can apply the formula that 1! = 1⋅0!. Let's do it by applying the formula.
// We defined 0! to equal 1.
// Now you can compute 1! = 1⋅0!=1.
// Having computed 1! = 1, you can compute 2! = 2⋅1! = 2.
// Having computed 2! = 2, you can compute 3! = 3⋅2! = 6.
// Having computed 3! = 6, you can compute 4! = 4⋅3! = 24.
// Finally, having computed 4! = 24, you can finish up by computing 5! = 5⋅4! = 120.
// So now we have another way of thinking about how to compute the value of n!, for all nonnegative integers n:

// If n = 0, then declare that n! = 1.
// Otherwise, n must be positive. Solve the subproblem of computing (n−1)!, multiply this result by n, and declare n! equal to the result of this product.
// When we're computing n! in this way, we call the first case, where we immediately know the answer, the base case, and we call the second case, where we have to compute the same function but on a different value, the recursive case.

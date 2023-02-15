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
console.log(factorial(4)); //24
console.log(factorial(0)); //1
console.log(factorial(2)); //2
console.log(factorial(5)); //120
//Write a recursive function in JavaScript called recursiveFactorial() that takes a number, n, as a parameter and returns the factorial of that number.
// If the user enters the number 0, the program will return 1.
// If the user enters a number greater than 0, the program will recursively call itself by decreasing the number.
// This process continues until the number becomes 1. Then when the number reaches 0, 1 is returned.
// Recursive solution:

function recursiveFactorial(num) {
  //if number is 0
  if (num === 0) {
    //return 1
    return 1;
  }
  //if the number is positive
  else {
    //return the number multiplied by the factorial of the number minus 1
    return num * recursiveFactorial(num - 1);
  }
}
console.log(recursiveFactorial(4)); //24
console.log(recursiveFactorial(0)); //1
console.log(recursiveFactorial(2)); //2
console.log(recursiveFactorial(5)); //120
console.log(recursiveFactorial(3)); //6

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

//A palindrome is a word that is spelled the same forward and backward. Any string that contains NO letters or one letter is a palendrome.
//For example, rotor and redder are palindromes, but motor is not.
//Write a recursive function in JavaScript called isPalindrome() that takes a string, s,
//as a parameter and returns true if s is a palindrome and false otherwise.

// Base case #1

// Start by implementing the first base case: if the length of the string is 0 or 1, isPalindrome() should return true.

// Base case #2

// If the first and last characters of the string are different, then we know immediately that the string is not a palindrome.

// Recursive case

// Finally, write the recursive case. Remove the first and last characters from the string and call isPalindrome function with the remaining string.

const isPalindrome = (s) => {
  //if the length of the string is 0 or 1, isPalindrome() should return true.
  if (s.length === 0 || s.length === 1) {
    return true;
  }
  //If the first and last characters of the string are different,
  //then we know immediately that the string is not a palindrome.
  //Remove the first and last characters from the string and call isPalindrome function with the remaining string.
  if (s[0] === s[s.length - 1]) {
    return isPalindrome(s.slice(1, s.length - 1));
  }
  return false;
};
console.log(isPalindrome("rotor")); //true
console.log(isPalindrome("redder")); //true
console.log(isPalindrome("motor")); //false
console.log(isPalindrome("racecar")); //true
console.log(isPalindrome("madam")); //true
console.log(isPalindrome("buddy")); //false

// How would we describe that in pseudocode?

// If the string is made of no letters or just one letter, then it is a palindrome.
// Otherwise, compare the first and last letters of the string.
// If the first and last letters differ, then the string is not a palindrome.
// Otherwise, the first and last letters are the same. Strip them from the string, and determine whether the string that remains is a palindrome. Take the answer for this smaller string and use it as the answer for the original string.

// Write a recursive function that takes in an array of numbers and returns the sum of all the numbers in the array.

function sumArray(arr) {
  // Base case
  if (arr.length === 0) {
    return 0;
  }

  // Recursive call
  return arr[0] + sumArray(arr.slice(1));
}

// Explanation: This function takes an array of numbers as an argument and returns the sum of all the numbers
//in the array.The base case is when the length of the array is 0,
//in which case we know the sum is 0. If the length of the array is greater than 0,
//we add the first element of the array to the result of a recursive call of the same function
//but with the inner portion of the array(the slice method is used to cut off the first element).
//The result of the recursive call will be the sum of the rest of the elements in the array.

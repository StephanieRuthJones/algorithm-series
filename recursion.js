// Explanation: Factorials are a mathematical operation that
//multiplies a number by each of the numbers below it, down to 1.
//For example: 4! = 4 x 3 x 2 x 1 = 24.

//Write an iterative function in JavaScript called factorial() that takes a number, n, as a parameter and returns the factorial of that number.

const factorial = (n) => {};
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

function recursiveFactorial(num) {}
console.log(recursiveFactorial(4)); //24
console.log(recursiveFactorial(0)); //1
console.log(recursiveFactorial(2)); //2
console.log(recursiveFactorial(5)); //120

//A palindrome is a word that is spelled the same forward and backward. Any string that contains NO letters or one letter is a palendrome.
//For example, rotor and redder are palindromes, but motor is not.
//Write a recursive function in JavaScript called isPalindrome() that takes a string, s,
//as a parameter and returns true if s is a palindrome and false otherwise.
const isPalindrome = (s) => {};
console.log(isPalindrome("rotor")); //true
console.log(isPalindrome("redder")); //true
console.log(isPalindrome("motor")); //false
console.log(isPalindrome("racecar")); //true
console.log(isPalindrome("madam")); //true
console.log(isPalindrome("buddy")); //false

// Write a recursive function that takes in an array of numbers and returns the sum of all the numbers in the array.

function sumNums(array) {}
console.log(sumNums([1, 2, 3, 4, 5])); //15
console.log(sumNums([1, 2, 3, 4, 5, 6])); //21
console.log(sumNums([1, 2, 3, 4, 5, 6, 7])); //28
console.log(sumNums([1, 2, 3, 4, 5, 6, 7, 8])); //36
console.log(sumNums([0, 0, 0, 0, 0, 0, 0, 0])); //0
console.log(sumNums([])); //0

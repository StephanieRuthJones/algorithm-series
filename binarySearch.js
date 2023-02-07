//BINARY SEARCH

//PROBLEM 1
//Use binary search to find an element with a given value in a sorted array.
//Return - 1 if the value is not found.
//findElement([1, 2, 3, 4, 5], 2); //Output: 1
//findElement([1, 2, 3, 4, 5], 5); //Output: 4
//findElement([1, 2, 3, 4, 5], 6); //Output: -1
const findElement = (arr, val) => {};

console.log(findElement([1, 2, 3, 4, 5], 2)); //1
console.log(findElement([1, 2, 3, 4, 5], 5)); //4
console.log(findElement([1, 2, 3, 4, 5], 6)); //-1

//PROBLEM 2 - binary search + recursion
//Use binary search with recursion to find an element's index with a given value in a sorted array of strings.

const cart = ["apple", "banana", "grape", "orange", "pear", "pineapple"]; //alphabetically sorted array
const findElementRecursively = (array, targetElement, start, end) => {};

console.log(findElementRecursively(cart, "orange", 0, cart.length - 1)); //3
console.log(findElementRecursively(cart, "pineapple", 0, cart.length - 1)); //5
console.log(findElementRecursively(cart, "apple", 0, cart.length - 1)); //0
console.log(findElementRecursively(cart, "kiwi", 0, cart.length - 1)); //-1

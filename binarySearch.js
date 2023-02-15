//BINARY SEARCH

//PROBLEM 1
//Use binary search to find an element's index with a given value in a sorted array.
//Return - 1 if the value is not found.
const findElement = (arr, val) => {};

console.log(findElement([1, 2, 3, 4, 5], 2)); //1 => index of the value
console.log(findElement([1, 2, 3, 4, 5], 5)); //4
console.log(findElement([1, 2, 3, 4, 5], 6)); //-1

//PROBLEM 2 - binary search + recursion
//Use binary search to find the number of occurrences of a given value in a sorted array.
//find the target value
//look for the other elements that match the value
const findOccurrences = (arr, val) => {};

console.log(findOccurrences([1, 1, 2, 2, 2, 2, 3], 2)); //Output: 4
console.log(findOccurrences([1, 1, 2, 2, 2, 2, 3], 3)); //Output: 1
console.log(findOccurrences([1, 1, 2, 2, 2, 2, 3], 1)); //Output: 2
console.log(findOccurrences([1, 1, 2, 2, 2, 2, 3], 5)); //Output: 0 => not in array

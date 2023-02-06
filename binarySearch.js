//BINARY SEARCH
//Binary search is a search algorithm that finds the position of a target value within a sorted array.
//Binary search compares the target value to the middle element of the array.
//If they are not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half, again taking the middle element to compare to the target value, and repeating this until the target value is found.
//If the search ends with the remaining half being empty, the target is not in the array.
//Binary search runs in logarithmic time in the worst case, making O(log n) comparisons, where n is the number of elements in the array, and therefore is much more efficient than linear search, which makes O(n) comparisons, where n is the number of elements in the array.
//Binary search is faster than linear search except for small arrays.
//Binary search only works on sorted arrays.
//Binary search is a divide and conquer algorithm.
//When to use binary search: When you need to find a value in a sorted array.
//When not to use binary search: When you need to find a value in an unsorted array.

//PROBLEM 1
//Use binary search to find the index of a given value in a sorted array.
//Example: binarySearch([1,2,3,4,5], 2) -> 1
//Example: binarySearch([1,2,3,4,5], 5) -> 4
const binarySearch = (arr, val) => {
  let start = 0; //This line is declaring the variable start and setting its value to 0.
  let end = arr.length - 1; //This line is declaring the variable end and setting its value to the length of the array minus 1.
  let middle = Math.floor((start + end) / 2); //This line is declaring the variable middle and setting its value to the middle of the array.
  while (arr[middle] !== val && start <= end) { //This line is declaring a while loop that will run as long as the value of the middle of the array is not equal to the value we are looking for and the start is less than or equal to the end.
    if (val < arr[middle]) end = middle - 1; //This line is declaring an if statement that will run if the value we are looking for is less than the value of the middle of the array. If this is true, the end will be set to the middle minus 1.
    else start = middle + 1; //This line is declaring an else statement that will run if the value we are looking for is greater than the value of the middle of the array. If this is true, the start will be set to the middle plus 1.
    middle = Math.floor((start + end) / 2); //This line is declaring the variable middle and setting its value to the middle of the array.
  }
  return arr[middle] === val ? middle : -1; //This line is declaring a ternary statement that will return the middle of the array if the value of the middle of the array is equal to the value we are looking for. If the value of the middle of the array is not equal to the value we are looking for, it will return -1.
};

console.log(binarySearch([1, 2, 3, 4, 5], 2)); //1
console.log(binarySearch([1, 2, 3, 4, 5], 5)); //4

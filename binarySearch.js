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

//BINARY SEARCH PSEUDOCODE
//Let min = 0 and max = n-1.
// If max < min, then stop: target is not present in array. Return -1.
// Compute guess as the average of max and min, rounded down (so that it is an integer).
// If array[guess] equals target, then stop. You found it! Return guess.
// If the guess was too low, that is, array[guess] < target, then set min = guess + 1.
// Otherwise, the guess was too high. Set max = guess - 1.
// Go back to step 2.

//PROBLEM 1
//Use binary search to find the index of a given value in a sorted array.
//Return - 1 if the value is not found.
//Example: findIndex([1,2,3,4,5], 2) -> 1
const findIndex = (arr, val) => {
  //set min to 0 and max to n-1 (array length - 1)
  let min = 0;
  let max = arr.length - 1;
  //Compute the "middle" as the average of min and max, rounded down (so that it is an integer)
  let middle = Math.floor((min + max) / 2);
  //while the middle is not equal to the value (while we have not found the value)
  //and min is less than or equal to max (while we have not reached the end of the array)
  //run the while loop
  while (arr[middle] !== val && min <= max) {
    //If the target val is lower than the middle,
    //set the max to the middle - 1 so that we can search the lower half of the array
    if (val < arr[middle]) max = middle - 1;
    //If the target val is higher than the middle,
    //set the min to the middle + 1 so that we can search the upper half of the array
    else min = middle + 1;
    //Compute the middle again based on the new values of min and max
    middle = Math.floor((min + max) / 2);
  }
  //If the middle is not equal to the target value,
  //return -1 to signal that it is NOT in the array
  if (arr[middle] !== val) return -1;
  //If array[middle] equals the target value, then stop. You found it! Return middle.
  return middle;
};

console.log(findIndex([1, 2, 3, 4, 5], 2)); //1
console.log(findIndex([1, 2, 3, 4, 5], 5)) //4
console.log(findIndex([1, 2, 3, 4, 5], 6)) //-1

//PROBLEM 2
//Find the maximum number in a sorted array of integers.
//Example: findMax([1,2,3,4,5]) -> 5
//Example: findMax([1,2,3,4,5,6,7,8,9,10]) -> 10
const findMax = (arr) => {};

//PROBLEM 3
//Find the number of times a certain number appears in a sorted array of integers.
//Example: findCount([1,1,1,1,1,1,1,1,1,1], 1) -> 10
//Example: findCount([1,1,1,1,1,1,1,1,1,1], 2) -> 0
const findCount = (arr, val) => {
  //Find the middle of the array.
  let start = 0; //This line is declaring the variable start and setting its value to 0.
  let end = arr.length - 1; //This line is declaring the variable end and setting its value to the length of the array minus 1.
  let middle = Math.floor((start + end) / 2); //This line is declaring the variable middle and setting its value to the middle of the array.
  //If the value of the middle of the array is not equal to the value we are looking for and the start is less than or equal to the end, run the while loop.
  //If the value we are looking for is less than the value of the middle of the array, set the end to the middle minus 1.
  while (arr[middle] !== val && start <= end) {
    //This line is declaring a while loop that will run as long as the value of the middle of the array is not equal to the value we are looking for and the start is less than or equal to the end.
    if (val < arr[middle]) end = middle - 1;
    //This line is declaring an if statement that will run if the value we are looking for is less than the value of the middle of the array. If this is true, the end will be set to the middle minus 1.
    else start = middle + 1; //This line is declaring an else statement that will run if the value we are looking for is greater than the value of the middle of the array. If this is true, the start will be set to the middle plus 1.
    middle = Math.floor((start + end) / 2); //This line is declaring the variable middle and setting its value to the middle of the array.
  }
  //If the value of the middle of the array is not equal to the value we are looking for, return 0.
  if (arr[middle] !== val) return 0; //This line is declaring an if statement that will run if the value of the middle of the array is not equal to the value we are looking for. If this is true, it will return 0.
  let count = 1; //This line is declaring the variable count and setting its value to 1.
  let left = middle - 1; //This line is declaring the variable left and setting its value to the middle minus 1.
  let right = middle + 1; //This line is declaring the variable right and setting its value to the middle plus 1.
  while (arr[left] === val) {
    //This line is declaring a while loop that will run as long as the value of the left of the array is equal to the value we are looking for.
    count++; //This line is incrementing the count by 1.
    left--; //This line is decrementing the left by 1.
  }
  while (arr[right] === val) {
    //This line is declaring a while loop that will run as long as the value of the right of the array is equal to the value we are looking for.
    count++; //This line is incrementing the count by 1.
    right++; //This line is incrementing the right by 1.
  }
  return count; //This line is declaring a return statement that will return the count.
};

//PROBLEM 4
//Find the index of a certain number in a sorted array which appears multiple times.
const binarySearchMultiple = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  let index = -1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (arr[middle] === target) {
      index = middle;
      end = middle - 1;
    } else if (target < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return index;
};

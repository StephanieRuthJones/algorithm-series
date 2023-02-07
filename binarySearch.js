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

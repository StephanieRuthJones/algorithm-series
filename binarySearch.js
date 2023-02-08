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
//Use binary search to find an element with a given value in a sorted array.
//Return - 1 if the value is not found.
//INPUT/OUTPUT
//findElement([1, 2, 3, 4, 5], 2); //Output: 1
//findElement([1, 2, 3, 4, 5], 5); //Output: 4
//findElement([1, 2, 3, 4, 5], 6); //Output: -1

const findElement = (arr, val) => {
  //set min to 0 and max to n-1 (array length - 1)
  let min = 0,
    max = arr.length - 1,
    //Compute the "middle" as the average of min and max, rounded down (so that it is an integer)
    middle = Math.floor((min + max) / 2);
  //while the middle is not equal to the value (while we have not found the value)and min is less than or equal to max (while we have not reached the end of the array) run the while loop
  while (arr[middle] !== val && min <= max) {
    //If the target val is lower than the middle, set the max to the middle - 1 so that we can search the lower half of the array
    if (val < arr[middle]) max = middle - 1;
    //If the target val is higher than the middle, set the min to the middle + 1 so that we can search the upper half of the array
    else min = middle + 1;
    //Compute the middle again based on the new values of min and max
    middle = Math.floor((min + max) / 2);
  }
  //If the middle is not equal to the target value, return -1 to signal that it is NOT in the array
  if (arr[middle] !== val) return -1;
  //If array[middle] equals the target value, then stop. You found it! Return middle.
  return middle;
};

console.log(findElement([1, 2, 3, 4, 5], 2)); //1
console.log(findElement([1, 2, 3, 4, 5], 5)); //4
console.log(findElement([1, 2, 3, 4, 5], 6)); //-1

//PROBLEM 2 - binary search
//Use binary search to find the number of occurrences of a given value in a sorted array.
//findOccurrences([1, 1, 2, 2, 2, 2, 3], 2); //Output: 4
//findOccurrences([1, 1, 2, 2, 2, 2, 3], 3); //Output: 1
//findOccurrences([1, 1, 2, 2, 2, 2, 3], 1); //Output: 2

const findOccurrences = (array, targetValue) => {
  let start = 0,
    end = array.length - 1,
    count = 0;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (array[middle] === targetValue) {
      let left = middle - 1,
        right = middle + 1;
      while (left >= start && array[left] === targetValue) {
        count++;
        left--;
      }
      while (right <= end && array[right] === targetValue) {
        count++;
        right++;
      }
      return count + 1;
    } else if (array[middle] < targetValue) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return 0;
};

console.log(findOccurrences([1, 1, 2, 2, 2, 2, 3], 2)); //Output: 4
console.log(findOccurrences([1, 1, 2, 2, 2, 2, 3], 3)); //Output: 1
console.log(findOccurrences([1, 1, 2, 2, 2, 2, 3], 1)); //Output: 2
console.log(findOccurrences([1, 1, 2, 2, 2, 2, 3], 5)); //Output: 0

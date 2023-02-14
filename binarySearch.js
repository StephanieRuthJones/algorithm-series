//BINARY SEARCH

//PROBLEM 1
//Use binary search to find an element's index with a given value in a sorted array.
//Return - 1 if the value is not found.
const findElement = (arr, val) => {
  //min and max are the indexes of the elements in the array
  let min = 0,
    max = arr.length - 1,
    middle = Math.floor((min + max) / 2);
  if (val === arr[middle]) {
    return middle;
  }
  //while the value hasn't been found
  while (arr[middle] !== val && min <= max) {
    //if the middle is lower than the target, set the min to the middle + 1
    if (arr[middle] < val) {
      min = middle + 1;
    } else {
      max = middle - 1;
    }
    middle = Math.floor((min + max) / 2);
  }
  if (arr[middle] !== val) return -1;
  return middle;
};

console.log(findElement([1, 2, 3, 4, 5], 2)); //1 => index of the value
console.log(findElement([1, 2, 3, 4, 5], 5)); //4
console.log(findElement([1, 2, 3, 4, 5], 6)); //-1

//PROBLEM 2 - binary search + recursion
//Use binary search to find the number of occurrences of a given value in a sorted array.
//find the target value
//look for the other elements that match the value
const findOccurrences = (arr, val) => {
  let min = 0,
    max = arr.length - 1;
  count = 0;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    if (arr[middle] === val) {
      let left = middle - 1;
      let right = middle + 1;
      while (left >= start && arr[left] === val) {
        count++;
        left--;
      }
      while (right <= end && arr[right] === val) {
        count++;
        right++;
      }
      return count + 1;
    } else if (arr[middle] < val) {
      min = middle + 1;
    } else {
      max = middle - 1;
    }
  }
  return 0;
};

console.log(findOccurrences([1, 1, 2, 2, 2, 2, 3], 2)); //Output: 4
console.log(findOccurrences([1, 1, 2, 2, 2, 2, 3], 3)); //Output: 1
console.log(findOccurrences([1, 1, 2, 2, 2, 2, 3], 1)); //Output: 2
console.log(findOccurrences([1, 1, 2, 2, 2, 2, 3], 5)); //Output: 0 => not in array

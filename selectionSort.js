//Write a selection sort function that takes an array of integers as an argument and returns a sorted array.
//Our selection sort function starts by looping over the array and setting the minIndex variable to the index of the current item. We then loop over the rest of the array, comparing each item to the current item and updating the minIndex variable if the item is smaller.
//Once we find the smallest item, we swap it with the current item and move on to the next item.

// const selectionSort = (arr) => {
//   let minIndex;
//   let temp;
//   for (let i = 0; i < arr.length; i++) {
//     minIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     temp = arr[i];
//     arr[i] = arr[minIndex];
//     arr[minIndex] = temp;
//   }
//   return arr;
// };

// Write a function that takes an array of strings and sorts them alphabetically using selection sort.
// function alphabeticalSelectionSort(arr) {
//   let minIndex;
//   let temp;
//   for (let i = 0; i < arr.length; i++) {
//     minIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     temp = arr[i];
//     arr[i] = arr[minIndex];
//     arr[minIndex] = temp;
//   }
//   return arr;
// }

const countDown = (num) => {
  if (num <= 0) {
    console.log(num);
    num--;
    countDown(num);
  }
};

countDown(10);




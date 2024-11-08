function insertionSort(inputArr) {
  let len = inputArr.length; // Get the length of the array
  for (let i = 1; i <= len - 1; i++) {
    // Start from the second element
    let temp = inputArr[i]; // Save the current element in temp
    let j = i - 1; // Set j to the previous index
    // Shift elements to the right until we find the correct position
    while (j >= 0 && inputArr[j] > temp) {
      inputArr[j + 1] = inputArr[j];
      j--;
    }
    inputArr[j + 1] = temp; // Insert temp in its sorted position
  }
  return inputArr;
}

let arr = [6, 3, 2, 1, 5];
console.log(insertionSort(arr)); // Output: [1, 2, 3, 5, 6]

function palindrome(str) {
  let palArray = str.split("");
  let left = 0;
  let right = palArray.length - 1;

  while (left < right) {
    if (palArray[left] !== palArray[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(palindrome("12321")); // Output: true

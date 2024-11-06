function findHighest(str) {
  let highest = str[0];
  for (let i = 1; i < str.length; i++) {
    if (str[i] > highest) {
      highest = str[i];
    }
  }

  return highest;
}

console.log(findHighest([1, 45, -21, 16, 9])); // Output: 45

function removeDuplicates(arr) {
  let updatedArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (updatedArray.indexOf(arr[i]) === -1) {
      updatedArray.push(arr[i]);
    }
  }
  return updatedArray;
}

console.log(removeDuplicates(["we", "want", "we", "have"]));
// [ 'we', 'want', 'have' ]

//2
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates(["we", "want", "we", "have"]));
// [ 'we', 'want', 'have' ]

//SOLUTION 1
function reverseString(str) {
  const strArray = str.split("");

  let newArray = [];
  for (let i = strArray.length - 1; i >= 0; i--) {
    newArray.push(strArray[i]);
  }

  return newArray.join("");
  // return result
}

console.log(reverseString("Hello"));

//SOLUTION 2
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("Hello"));

//SOLUTION 3 Decrementing Loop
function reverseString(str) {
  let arrString = str.split("");
  let left = 0;
  let right = arrString.length - 1;

  while (left < right) {
    [arrString[left], arrString[right]] = [arrString[right], arrString[left]];
    left++;
    right--;
  }
  return arrString.join("");
}
console.log(reverseString("Hello"));

//4 RECURSION
function reverseString(str) {
  if (str === "") {
    return "";
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}
console.log(reverseString("Hello"));

// REDUCE FN
function reverseString(str) {
  return str.split("").reduce((init, char) => char + init, "");
}
console.log(reverseString("Hello"));

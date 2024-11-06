function countVowels(str) {
  let count = 0;

  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    )
      count++;
  }

  return count;
}

console.log(countVowels("adelabu"));

//2
function countVowels(str) {
  return str.match(/[aeiou]/gi)?.length || 0;
}

console.log(countVowels("adelabuu")); //5

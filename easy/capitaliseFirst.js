//Capitalize the first letter

function capFirst(str) {
  return str
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
}

console.log(capFirst("i love you"));

// split, map, slice, join

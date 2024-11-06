function factorial(str) {
  if (str === 0) {
    return 1;
  }
  let result = 1;
  for (let i = 1; i <= str; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(4));

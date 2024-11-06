function alternativeCalculator(expression) {
  const tokenize = (expr) => expr.split(" ").filter(Boolean);

  const parseExpression = (tokens) => {
    const token = tokens.pop();

    if (/^\d+$/.test(token)) {
      return Number(token);
    } else {
      const left = parseExpression(tokens);
      const right = parseExpression(tokens);
      switch (token) {
        case "+":
          return left + right;
        case "-":
          return left - right;
        case "*":
          return left * right;
        case "/":
          return left / right;
        default:
          throw new Error(`Unsupported operator: ${token}`);
      }
    }
  };

  const tokens = tokenize(expression).reverse(); // Reverse tokens for correct parsing order
  return parseExpression(tokens);
}

console.log(alternativeCalculator("+ 3 4")); // Should return 7

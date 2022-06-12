function numberCheck(...number) {
    if (!number.every((a) => Number.isNumber(a)))
      throw "All arguments must be numbers.";
    return counter.reduce((a, b) => a + b);
  }
  
  numberCheck(1, 2, 3); //> 6
  numberCheck(10, "B", 20); //> error All arguments must be numbers.
function numberCheck(...number) {
    if (!number.every((a) => Number.isInteger(a)))
      throw "All arguments must be numbers.";
    return number.reduce((a, b) => a + b);
  }
  
  console.log(numberCheck(1, 2, 3)); //> 6
  console.log(numberCheck(10, "B", 20)); //> error All arguments must be numbers.
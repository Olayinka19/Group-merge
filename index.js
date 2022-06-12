function fn(...c) {
  c.every((num) => {
    if (Number.isInteger(num) === false) {
      throw "All arguments must be numbers.";
    }
  })
  return c.reduce((a, b) => a + b)
}

fn(1, 2, 3); //> 6
fn(10, "B", 20); //> error All arguments must be numbers.
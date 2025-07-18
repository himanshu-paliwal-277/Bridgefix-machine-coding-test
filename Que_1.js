function fun(a, b) {
  if (a.length <= b.length) {
    return a + b + a;
  }
  return b + a + b;
}

// Test Case 1:
console.log(fun("Hi", "There"));

// Test Case 2:
console.log(fun("Elephent", "Ji"));

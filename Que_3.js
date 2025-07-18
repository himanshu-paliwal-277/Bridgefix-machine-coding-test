function fun(arr) {
  let i = 0;
  let j = arr.length;
  let maxAmount = -Infinity;

  while (i < j) {
    const a = j - i;
    const b = Math.min(arr[i], arr[j]);

    const newMax = a * b;
    if (newMax > maxAmount) {
      maxAmount = newMax;
    }
    if (arr[i] <= arr[j]) {
      i++;
    } else {
      j--;
    }
  }
  return maxAmount;
}

// Test Case 1:
console.log(fun([1, 8, 6, 2, 5, 4, 8, 3, 7]));

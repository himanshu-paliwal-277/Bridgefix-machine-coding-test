function fun(s, k) {
  const result = [];
  let i = 0;
  let j = 1;

  while (j < s.length) {
    if (s[i] !== s[j]) {
      result.push(s[i] + s[j]);
      console.log(`${s[i]}${s[j]}`);
      if (result.length === k) return result;
      i += 2;
      j += 2;

      continue;
    }
    i++;
    j++;
  }

  return result;
}

// Test Case 1:
fun("AABCAAADA", 3);


function productExceptSelf(nums) {
  let n = nums.length;
  let right = new Array(n);
  let left = new Array(n);
  let output = new Array(n);

  left[0] = 1;
  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  console.log(left);

  right[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < n; i++) {
    output[i] = left[i] * right[i];
  }

  return output;
}

console.log(productExceptSelf([1, 2, 3, 4]));

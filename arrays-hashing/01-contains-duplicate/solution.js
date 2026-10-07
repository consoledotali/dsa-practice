// Approach 1: Brute Force — compare every pair
// Time: O(n^2), Space: O(1)
function containsDuplicateBruteForce(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) return true;
    }
  }
  return false;
}

// Approach 2: Sort a COPY, then check neighbors
// Time: O(n log n), Space: O(n) for the copy
// Note: sorting loses original indices
function containsDuplicateSort(nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === sorted[i - 1]) return true;
  }
  return false;
}

// Approach 3: Hash Set — track seen values
// Time: O(n), Space: O(n)
function containsDuplicate(nums) {
  const seen = new Set();
  for (const n of nums) {
    if (seen.has(n)) return true; // already seen = duplicate
    seen.add(n);
  }
  return false;
}

const cases = [[1, 2, 3, 3], [1, 2, 3, 4], [], [5, 5, 5, 5]];
for (const c of cases) {
  console.log(
    JSON.stringify(c),
    "→",
    containsDuplicateBruteForce(c),
    containsDuplicateSort(c),
    containsDuplicate(c),
  );
}

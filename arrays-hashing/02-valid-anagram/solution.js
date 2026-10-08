// Approach 1: Sort both strings and compare
// Time: O(n log n), Space: O(n) for the split arrays
function isAnagramSort(s, t) {
  if (s.length !== t.length) return false;
  return [...s].sort().join("") === [...t].sort().join("");
}

// Approach 2: Frequency Map (best)
// Time: O(n), Space: O(1) — at most 26 lowercase letters
function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const count = new Map();
  for (const ch of s) {
    count.set(ch, (count.get(ch) || 0) + 1);
  }

  for (const ch of t) {
    if (!count.has(ch)) return false; // char never seen in s
    count.set(ch, count.get(ch) - 1);
    if (count.get(ch) < 0) return false; // char seen too many times
  }

  return true;
}

// Approach 3: Plain object as frequency counter
// Time: O(n), Space: O(1) — same idea, object instead of Map
function isAnagramObject(s, t) {
  if (s.length !== t.length) return false;

  const count = {};
  for (const ch of s) count[ch] = (count[ch] || 0) + 1;

  for (const ch of t) {
    if (!count[ch]) return false;
    count[ch]--;
  }

  return true;
}

// tests
const cases = [
  ["anagram", "nagaram", true],
  ["rat", "car", false],
  ["aab", "abb", false],
  ["ab", "a", false],
  ["", "", true],
];

for (const [s, t, expected] of cases) {
  const r1 = isAnagramSort(s, t);
  const r2 = isAnagram(s, t);
  const r3 = isAnagramObject(s, t);
  console.log(`"${s}" vs "${t}" →`, r1, r2, r3, "| expected:", expected);
}

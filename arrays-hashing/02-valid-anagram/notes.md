# Valid Anagram

## Approaches

1. **Sort + compare** — sort both strings, join, check equality. O(n log n) time.
2. **Frequency Map (best)** — count chars of `s` in a Map, then decrement while walking `t`. Missing char or negative count → false. O(n) time, O(1) space (max 26 letters).
3. **Plain object** — same as Map but with an object. Works here, but Map is safer (no prototype-key pitfalls, keys can be any type).

## Complexity (best approach)

- Time: O(n) — two separate loops, Map ops are O(1)
- Space: O(1) — at most 26 lowercase letters stored

## Why not Set?

Set tracks existence only — "aab" and "abb" both give {a, b}. Counts need key→value, so Map (or object).

## Edge cases

- different lengths → false (early O(1) exit)
- empty strings → true (both loops skip, vacuously anagrams)

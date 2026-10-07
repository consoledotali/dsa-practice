# Contains Duplicate

## Approaches

1. **Brute Force** — compare every pair (i, j). O(n²) time, O(1) space. Too slow for n = 10⁵ (~5 billion comparisons).
2. **Sort + neighbors** — sort the array, duplicates become adjacent, compare neighbors. O(n log n) time, O(1) space. Downside: original indices are lost.
3. **Hash Set (best)** — keep a set of seen values. For each number: if already in set → duplicate, return true; else add it. O(n) time, O(n) space.

## Complexity (best approach)

- Time: O(n) — each element visited once, set operations are O(1) on average
- Space: O(n) — worst case stores all elements

## Edge cases

- `[]` → false (loop never runs)
- single element → false (duplicate impossible)

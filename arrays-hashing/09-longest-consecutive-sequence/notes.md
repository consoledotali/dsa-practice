# 09 - Longest Consecutive Sequence

## Problem

Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence.
The algorithm must run in O(n) time.

Example: `[100, 4, 200, 1, 3, 2]` → `4` (the sequence 1, 2, 3, 4)

## Approach (Set + Sequence Starts Only)

- Put all numbers into a Set for O(1) lookups (the Set also removes duplicates).
- For each number, check if `num - 1` exists in the Set. If it does, this number is in the middle of a sequence — skip it.
- Only when `num - 1` is missing is this number the start of a sequence. From there, count upward (`num + 1`, `num + 2`, ...) while the numbers keep existing in the Set.
- Track the maximum streak found.

## Complexity

- **Time:** O(n) — although there is a loop inside a loop, each number is visited at most twice overall: once by the outer loop, and once while counting a streak. Because counting only starts at sequence beginnings, no streak is ever counted twice.
- **Space:** O(n) — the Set stores every number from the input.

## Key Points

- Sorting the array would cost O(n log n). The Set removes the need to sort entirely.
- The `num - 1` check is the heart of the solution — without it, counting from every number would repeat the same work and degrade to O(n^2).
- Edge case: an empty array returns 0.

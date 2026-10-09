# Two Sum

## Problem
Given array `nums` and integer `target`, return indices of two numbers that add up to `target`.

## Approaches
1. Brute force — check every pair. O(n^2) time, O(1) space.
2. Hash map, one pass — for each num, compute `need = target - num`; if seen before, return both indices. O(n) time, O(n) space.

## Key insight
Check the map BEFORE storing the current number — so the map only holds previous elements and an element can never pair with itself.

## Mistakes I made
- Used `(a, b)` instead of `[a, b]` — comma operator returns only the last value.
- Forgot `let` in the for loop.

## Complexity
Time: O(n), Space: O(n)

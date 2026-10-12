# Top K Frequent Elements

## Problem
Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. Order does not matter.

Example: `nums = [1,1,1,2,2,3]`, `k = 2` → `[1,2]`

## Approach 1: Sort by frequency
1. Count frequencies with a hash map.
2. Sort entries by frequency (descending).
3. Take the first `k` keys.

- Time: O(n log n), Space: O(n)

## Approach 2: Bucket sort (optimal)
1. Count frequencies with a hash map.
2. Build buckets where the index IS the frequency: `buckets[f]` holds every number appearing `f` times. Max frequency is `n`, so `n + 1` buckets suffice.
3. Walk buckets from the end and collect until `k` elements are gathered.

Key insight: frequency used directly as an array index — no comparison sort needed.

- Time: O(n), Space: O(n)

## Approach 3: Min-heap of size k
1. Count frequencies.
2. Maintain a min-heap of at most `k` entries by frequency; evict the smallest whenever it exceeds `k`.
3. The survivors are the top `k`.

Note: this version simulates the heap with `Array.sort` per insert → O(n·k log k). A true binary heap gives O(n log k).

- Time: O(n·k log k) here, O(n log k) with a real heap. Space: O(n).

## Takeaway
Bucket sort makes it linear by trading comparisons for index positioning — the same trick behind counting sort.

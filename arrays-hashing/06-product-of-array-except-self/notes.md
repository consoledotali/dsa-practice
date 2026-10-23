# 06 - Product of Array Except Self

## Problem
Given an integer array `nums`, return an array `answer` where `answer[i]` is the product of all elements of `nums` except `nums[i]`.
Division is not allowed.

Example: `[1,2,3,4]` → `[24,12,8,6]`

## Approach (Prefix / Suffix)
- Build a `left` array: `left[i]` = product of all elements to the left of `i`. (`left[0] = 1`, nothing on its left.)
- Build a `right` array: `right[i]` = product of all elements to the right of `i`. (`right[n-1] = 1`.)
- Answer for each index is simply `left[i] * right[i]` — everything except the element itself.

## Complexity
- **Time:** O(n) — three separate passes over the array, each doing one multiplication per element.
- **Space:** O(n) — two extra arrays (`left` and `right`) that grow with the input size.

## Key Points
- Setting the first/last element to 1 handles the edges — an empty side contributes nothing to a product.
- Follow-up: this can be optimized to O(1) extra space by storing the prefix directly in the output array and multiplying the suffix while traversing from the right.

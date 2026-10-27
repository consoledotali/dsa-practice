# 07 - Valid Sudoku

## Problem

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be checked:

- Each row must contain the digits 1-9 without repetition.
- Each column must contain the digits 1-9 without repetition.
- Each of the nine 3 x 3 sub-boxes must contain the digits 1-9 without repetition.
  Empty cells are marked with `"."`.

Example: a valid board → `true`; the same board with a duplicate `8` in the first column → `false`

## Approach (One Pass, Three Sets)

- Create 9 Sets for rows, 9 for columns, and 9 for boxes.
- Walk through every cell once. For each filled cell, check if its digit already exists in that row's set, column's set, or box's set.
- If it exists anywhere → duplicate → return `false`. Otherwise, add the digit to all three sets and continue.
- If the whole board passes, return `true`.

## Complexity

- **Time:** O(1) — the board is always 9 x 9, so we check exactly 81 cells no matter what. (For a general N x N board it would be O(N^2).)
- **Space:** O(1) — 27 sets holding at most 9 digits each, a fixed maximum.

## Key Points

- The trick of the problem is the box index formula: `Math.floor(r / 3) * 3 + Math.floor(c / 3)`. Dividing by 3 tells which band of 3 the row/column falls in, and combining them maps any cell to its box (0-8).
- Sets give O(1) "have I seen this digit here before?" checks.
- We only validate the current board state — the board does not need to be solvable.

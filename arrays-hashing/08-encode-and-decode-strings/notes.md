# 08 - Encode and Decode Strings

## Problem

Design an algorithm to encode a list of strings into a single string, and decode it back into the original list.
The strings can contain any characters, including the separator character itself.

Example: `["lint", "code"]` → encoded: `"4#lint4#code"` → decoded: `["lint", "code"]`

## Approach (Length-Prefix Encoding)

- **Encode:** For each string, write its length, then `#`, then the string itself: `length#string`.
  Example: `"lint"` becomes `"4#lint"`.
- **Decode:** Read the number before the first `#` — that is the exact length of the next string.
  Slice exactly that many characters after the `#`, push the string to the result, and jump the pointer past it. Repeat until the encoded string ends.

## Complexity

- **Time:** O(n) for both encode and decode, where n is the total number of characters across all strings — every character is read once.
- **Space:** O(n) — the encoded string and the decoded list are both proportional to the total input size.

## Key Points

- A separator alone (like joining with `#`) breaks when a string itself contains `#`. Storing the length first removes all ambiguity — decode never guesses where a string ends, it counts.
- The length can be more than one digit (e.g. `12#...`), so decode must read all digits up to `#`, not just one character.
- Edge cases handled: empty list `[]` encodes to `""`, and an empty string `""` encodes to `"0#"` and decodes back to `[""]`.

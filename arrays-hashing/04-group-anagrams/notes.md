# Group Anagrams

## The Rule
Sort each word's letters to build its key — anagrams always produce the same key. The key only locates the group; the original word is what gets stored in it.

## Approach
1. For each word, sort its letters to form the key (its "identity"). Anagrams share the same key.
2. Use a Map of key → list of words. If the key is missing, create a new list; if present, append the word to that list.
3. Return all Map values — each list is one anagram group.

## Complexity
- The loop runs n times (n = number of words).
- The most expensive step inside is sorting: O(k log k), where k = longest word length.
- Time: O(n · k log k). Space: O(n) — the Map holds every word.

## Level 2 (future optimization)
- Count the 26 letters instead of sorting to build the key → O(n · k).

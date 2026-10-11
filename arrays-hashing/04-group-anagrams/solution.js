function groupAnagrams(strs) {
    const map = new Map();

    for (let i = 0; i < strs.length; i++) {
        const key = strs[i].split('').sort().join('');

        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(strs[i]);
    }

    return [...map.values()];
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));

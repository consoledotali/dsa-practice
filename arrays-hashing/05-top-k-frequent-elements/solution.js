// Sort Method

function topKFrequent(nums, k) {
    let map = new Map()
    for (let num of nums) {
        map.set((num), (map.get(num) || 0) + 1)
    }
    const sorted = [...map.entries()].sort((a,b) => (b[1]- a[1]))
    return  sorted.slice(0, k).map((entry) => (entry [0]))
}

// Bucket Sort Method

function topKFrequentBucket(nums, k) {
    let map = new Map();
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    // Buckets banao (length = nums.length + 1)
    let buckets = new Array(nums.length + 1).fill(null).map(() => []);

    // Map se buckets mein daalo
    for (let [num, freq] of map) {
        buckets[freq].push(num);
    }

    // Peeche se chalo, top k nikaalo
    const result = [];
    for (let i = buckets.length - 1; i >= 0; i--) {
        for (let val of buckets[i]) {
            result.push(val);
            if (result.length === k) return result;
        }
    }

    return result;
}


// Min-Heap Method

function topKFrequentHeap(nums, k) {
    let map = new Map()

    for (let num of nums) {
        map.set((num), (map.get(num) || 0) + 1)
    }

    let heap = []

    for (let [key, val] of map) {
        heap.push([key, val])
        heap.sort((a, b) => a[1] - b[1]);

        if (heap.length > k) {
            heap.shift()
        }
    }
    return heap.map((entry) => entry[0])
}

//2206. Divide Array Into Equal Pairs
// You are given an integer array nums consisting of 2 * n integers.

// You need to divide nums into n pairs such that:

// Each element belongs to exactly one pair.
// The elements present in a pair are equal.
// Return true if nums can be divided into n pairs, otherwise return false.

 

// Example 1:

// Input: nums = [3,2,3,2,2,2]
// Output: true
// Explanation: 
// There are 6 elements in nums, so they should be divided into 6 / 2 = 3 pairs.
// If nums is divided into the pairs (2, 2), (3, 3), and (2, 2), it will satisfy all the conditions.


var divideArray = function (nums) {
    const n = nums.length
    const map = new Map()
    for (let i of nums) {
        map.set(i, (map.get(i) || 0) + 1)
    }
    // console.log(map)
    for (let [k, v] of map) {
        if (v % 2 === 1) return false
    }
    return true
};

const nums = [3,2,3,2,2,2]

console.log(divideArray(nums))
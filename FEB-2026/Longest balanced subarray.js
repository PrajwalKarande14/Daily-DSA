//3719. Longest Balanced Subarray I : https://leetcode.com/problems/longest-balanced-subarray-i/description
// You are given an integer array nums.
// A subarray is called balanced if the number of distinct even numbers in the subarray is equal to the number of distinct odd numbers.
// Return the length of the longest balanced subarray.

// Example 1:
// Input: nums = [2,5,4,3]
// Output: 4
// Explanation:
// The longest balanced subarray is [2, 5, 4, 3].
// It has 2 distinct even numbers [2, 4] and 2 distinct odd numbers [5, 3]. Thus, the answer is 4.

const nums = [3,6,7,2,3,4,6]

var longestBalanced = function (nums) {
    const n = nums.length
    var ans = 0
    for(let i = 0;i<n;i++){
        const map = new Map()
        odd = 0;
        even = 0;
        if(nums[i]%2===0) even++
        else odd++
        map.set(nums[i],(map.get(nums[i])||0)+1);
        for(let j=i+1;j<n;j++){
            if(nums[j]%2===0 && !map.has(nums[j])) even++
            else if(!map.has(nums[j])) odd++
                    map.set(nums[j],(map.get(nums[j])||0)+1);
            if(even === odd) ans = Math.max(ans,j-i+1)
        }
    }
    return ans
    
};

console.log(longestBalanced(nums))

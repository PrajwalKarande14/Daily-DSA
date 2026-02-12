// https://leetcode.com/problems/minimum-removals-to-balance-array/description/
// You are given an integer array nums and an integer k.

// An array is considered balanced if the value of its maximum element is at most k times the minimum element.

// You may remove any number of elements from nums​​​​​​​ without making it empty.

// Return the minimum number of elements to remove so that the remaining array is balanced.

// Note: An array of size 1 is considered balanced as its maximum and minimum are equal, and the condition always holds true.

 
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minRemoval = function(nums, k) {
    const n = nums.length
    nums.sort((a,b)=>a-b)
    let l = 0
    let r = 0
    let len = 0
    while(r<n){
        while(nums[r]<=nums[l]*k && r<n){
            len = Math.max(len,r-l+1)
            r++
        }
        if(nums[r]>nums[l]*k){
            while(nums[r]>nums[l]*k && l<r) l++
        }
    }
    return n-len

};
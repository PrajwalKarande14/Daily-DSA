// 3835. Count Subarrays With Cost Less Than or Equal to K :https://leetcode.com/problems/count-subarrays-with-cost-less-than-or-equal-to-k/description/
// You are given an integer array nums, and an integer k.

// For any subarray nums[l..r], define its cost as:

// cost = (max(nums[l..r]) - min(nums[l..r])) * (r - l + 1).

// Return an integer denoting the number of subarrays of nums whose cost is less than or equal to k.

var countSubarrays = function (nums, k) {
    const n = nums.length
    var cnt = 0
    var l = 0

    const minQueue = []
    const maxQueue = []
    for (let r = 0; r < n; r++) {
        while(minQueue.length && nums[minQueue[minQueue.length-1]]>=nums[r]){
            minQueue.pop()
        }
        minQueue.push(r)

        while(maxQueue.length && nums[maxQueue[maxQueue.length-1]]<=nums[r]){
            maxQueue.pop()
        }
        maxQueue.push(r)

        while(((nums[maxQueue[0]] - nums[minQueue[0]]) * (r-l+1)) > k){
            if(maxQueue[0] === l) maxQueue.shift()
            if(minQueue[0] === l) minQueue.shift()
            l++
        }
        const len = r-l+1
        cnt += len

    }
    return cnt

}

// 693. Binary Number with Alternating Bits
// Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.

// Example 1:
// Input: n = 5
// Output: true
// Explanation: The binary representation of 5 is: 101

var hasAlternatingBits = function(n) {
    var ans = true
    n = n.toString(2)
    for(let i=1;i<n.length;i++){
        const sum = Number(n[i]) + Number(n[i-1])
        if(sum!=1)
        {
           ans = false
           break 
        }
    }
    return ans
};

console.log(hasAlternatingBits(892))
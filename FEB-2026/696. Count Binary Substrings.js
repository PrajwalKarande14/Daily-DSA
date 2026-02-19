// 696. Count Binary Substrings
// Given a binary string s, return the number of non-empty substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.

// Substrings that occur multiple times are counted the number of times they occur.
// Example 1:
// Input: s = "00110011"
// Output: 6
// Explanation: There are 6 substrings that have equal number of consecutive 1's and 0's: "0011", "01", "1100", "10", "0011", and "01".


var countBinarySubstrings = function(s) {
    var cnt = 0
    const freqs = []
    let i= 0 
    while(i<s.length){
        var curr = s[i]
        var currCnt = 0
        while(s[i] === curr){
            currCnt++
            i++
        }
        freqs.push(currCnt)
    }
    console.log(freqs)
    for(let i=0;i<=freqs.length-2;i++){
        cnt+=Math.min(freqs[i],freqs[i+1])
    }
    return cnt
};

console.log(countBinarySubstrings("00110011"))

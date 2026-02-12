// 3713. Longest Balanced Substring I : https://leetcode.com/problems/longest-balanced-substring-i/description/
// You are given a string s consisting of lowercase English letters.

// A substring of s is called balanced if all distinct characters in the substring appear the same number of times.

// Return the length of the longest balanced substring of s.


/**
 * @param {string} s
 * @return {number}
 */
var longestBalanced = function(s) {
    const n = s.length
    var len = 0

    for(let i=0;i<n;i++){
        const freq = Array(26).fill(0)
        for(let j=i;j<n;j++){
            const idx = s.charCodeAt(j)-97

            freq[idx]++

            let balanced = true
            let count = -1

            for(let k=0;k<26;k++){
                if(freq[k]!==0){
                    if(count === -1){
                        count = freq[k]
                    }else if(freq[k] !== count){
                        balanced = false    
                        break
                    }
                }
            }

            if(balanced){
                len = Math.max(len,j-i+1)
            }


        }
    }

    return len

};


s = "zzabccabcyy"
console.log(longestBalanced(s))
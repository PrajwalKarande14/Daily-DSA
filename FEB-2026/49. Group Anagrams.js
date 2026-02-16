// 49. Group Anagrams
// Given an array of strings, group the anagrams together. You can return the answer in any order.

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const ans = []
    const temp = []
    const n = strs.length
    const map = new Map()
    for(let s in strs){
        const str = strs[s].split("").sort().join("")
        if(!map.has(str)){
            map.set(str,[])
        }
        map.get(str).push(strs[s])
    }
    return Array.from(map.values())
};
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
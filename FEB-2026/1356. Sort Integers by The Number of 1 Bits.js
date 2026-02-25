// 1356. Sort Integers by The Number of 1 Bits

// You are given an integer array arr. Sort the integers in the array in ascending order by the number of 1's in their binary representation and in case of two or more integers have the same number of 1's you have to sort them in ascending order.
// Return the array after sorting it.

 

// Example 1:

// Input: arr = [0,1,2,3,4,5,6,7,8]
// Output: [0,1,2,4,8,3,5,6,7]
// Explantion: [0] is the only integer with 0 bits.
// [1,2,4,8] all have 1 bit.
// [3,5,6] have 2 bits.
// [7] has 3 bits.
// The sorted array by bits is [0,1,2,4,8,3,5,6,7]

var sortByBits = function(arr) {
    const compare = (a,b) => {
        const ans = ones(a.toString(2))-ones(b.toString(2))
        if(ans === 0) return a-b
        return ans
    }
   return arr.sort((a,b)=>compare(a,b)) 
}; 

function ones(s){
    let cnt = 0
    for(let i of s){
        if(i === '1') cnt++
    }
    return cnt
}


console.log(sortByBits([1024,512,256,128,64,32,16,8,4,2,1]))
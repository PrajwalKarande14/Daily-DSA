// 84. Largest Rectangle in Histogram
// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

// Example 1:
// Input: heights = [2,1,5,6,2,3]
// Output: 10

var largestRectangleArea = function(heights) {
    const n = heights.length
    var maxArea = 0
    const stack = []

    for(let i = 0; i<=n; i++){
        const currentHeight = i === n ?  0 :heights[i];
        while(stack.length && heights[stack[stack.length-1]]>=currentHeight){
            const height = heights[stack.pop()];
            const width = stack.length ? i - stack[stack.length-1] -1 : i
            maxArea = Math.max(maxArea,(height * width))
        }

        stack.push(i)
    }
    return maxArea

}

console.log(largestRectangleArea([2,1,5,6,2,3]))
// Given an unsorted array arr[] of size n, containing elements from the range 1 to n, it is known that one number in this range is missing, and another number occurs twice in the array, find both the duplicate number and the missing number.

// Examples:

// Input: arr[] = [2, 2]
// Output: [2, 1]
// Explanation: Repeating number is 2 and the missing number is 1.

function findTwoElement(arr) {
    const map = new Map()
    var sum = 0
    var double
    var currSum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += i + 1
        if (map.has(arr[i])) double = arr[i]
        map.set(arr[i], (map.get(arr[i]) || 0) + 1)
        currSum += arr[i]
    }
    var missing = double + (sum - currSum)
    return [double, missing]

}

console.log(findTwoElement([1,2,2]))
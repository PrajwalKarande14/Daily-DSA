// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"


const s = "PAYPALISHIRING"

var convert = function (s, numRows) {
    if(numRows === 1 ||  numRows>=s.length){
        return s
    }
    
    const rows = Array.from({length:numRows},()=>"")
    currentRow = 0
    var goingDown = false
    for(const char of s){
        rows[currentRow]+=char
        if(currentRow === 0 || currentRow === numRows-1 ){
            goingDown = !goingDown
        }
        currentRow+= goingDown?1:-1
    }
    return rows.join("")
};

console.log(convert(s, 3)) // "PAHNAPLSIIGYIR"
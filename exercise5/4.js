// Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
// of the same length.
// Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

const input_a = [1, 2, 3]
const input_b = [3, 2, 1]

let arr = [];

for ( let i = 0; i < input_a.length; i++) {
    arr.push(input_a[i]+input_b[i])
}

console.log(arr)
// Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// a. Example : numbers = [1, 2, 3, 4, 5, 6] → [2, 4, 6]

function remove_odd_numbers (arr) {
    let result = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i])
        }
    }
    return result
}

console.log(remove_odd_numbers([1, 2, 3, 4, 5, 6]))
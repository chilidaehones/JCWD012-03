// Write a function that will combine 2 given array into one array
// a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]

function combine_array (arr1, arr2) {
    return arr1.concat(arr2)
}

console.log(combine_array([1, 2, 3], [4, 5, 6]))

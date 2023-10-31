// Write a function to find duplicate values in an array
// a. Example : arr = [2, 2, 2, 3, 3, 5, 5] → [2, 3, 5]

function remove(index, arr) {
    let result_arr = []
    for (let i = 0; i < arr.length; i++) {
        if (index === i) {
        } else {
            result_arr.push(arr[i])
        }
    }
    return result_arr
}
function find_dup (arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j=i+1; j<arr.length-1; j++) {
            if (arr[i] === arr[j]) {
                delete arr[j]
            }
        }
    }
    return arr
}

console.log(find_dup([2, 2, 2, 3, 3, 5, 5]))
// Write a function that adds an element to the end of an array. However, the element should only be added if it is
// not already in the array.
// a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
// b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]

function add_element_to_array (arr, newElement) {
    if (arr[arr.length - 1] === newElement) {
        return arr
    } else {
        arr.push(newElement);
        return arr
    }
}

const a = [1, 2, 3, 4];

console.log(add_element_to_array(a,4))
console.log(add_element_to_array(a,7))
//Write a function to split a string and convert it into an array of words
//Example : “Hello World” → [“Hello”, “World”]

const input = "Hello World"

let arr = [];

let space = 0;

for (let i = 0; i < input.length; i++) {
    if (input[i] != " ") {
        if (i === (input.length -1)) {
            arr.push(input.substring(space+1,i+1))
        }
    } else {
        arr.push(input.substring(space,i))
        space = i
    }
}
console.log(arr)
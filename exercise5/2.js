//Write a function that takes an array of words and returns a string by concatenating the words in the array,
//separated by commas and - the last word - by an 'and'.

//Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”

const input = ["apple", "banana", "cherry", "date"]

con_sentence = "";
for (let i = 0; i < input.length; i++){
    if (i != input.length - 1) {
        con_sentence += input[i] + ", "
    } else {
        con_sentence += "and " + input[i]
    }
}
console.log(con_sentence)
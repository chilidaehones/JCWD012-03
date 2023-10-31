//Example input: [10, 55, 79, 32]
//Example output: 79

let input = [10, 55, 79, 32];

function compare (a,b) {
    switch (a>=b) {
        case true:
            return a;
        case false:
            return b;
    }
}
let highest = 0;
for(let i = 0; i < input.length; i++){
    if(i===0) {
        highest = compare(input[i], input[i+1]);
    } else {
        highest = compare(input[i], highest)
    };
}
console.log(highest)

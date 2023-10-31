//Write a function to get the lowest, highest and average value in the array (with and without sort function).

const input = [12, 5, 23, 18, 4, 45, 32];

function compare_highest (a,b) {
    switch (a >= b){
        case true:
            return a
        case false:
            return b
    }
}

function compare_lowest (a,b) {
    switch (a <= b){
        case true:
            return a
        case false:
            return b
    }
}

function without_sort (arr) {
    let lowest = 0;
    let highest = 0;
    let avg = 0;
    //find highest
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            highest = arr[i]
        } else {
            highest = compare_highest(highest, arr[i])
        }
    }
    console.log("Highest number is " + highest.toString())

    //find lowest
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            lowest = arr[i]
        } else {
            lowest = compare_lowest(arr[i], lowest)
        }
    }
    console.log("Lowest number is " + lowest.toString())

    //calculate average
    for (let i = 0; i < arr.length; i++) {
        avg += arr[i]
        if (i === arr.length - 1) {
            avg = avg/(i+1)
        }
    }
    console.log("Average number is " + avg.toString())

}

without_sort(input)

//with sort

function with_sort(arr) {
    arr.sort(function(a, b){return a - b})
    console.log("Highest number is " + arr[arr.length-1].toString())
    console.log("Lowest number is " + arr[0].toString())
}

with_sort(input)
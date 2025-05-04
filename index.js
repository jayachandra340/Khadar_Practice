// //factorial
// function factorial(n) {
//     if (n < 0) {
//         return "undefined";
//     } else if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }
// console.log(factorial(10)); // Output: 3628800

//hey man im jc git lo update chesthunna le uruko kangarupadaku

// linear search code
// const prompt = require("prompt-sync")()
// let arr=[12,34,45,5,40,30,10,38,46,4]
// let search = Number(prompt("enter search number: "))
// function linearsort(arr, search) {
//     for (let i of arr) {
//         if (i === search) {
//             return `number ${search} found at ${arr.indexOf(i)}`
//         }
//     }
//     return "number not found"
// }
// let result = linearsort(arr,search)
// console.log(result)

//binary search code
const prompt =require("prompt-sync")()
let arr = [12, 34, 45, 5, 40, 30, 10, 38, 46, 4];
let search = Number(prompt("Enter search number: "));
arr = arr.sort((a, b) => a - b); // Sort the array in ascending order
let f = 0;
let l = arr.length - 1;

function binarySearch(arr, search, f, l) {
    while (f <= l) {
        let m = Math.floor((f + l) / 2); // Calculate the middle index
        if (arr[m] === search) {
            return `Number ${search} found`;
        } else if (arr[m] < search) {
            f = m + 1; // Search in the right half
        } else {
            l = m - 1; // Search in the left half
        }
    }
    return "Number not found";
}

let result = binarySearch(arr, search, f, l);
console.log(result);
//done
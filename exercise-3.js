// Write a code to display the multiplication table of a given integer.

let num = 4;
let i = 1;
for (let i = 1; i <= 10; i++){
  console.log(num + " x " + i + " = " + num * i);
};

//Write a code to check whether a string is a palindrome or not.
let str = "madam";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--){
  reversed += str[i];
};
if (str === reversed) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome")
};

//Write a code to convert centimeter to kilometer.

let cm = 100000
let km;
km = cm / 100000;
console.log(km + " Km");

//Write a code to format number as currency

let amount = 3000;
const currency = "Rp. ";
let x = amount.toString();
for (let i = 1; i <= x.length; i++){
  if (i % 3 === 0) {
    x = x.slice(0,x.length-i) + "." + x.slice(x.length-i,x.length);
  };
}
console.log(currency + x + ",00")

//Write a code to remove the first occurrence of a given “search string” from a string
let str1 = "belajar di purwadhika";
let search = "di";
let result ="";
for (let i = 0; i < str1.length; i++) {
  if (search === str1.slice(i, i + search.length)) {
    result = str1.slice(0, i) + str1.slice(i + search.length, str1.length);
    break;
  } else {
    result = str1;
  }
};
console.log(result)

//Write a code to capitalize the first letter of each word in a string
let str2 = "belajar di purwadhika";
let capitalize = "";
for (let i = 0; i < str2.length; i++) {
  if (i === 0) {
    capitalize += str2[i].toUpperCase();
  } else if (str2[i] === " ") {
    capitalize += str2[i];
    capitalize += str2[i + 1].toUpperCase();
    i++;
  } else {
    capitalize += str2[i];
  }
};
console.log(capitalize);

//Write a code to reverse a string.
let str3 = "belajar di purwadhika";
let reverse = "";
for (let i = str3.length - 1; i >= 0; i--) {
  reverse += str3[i];
};
console.log(reverse);

//Write a code to swap the case of each character from string
let str4 = "belajar di purwadhika";
let swap = "";
for (let i = 0; i < str4.length; i++) {
  if (str4[i] === str4[i].toUpperCase()) {
    swap += str4[i].toLowerCase();
  } else {
    swap += str4[i].toUpperCase();
  }
};
console.log(swap);

//Write a code to find the largest of two given integers
let num1 = 6;
let num2 = 7;
if (num1 > num2) {
  console.log(num1);
} else {console.log(num2)};

//Write a conditional statement to sort three numbers
let num3 = 7;
let num4 = 6;
let num5 = 5;

if (num3 > num4 && num3 > num5) {
  if (num4 > num5) {
    console.log(num5 + " " + num4 + " " + num3);
  } else {
    console.log(num4 + " " + num5 + " " + num3);
  }
} else if (num4 > num3 && num4 > num5) {
  if (num3 > num5) {
    console.log(num5 + " " + num3 + " " + num4);
  } else {
    console.log(num3 + " " + num5 + " " + num4);
  }
} else {
  if (num3 > num4) {
    console.log(num4 + " " + num3 + " " + num5);
  } else {
    console.log(num3 + " " + num4 + " " + num5);
  }
};

//Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.

let obj = 123

switch (typeof obj) {
  case "string":
    console.log(1);
    break;
  case "number":
    console.log(2);
    break;
  default:
    console.log(3);
}

//Write a code to change every letter a into * from a string of input

let sentence = "An apple a day keeps the doctor away";
let replace_a = "";
for (let i = 0; i < sentence.length; i++) {
  if (sentence[i].toLowerCase() === "a") {
    replace_a += "*";
  } else {
    replace_a += sentence[i];
  }
};
console.log(replace_a);
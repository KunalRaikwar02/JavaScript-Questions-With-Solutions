                                                    // Functions Basics \\ 
                                                     // Beginner Level \\

// ---> Create a function named greet that prints "Hello World" .
// function greet() {
//     console.log("Hello World");
// }
// greet();


// ---> Create a function add(a, b) that returns the sum.
// function add(a, b) {
//     return a + b;
// }
// let result = add(10, 20);
// console.log(result);


// ---> Write a function to calculate the square of a number.
// function square(num) {
//     return num * num;
// }
// let result = square(5);
// console.log(result);


// ---> Create a function that checks whether a number is even or odd.
// function checkEvenOdd(num) {
//     if (num % 2 === 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }
// let result = checkEvenOdd(4);   
// console.log(result);


// ---> Write a function that converts Celsius to Fahrenheit.
// function celsiusToFahrenheit(c) {
//     return (c * 9 / 5) + 32;
// }
// let result = celsiusToFahrenheit(25);
// console.log(result);


// ---> Create a function with default parameter "Guest" .
// function greet(name = "Guest") {
//     console.log(name);
// }
// greet();


// ---> Write a function that returns the greater of two numbers.
// function greater(a, b) {
//     if (a > b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// let result = greater(20, 10);
// console.log(result);


// ---> Create a function to calculate area of rectangle.
// function rectangleArea(length, width) {
//     return length * width;
// }
// let result = rectangleArea(10, 5);
// console.log(result);


// ---> Write a function that returns "Adult" if age ≥ 18 else "Minor" .
// function age(age) {
//     if (age >= 18) {
//         return "Adult";
//     } else {
//         return "Minor";
//     }
// }
// let result = age(20);
// console.log(result);


// ---> Create a function to reverse a string.
// function reverse(a) {
//     return a.split("").reverse().join("");
// }
// let result = reverse("Kunal");
// console.log(result);


                                                    // Intermediate Level \\


// ---> Write a function expression for multiplication.
// let multiply = function(a, b) {
//     return a * b;
// };
// let result = multiply(5, 4);
// console.log(result);


// ---> Convert a normal function into an arrow function.
// let a = () => {
//     console.log("hello");
// }
// a();


// ---> Create a function that accepts unlimited numbers and returns their sum using rest operator.
// let sum = (...a) => {
//     return a.reduce((total, num) => total + num, 0);
// }
// let result = sum(5, 5);
// console.log(result);


// ---> Write a function that counts vowels in a string.
// function countVowels(str) {
//     let count = 0;
//     for (let char of str) {
//         if ( char === "a" || char === "e" || char === "i" || char === "o"||char === "u" ) {
//             count++;
//         }
//     }
//     return count;
// }
// let result = countVowels("JavaScript");
// console.log(result);


// ---> Create a function that checks if a string is palindrome.
// function isPalindrome(str) {
//     let reverse = str.split("").reverse().join("");
//     if (str === reverse) {
//         return "Palindrome";
//     } else {
//         return "Not Palindrome";
//     }
// }
// let result = isPalindrome("madam");
// console.log(result);


// ---> Write a callback function example using setTimeout .
// function aru(){
//     setTimeout(() => {
//         console.log("hello");   
//     }, 1000);
// }
// aru();


// ---> Create a higher-order function that executes another function twice.




// let arr = 'Kunal'
// console.log(arr.split("").reverse("_").join(""))

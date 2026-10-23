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


                                                    // Functions Basics Intermediate Level \\


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
// function parent(child) {
//     child();
//     child();
// }
// function child() {
//     console.log("I am child");
// }
// parent(child);


// ---> Write a function that returns another function.
// let fun = () => {
//     return () => {
//         console.log("hello")
//     }
// }
// fun()()


// ---> Create a pure function for subtraction.
// function subtract(a, b) {
//     return a - b;
// }
// console.log(subtract(5, 2));


// ---> Create an impure function using global variable modification.
// let count = 3;
// function add() {
//     count++;
//     console.log(count);
// }
// add();


                                               //  Arrays Basics Beginner \\

// ---> Create an array of 5 fruits.
// let fruits = ["Mango","Orange","Apple","Banana","Pomegranate"];


// ---> Print first and last element of array.
// let fruits = ["Mango","Orange","Apple","Banana","Pomegranate"];
// console.log(fruits[0], fruits[fruits.length-1]);


// ---> Find length of array.
// let fruits = ["Mango","Orange","Apple","Banana","Pomegranate"];
// console.log(fruits.length);


// ---> Add element at end using push.
// let fruits = ["Mango","Orange","Apple","Banana","Pomegranate"];
// fruits.push("grapes");
// console.log(fruits);


// ---> Remove last element using pop.
// let fruits = ["Mango","Orange","Apple","Banana","Pomegranate"];
// fruits.pop();
// console.log(fruits);


// ---> Add element at beginning using unshift.
// let fruits = ["Mango","Orange","Apple","Banana","Pomegranate"];
// fruits.unshift("watermelons");
// console.log(fruits);


// ---> Remove first element using shift.
// let fruits = ["Mango","Orange","Apple","Banana","Pomegranate"];
// fruits.shift();
// console.log(fruits);


// ---> Reverse an array.
// let fruits = ["Mango","Orange","Apple","Banana","Pomegranate"];
// fruits.reverse();
// console.log(fruits);


// ---> Sort numbers ascending.
// let number = [11, 25, 2, 6, 50, 71, 100, 200, 42, 125, 500];
// number.sort((a,b) => a-b);
// console.log(number);


// ---> Sort numbers descending.
// let number = [11, 25, 2, 6, 50, 71, 100, 200, 42, 125, 500];
// number.sort((a,b) => b-a);
// console.log(number);



                                                // Arrays Basics Intermediate \\


// ---> Use splice to remove elements.
// let num = [11, 25, 2, 6, 50, 71, 100];
// num.splice(1,2);
// console.log(num);


// ---> Use splice to insert elements.
// let num = [11, 25, 2, 6, 50, 71, 100];
// num.splice(1,2,4,50);
// console.log(num);


// ---> Use slice to copy array.
// let num = [11, 25, 2, 6, 50, 71, 100];
// let num2 = num.slice(2,5);
// console.log(num2);


// ---> Find index of an element.
// let num = [11, 25, 2, 6, 50, 71, 100];
// console.log(num.indexOf(25));
// console.log(num.indexOf(100));


// ---> Check if array contains a value.
// let num = [11, 25, 2, 6, 50, 71, 100];
// console.log(num.includes(25));
// console.log(num.includes(250));


// ---> Join array elements with .
// let num = [11, 25, 2, 6, 50, 71, 100, "Kunal", true, [45, 65, 75]];
// console.log(num.flat().join("."));


// ---> Merge two arrays using spread operator.
// let num = [11, 25, 2, 6, 50, 71, 100];
// let num2 = [20, 50, 44, 99, 58, 73];
// let merge = [...num , ...num2];
// console.log(merge);


// ---> Copy array using spread operator.
// let num = [11, 25, 2, 6, 50, 71, 100];
// let num2 = [...num];
// console.log(num2);


// ---> Find maximum value using Math.max .
// let num = [11, 25, 2, 6, 50, 71, 100];
// console.log(Math.max(...num));


// ---> Swap two variables using destructuring.
// let a = 10;
// let b = 30;
// [a,b] = [b,a];
// console.log(a);
// console.log(b);



                                                   // Array Iteration Methods \\


// ---> Use forEach to print all numbers doubled.
// let arr = [2,3,4,5,6];
// arr.forEach((val)=>{
//     console.log(val*2);
// })


// ---> Use map to square all numbers.
// let arr = [2,3,4,5,6];
// let arr2 = arr.map((val)=>{
//     return val*val;
// })
// console.log(arr2);


// Use filter to get even numbers. 
// let arr = [2,3,4,5,6,7];
// let arr2 = arr.filter((val)=>{
//     if(val%2===0){
//         return val;
//     }
// })
// console.log(arr2);


// Use reduce to calculate sum. 
// let arr = [2,3,4,5,6,7];
// let arr2 = arr.reduce((acc, val)=>{
//     return acc + val;
// }, 0)
// console.log(arr2);


// Use reduce to find maximum number. 
// let arr = [2,3,4,5,6,7];
// let arr2 = arr.reduce((acc, val)=>{
//     return acc + val;
// }, 0);
// console.log(arr2);


// Use find to get first even number. 
// let arr = [2,3,4,5,6,7];
// let arr2 = arr.find((val)=>{
//     return val % 2 === 0;
// });
// console.log(arr2);

// Use findIndex to locate number > 50.
// let arr = [2, 3, 4, 5, 6, 70];
// let arr2 = arr.findIndex((val) => {
//     return val > 50;
// });
// console.log(arr2);


// Use some to check if any number is negative.
//  let arr = [2, 3, -4, 5, -6, 70];
//  let arr2 = arr.some((val)=>{
//     if(val<0){
//         return val;
//     }
//  })
//  console.log(arr2);


// Use every to check if all numbers are positive. 
//  let arr = [2, 3, 4, 5, 6, 70];
//  let arr2 = arr.every((val)=>{
//     if(val>0){
//         return val;
//     }
//  })
//  console.log(arr2);


// Create array of names and convert all to uppercase.
// let names = ["Kunal", "Aman", "Golu", "Samay"];
// let allNames = names.map((val)=>{
//     return val.toUpperCase();
// }) 
// console.log(allNames);


// Filter all students with marks > 80. 
// let students = [
//     { name: "Kunal", marks: 90 },
//     { name: "Aman", marks: 75 },
//     { name: "Golu", marks: 85 },
//     { name: "Samay", marks: 60 }
// ];
// let studentsMarks = students.filter((val)=>{
//     return val.marks > 80;
// })
// .map((val)=>{
//     return val.name;
// })
// console.log(studentsMarks);


// Calculate average using reduce. 
// let arr = [10, 20, 30, 40, 50];
// let arr2 = arr.reduce((acc, val)=>{
//     return acc + val;
// }, 0)
// let ans = arr2 / arr.length;
// console.log(ans);


// Count occurrences of numbers in array. 
// let arr = [2, 3, 2, 4, 3, 2, 5, 4];
// let arr2 = arr.reduce((acc, val)=>{
//     if(acc[val]){
//         acc[val]++;
//     }else{
//         acc[val]= 1;
//     }
//     return acc;
// }, {});
// console.log(arr2);


// Flatten nested arrays using flat .
// let arr = [10, [20, 30], [40, 50]];
// console.log(arr.flat());


// Remove duplicates using Set. 
// let arr = [1, 2, 2, 3, 3, 4, 4];
// console.log([...new Set(arr)])


// Sort array of objects by age. 
// let people = [
//     { name: "Kunal", age: 25 },
//     { name: "Aman", age: 18 },
//     { name: "Golu", age: 30 },
//     { name: "Samay", age: 22 }
// ];
// let ans = people.sort((a,b)=> a.age-b.age);
// console.log(ans);


// Find total price of shopping cart. 
// let cart = [
//     { item: "Shoes", price: 2000 },
//     { item: "T-shirt", price: 500 },
//     { item: "Jeans", price: 1200 },
//     { item: "Cap", price: 300 }
// ];
// let ans = cart.reduce((acc, val)=>{
//     return acc + val.price
// },0);
// console.log(ans);


// Group users by age.
// let users = [
//     { name: "Kunal", age: 20 },
//     { name: "Aman", age: 25 },
//     { name: "Golu", age: 20 },
//     { name: "Samay", age: 25 },
//     { name: "Rahul", age: 30 }
// ];
// let ans = users.reduce((acc, val) => {
//     if (!acc[val.age]) {
//         acc[val.age] = [];
//     }
//     acc[val.age].push(val);
//     return acc;
// }, {});
// console.log(ans);
    

// Chain filter and map. 
// let numbers = [2, 5, 8, 11, 14, 17, 20];
// let ans = numbers.filter((val)=>{
//     if(val%2===0){
//         return val;
//     }
// })
// .map((val)=>{
//     return val*2;
// })
// console.log(ans);


// Explain difference between map and forEach.
// let numbers = [1, 2, 3, 4];

//map:
// let ans = numbers.map((val)=>{
//     return val*2;
// })
// console.log(ans);
// console.log(numbers);

//forEach:
// numbers.forEach(()=>{
//     console.log("hey");
// })

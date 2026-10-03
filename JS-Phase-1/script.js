                                              // Console & Basics \\

// ----> Print "Hello JavaScript" in the console. <---- \\
// console.log("Hello JavaScript")


// --> Print your name, age, and city using one console.log() .
// let name = "Kunal";
// let age = 20;
// let city = "Lucknow"
// console.log(name,age,city)


// --> Print a warning message using console.warn() .
// console.warn("Its a warning")


// --> Print an error message using console.error() .
// console.error("its a error")


// --> Use console.table() to display an array of 5 numbers.
// let table = [10,20,30,40,50];
// console.table(table)


                                                   // Variables \\

// --> Create a variable called studentName and store your name in it.
// let student = "Kunal Rai";


// --> Create a variable age and print it.
// let age = 20;
// console.log(age)


// --> Create two variables and swap their values.
// let a = 10;
// let b = 20;

// let val = a; 
// a = b;
// b = val;

// console.log(a,b)


// --> Create a constant variable for PI and print it.
// const PI = 3.14;
// console.log(PI);


// --> Declare a variable without assigning a value and print it.
// let a;
// console.log(a);


// --> Create a variable score and increase it by 10.
// let score = 0;
// score = score + 10;
// console.log(score)


// ----> Create three variables for first name, last name, and full name. <---- \\
// let firstName = "Kunal";
// let lastName = "Raikwar";
// let fullName = "Kunal Raikwar";


                                                    // Data Types \\


// ---> Create variables of type string, number, boolean, null, and undefined.
// let name = "Kunal";
// let age = 20;      
// let bool = true;
// let value = null;
// let item = undefined;

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof bool);
// console.log(typeof value);
// console.log(typeof item);


// ---> Check the type of different variables using typeof .
// let name = "Kunal";
// let age = 20;
// let isStudent = true;
// let value = null;
// let item;

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isStudent);
// console.log(typeof value);
// console.log(typeof item);


// ---> Store your mobile number in a variable and check its type.
// let mobileNumber = 8546965685;
// console.log(typeof mobileNumber);


// ---> Create a variable with value null and check its type. 
// let value = null;
// console.log(typeof value);


// ---> Create a bigint number and print it.
// let number = 102402n;
// console.log(number);



                                                  // Type Conversion & Coercion \\

// ---> Convert the string "50" into a number.
// let num = "50";
// let val = Number(num);
// console.log(typeof val)


// ---> Convert the number 100 into a string.
// let num = 100;
// let val = String(num);
// console.log(typeof val); 


// ---> Convert "true" into a boolean.
// let val = "true";
// let num = Boolean(val);
// console.log(typeof num);


// ---> Check the output of: "5" + 2 "5" - 2 true + 1
// let val = "5" + 2;
// let num = "5" - 2;
// let data = true + 1;
// console.log(val)
// console.log(num)
// console.log(data)


// ---> Create a variable with value "123abc" and convert it into a number.
// let value = "123abc";
// let num = Number(value);
// console.log(typeof num);


// ---> Use parseInt() on "500px" .
// let value = "500px";
// let num = parseInt(value);
// console.log(num)



                                                    // Operators \\

// ---> Add two numbers and print the result.
// let a =  10;
// let b = 20;
// console.log(a+b);



// ---> Find the remainder when 25 is divided by 4.
// let a = 25;
// let b = 4;
// console.log(25%4);


// ---> Find the square of a number using exponent operator.
// let num = 5;
// let square = num ** 2;
// console.log(square);


// ---> Increment a variable using ++ .
// let a = 5;
// a++;
// console.log(a);


// ---> Decrement a variable using .
// let a = 5;
// a--;
// console.log(a);


// ---> Use += operator to increase a variable by 20.
// let a = 20;
// a += 20
// console.log(a)


// ---> Compare two numbers using > , < , >= , <= .
// let a = 10;
// let b = 12;
// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);


// ---> Check if two values are strictly equal using === .
// let a = 20;
// let b = "20";
// console.log(a==b);
// console.log(a===b);


// ---> Compare "10" and 10 using both == and === .
// let a = "10";
// let b = 10;
// console.log(a==b);
// console.log(a===b);


// ---> Create two boolean variables and test && , || , and ! .
// let a = true;
// let b = false;
// console.log(a && b)
// console.log(a || b)
// console.log(!a)
// console.log(!b)



                                                        // Strings \\

// ---> Create a string and print its length.
// let a = "Kunal"
// console.log(a.length)


// ---> Convert a string into uppercase.
// let a = "apple"
// console.log(a.toUpperCase());


// ---> Convert a string into lowercase.
// let a = "KUNAL";
// console.log(a.toLowerCase());


// ---> Check if a string includes the word "JavaScript" .
// let a = "JavaScript";
// console.log(a.includes("JavaScript"));


// ---> Extract the word "World" from "Hello World" .
// let a = "Hello World";
// console.log(a.slice(6))


// ---> Replace "apple" with "mango" in a sentence.
// let a = "I like apple";
// console.log(a.replace("apple", "mango"));


// ---> Split "HTML,CSS,JS" into an array.
// let a = "HTML, CSS, JS";
// console.log(a.split(","))


// ---> Remove extra spaces from a string.
// let a = "   Kunal Raikwar   ";
// console.log(a.trim());


// // ---> Repeat the word "Hi" 5 times.
// let a = "Hi";
// console.log(a.repeat(5));



// ---> Print the first character of a string.
// let a = "Hello";
// console.log(a[1]);


// ---> Use template literals to print: "My name is Aman and I am 20 years old"
// let name = "Kunal";
// let age = 20;
// console.log(`My Name is ${name} and I am ${age} years old`);


                                                    // Numbers & Math \\

// ---> Round 4.7 using Math.round().
// let val = 4.7;
// console.log(Math.round(val));


// ---> Find the square root of 81.
// let a = 81;
// console.log(Math.sqrt(a));


// ---> Find the maximum number from 10, 20, 5, 99 .
// let a = [10,20,5,99];
// console.log(Math.max(...a));


// ---> Generate a random number between 1 and 10.
// console.log(Math.floor(Math.random() * 10));


// ---> Convert "99.99" into an integer.
// let a = 99.99;
// let num = parseInt(a)
// console.log(num)


// ---> Check whether 25 is an integer or not.
// let num = 25;
// console.log(Number.isInteger(num));


// ---> Use toFixed(2) on 3.141592 .
// let num = 3.141592;
// console.log(num.toFixed(2));



                                                    // Conditionals \\

// ---> Check whether a number is positive or negative.
// let num = 10;
// if (num > 0) {
//     console.log("Positive");
// } else if (num < 0) {
//     console.log("Negative");
// } else {
//     console.log("Zero");
// }


// ---> Check whether a number is even or odd.
// let i = 3;
// if(i % 2 == 0) {
//     console.log("Even")
// } else {
//     console.log("Odd")
// }


// ---> Check whether a person is eligible to vote.
// let age = 20;
// if (age >= 18) {
//     console.log("You can vote");
// } else {
//     console.log("You cannot vote");
// }


// ---> Find the largest among two numbers.
// let a = 10;
// let b = 20;
// if (a >= b) {
//     console.log("a is bigger");
// } else {
//     console.log("b is bigger");
// }


// ---> Find the largest among three numbers.
// let a = 10;
// let b = 50;
// let c = 30;
// if (a >= b && b <= c) {
//     console.log("a is bigger");
// } else if (b >= a && b >= c) {
//     console.log("b is bigger");
// } else {
//     console.log("c is bigger")
// }


// ---> Check whether a year is a leap year.
// let year = 20;
// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     console.log("leap year")
// } else {
//     console.log("not leap year")
// }


// ---> Check whether a number is divisible by both 3 and 5.
// let a = 30;
// if (a % 3 === 0 && a % 5 === 0) {
//     console.log("Divisible by both 3 and 5");
// } else {
//     console.log("Not divisible by both");
// }


// ---> Create a simple grading system: 90 → A 75 → B 50 → C below 50 → Fail
// let a = 98;
// if (a >= 90) {
//     console.log("You got A++");
// } else if (a >= 75){
//     console.log("You got B++");
// } else if ( a >= 50){
//     console.log("You got C++");
// } else {
//     console.log("Fail");
// }


// ---> Check whether a character is a vowel or consonant.
// let val = "h";
// if (val === "a" || val === "e" || val === "i" || val === "o" || val === "u"){
//     console.log("its a vowel");
// } else {
//     console.log("its a Consonant");
// }


// ---> Create a calculator using switch statement.
// let a = 10;
// let b = 20;
// let operator = "+";
// switch (operator){
//     case "+":
//         console.log(a+b)
//         break;

//     case "-":
//         console.log(a+b)
//         break;

//     case "*":
//         console.log(a+b)
//         break;

//     case "/":
//         console.log(a+b)
//         break;

//     case "%":
//         console.log(a+b)
//         break;

//     default:
//         console.log("Invalid operator");
// }


// ---> Print the day name based on a number 1 7.
// let day = 5;
// switch (day) {
//     case 1:
//         console.log("Today is Monday");
//         break;
//     case 2:
//         console.log("Today is Tuesday");
//         break;
//     case 3:
//         console.log("Today is Wednesday");
//         break;
//     case 4:
//         console.log("Today is Thursday");
//         break;
//     case 5:
//         console.log("Today is Friday");
//         break;
//     case 6:
//         console.log("Today is Saturday");
//         break;
//     case 7:
//         console.log("Today is Sunday");
//         break;
//     default:
//         console.log("Invalid day number");
// }


// ---> Check whether a username is "admin" and password is "1234" .
// let username = "admin";
// let password = "1234";

// if (username === "admin") {
//     if (password === "1234") {
//         console.log("You are Login");
//     } else {
//         console.log("Wrong Password");
//     }
// } else {
//     if (password === "1234") {
//         console.log("Wrong Username");
//     } else {
//         console.log("Wrong Username and Wrong Password");
//     }
// }
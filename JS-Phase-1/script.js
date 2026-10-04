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



                                                // Truthy & Falsy \\

// ---> Check whether an empty string is truthy or falsy.
// let val = ""
// console.log(Boolean(val));
                  

// ---> Check whether 0 is truthy or falsy.
// let val = 0;
// console.log(Boolean(val))


// ---> Check whether [] is truthy or falsy.
// let val = [];
// console.log(Boolean(val));


// ---> Create a variable and print "Valid" if it has a value otherwise print "Invalid" .
// let a = "20";
// if(a){
//     console.log("valid")
// }else{
//     console.log("invalid")
// }


                                                // Ternary Operator \\
                                        
// ---> Check whether a number is even or odd using ternary operator.
// let a = 10;
// let results = a % 2 === 0 ? "Even" : "Odd";
// console.log(results);


// ---> Check whether age is above 18 using ternary operator.
// let age = 14;
// let result = age>=18 ? "adult" : "young";
// console.log(result);


// ---> Find the greater number between two values using ternary operator.
// let a = 10;
// let b = 20;
// let result = a>=b ? a : b;
// console.log(result);



                                            // Mixed Practice Questions \\


// ---> Create a mini biodata program using variables and template literals.    
// let name = "Kunal Raikwar";
// let age = 20;
// let city = "Lucknow";
// let education = "BCA"
// let profession = "Web Developer"

// let biodata = `
// Name: ${name}
// Age: ${age}
// City: ${city}
// Education: ${education}
// Profession: ${profession}
// `
// console.log(biodata);


// ---> Calculate the area of a rectangle.
// let length = 25;
// let width = 35;
// let area = length * width;
// console.log(area);


// ---> Calculate the simple interest.
// let principal = 10000;
// let rate = 5;
// let time = 2;
// let simpleInterest = (principal * rate * time) / 100;
// console.log(simpleInterest);


// ---> Convert temperature from Celsius to Fahrenheit.
// let celsius = 30;
// let Fahrenheit = (celsius * 9/5) + 32;
// console.log(Fahrenheit);


// ---> Convert kilometers into meters.
// let kilometers = 6;
// let meters = kilometers * 1000;
// console.log(meters);


// ---> Calculate total marks and percentage of 5 subjects.
// let sub1 = 80;
// let sub2 = 60;
// let sub3 = 50;
// let sub4 = 30;
// let sub5 = 40;
// let total = sub1 + sub2 + sub3 + sub4 + sub5;
// let percentage = (total / 500) * 100;
// console.log("Total Marks:", total);
// console.log("Percentage:", percentage + "%");


// --->Calculate electricity bill based on units consumed.
// let units = 150;
// let bill;
// if (units <= 100) {
//     bill = units * 5;
// } else if (units <= 200) {
//     bill = units * 7;
// } else {
//     bill = units * 10;
// }
// console.log("Electricity Bill:", bill);


// ---> Create a username generator using first name and birth year.
// let users = ["Kunal", "Yash", "Rahul", "Priyanshu", "Aditya"];
// let birthYear = 2004;   
// let randomIndex = Math.floor(Math.random() * users.length);
// let username = `${users[randomIndex]}${birthYear}`;
// console.log(username);   


// ---> Check whether a string starts with a specific letter.
// let name = "Kunal";
// let letter = "K"

// if(name[0] === letter){
//     console.log("String start with the letter");
// }else{
//     console.log("Strind does not start with the letter");
// }


// ---> Count the total characters in a sentence excluding spaces.
// let sentence = 'I Love JavaScript';
// let result = sentence.replaceAll("", "").length;
// console.log(result);



                                            // Logical Thinking Questions \\

// ---> Take two numbers and print which one is greater.
// let a = 32;
// let b = 20;
//  if(a>=b){
//     console.log("A is greater")
// }else{
//     console.log("B is greater")
// }


// ---> Check whether a number lies between 10 and 50.
// let num = 25;
// if ( num>=10 && num<=50) {
//     console.log("Number is between 10 and 50");
// } else {
//     console.log("Number is not between 10 and 50");
// }


// ---> Check whether a password length is greater than 8.
// let password = "admin"
// if(password.length >= 8){
//     console.log("Password is greater than 8")
// }else{
//     console.log("Password is not greater than 8")
// }


// ---> Check if a person can drive: age > 18 has license = true
// let age = 15;
// if(age>=18){
//     console.log("You can drive");
// }else{
//     console.log("You can not drive")
// }


// ---> Check whether a number is divisible by 2, 3, or both.
// let num = 6;
// if(num % 2 === 0 && num % 3 ===0){
//     console.log("Divided by both")
// }else{
//     console.log("Not Divided")
// }


// ---> Print "Good Morning" , "Good Afternoon" , or "Good Evening" based on time.
// let time = 11;
// if(time <= 12) {
//     console.log("Good Morning");
// } else if (time <= 18) {
//     console.log("Good Afternoon");
// }else{
//     console.log("Good Evening");
// }


// ---> Find whether a number is a multiple of 10.
// let val = 20
// if (val % 10 === 0) {
//     console.log("Multiple of 10");
// } else {
//     console.log("Not a multiple of 10");
// }


// ---> Create a simple discount calculator.
// let price = 1000;
// let discount = 20;
// let finalPrice = price - (price * discount / 100);
// console.log(finalPrice);


// ---> Check whether a product is in stock.
// let stock = 10;
// if (stock > 0) {
//     console.log("Product is in stock");
// } else {
//     console.log("Product is out of stock");
// }


// ---> Calculate final bill after GST.
// let bill = 1000;
// let gst = 18;
// let finalBill = bill + (bill * gst / 100);
// console.log(finalBill);



                                          // Challenge Questions for Beginners \\

// ---> Generate a random OTP of 4 digits.
// console.log(Math.floor(Math.random() * 9000) + 1000);


// ---> Reverse a 3-letter string manually.
// let name = "abc"
// console.log(name[2] + name[1] + name[0]);


// ---> Find the last character of a string.
// let val = "Jadughar";
// console.log(val[val.length - 1]);


// ---> Convert a full name into uppercase initials.
// let fullName = "Kunal Raikwar";
// let initials = fullName[0] + fullName[6];
// console.log(initials.toUpperCase());


// ---> Check whether two strings are equal ignoring case sensitivity.
// let str1 = "KUNAL";
// let str2 = "kunal";
// if (str1.toLowerCase() === str2.toLowerCase()) {
//     console.log("Both strings are equal");
// } else {
//     console.log("Strings are not equal");
// }


// ---> Create a simple login validation system.
// let username = "admin";
// let password = "1234";
// if (username === "admin" && password === "1234") {
//     console.log("Login successful");
// } else {
//     console.log("Invalid username or password");
// }


// ---> Find whether a number is a 2-digit or 3-digit number.
// let num = 250;
// if (num >= 10 && num <= 99) {
//     console.log("2-digit number");
// } else if (num >= 100 && num <= 999) {
//     console.log("3-digit number");
// } else {
//     console.log("Neither 2-digit nor 3-digit");
// }


// ---> Create a mini ATM balance checker.
// let balance = 5000;
// let withdraw = 2000;
// if (withdraw <= balance) {
//     balance = balance - withdraw;
//     console.log("Withdrawal successful");
//     console.log("Remaining Balance:", balance);
// } else {
//     console.log("Insufficient balance");
// }


// ---> Simulate a traffic light system using switch .
// let light = "red";
// switch (light) {
//     case "red":
//         console.log("Stop");
//         break;
//     case "yellow":
//         console.log("Get Ready");
//         break;
//     case "green":
//         console.log("Go");
//         break;
//     default:
//         console.log("Invalid traffic light");
// }


// ---> Build a small marksheet generator using variables and conditionals.
// let maths = 80;
// let english = 75;
// let science = 90;
// let computer = 85;
// let hindi = 70;

// let total = maths + english + science + computer + hindi;
// let percentage = (total / 500) * 100;

// let grade;

// if (percentage >= 90) {
//     grade = "A";
// } else if (percentage >= 75) {
//     grade = "B";
// } else if (percentage >= 50) {
//     grade = "C";
// } else {
//     grade = "Fail";
// }

// console.log("<----- Marksheet ----->");
// console.log("Maths:", maths);
// console.log("English:", english);
// console.log("Science:", science);
// console.log("Computer:", computer);
// console.log("Hindi:", hindi);
// console.log("Total:", total);
// console.log("Percentage:", percentage + "%");
// console.log("Grade:", grade);

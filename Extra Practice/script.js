                                                    // Section A: Basics \\

                                                    
// ---> 1. Declare a variable name with your name and a variable age with your age. Print: name is ___ and I am ___ years old. using a template literal.
// let name = "Kunal";
// let age = 25;
// console.log(`Name is ${name} and I am ${age} years old`);


// ---> 2. Declare a = 10 and b = 3. Print the sum, difference, product, quotient and remainder (%) of a and b.
// let a = 10;
// let b = 3;

// console.log(a+b);
// console.log(a-b);
// console.log(a * b);
// console.log(a%b);
// console.log(a/b);


// ---> 3. Swap the values of two variables x = 5 and My y = 8 using a third variable. Print both before and after.
// let x = 5;
// let y = 8;
// console.log("Before swapping:", x, y);

// let temp = x;
// x = y;
// y = temp;
// console.log("After swapping:", x, y);


// ---> 4. Convert a temperature from Celsius to Fahrenheit. Store celsius = 37 and use the formula F = (C * 9/5) + 32.
// let celsius = 37;
// let formula = F = (celsius * 9/5) + 32;
// console.log(formula);


// ---> 5. Calculate the area and perimeter of a rectangle with length = 12 and width = 7 Print both results with labels.
// let length = 12;
// let width = 7;
// let area = length * width;
// let rectangle =  2 * (length + width);
// console.log("Area is:", area );
// console.log("Rectangle is:", rectangle );



                                                  //   Section B: Conditions \\ 


// ---> 6. Check whether a number is positive, negative or zero using if / else if / else. Test with 5, -3 and 0.
// let num = 0;
// if(num > 0){
//     console.log("Positive");
// }else if (num < 0){
//     console.log("Negative");
// }else{
//     console.log("Zero");
// }


// ---> 7. Check whether a number is even or odd using the % operator.
// let num = 5;
// if(num % 2 === 0){
//     console.log("Even");
// }else{
//     console.log("Odd");   
// }


// ---> 8. Given three numbers a, b, c, find and print the largest one using if statements and && .
// let a = 10;
// let b = 20;
// let c = 30;

// if(a>b && a>c){
//     console.log("A is Largest");
// }else if(b>a && b>c){
//     console.log("B is Largest");
// }else{
//     console.log("C is Largest");
// }


// ---> 9. Given marks out of 100, print the grade: 90 and above is A, 75-89 is B, 50-74 is C, below 50 is Fail .
// let marks = 49;
// if (marks>=90) {
//     console.log("A");
// }else if(marks>=75){
//     console.log("B");
// }else if(marks>=50){
//     console.log("C")
// }else{
//     console.log("Fail")
// }


// --->  10. Store a number from 1 to 7 in day and print the day name (1 = Monday) using a switch statement. Print Invalid day for anything else.
// let number = 4;
// switch (number) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid Number");
// }



                                                   // Section C: For loops \\

              
// ---> 11. Print the numbers from 1 to 10 using a for loop.
// for(let i = 1; i<=10; i++){
//     console.log(i);
// }


// ---> 12. Print the numbers from 10 down to 1 using a for loop.
// for (let i = 10; i>=1; i--) {
//     console.log(i);
// }


// ---> 13. Print all even numbers from 1 to 50.
// for(let i = 1; i<=50; i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }


// ---> 14. Print the multiplication table of a given number n (for example 5 * 1 = 5 up to 5 * 10 = 50).
// let n = 5;
// for(let i = 1; i<=10; i++){
//     console.log(`${n} * ${i} = ${n*i}`)
// }


// ---> 15. Find the sum of all numbers from 1 to n . For n = 100 the answer is 5050.
// let n = 100;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//     sum += i;
// }
// console.log(sum);


// ---> 16. Find the sum of only the odd numbers between 1 and 100.
// let sum = 0;
// for(let i = 1; i<=100; i++){
//     if(i%2!==0){
//         sum+=i;
//     }
// }
// console.log(sum);


// ---> 17. Print the square of each number from 1 to 10 (for example 3 x 3 = 9).
// for(let i = 1; i<=10; i++){
//     console.log(`${i} * ${i} = ${i*i}`)
// }


// ---> 18. Print all numbers between 1 and 100 that are divisible by both 3 and 5
// for(let i = 1; i<=100; i++){
//     if(i%3===0 && i%5===0){
//         console.log(i);
//     }
// }


// ---> 19. Count how many numbers between 1 and 100 are divisible by 7, and print the count.
// let count = 0;
// for(let i = 1; i<=100; i++){
//     if(i%7===0){
//         count++;
//     }
// }
// console.log(count)


// ---> 20. Check whether a given number is prime (only divisible by 1 and itself) using a for loop. Test with 7, 10 and 13.
// let n = 7;
// let isPrime = true;

// if (n <= 1) {
//     isPrime = false;
// } else {
//     for (let i = 2; i<n; i++) {
//         if (n % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
// }

// if (isPrime) {
//     console.log(n + " is a Prime Number");
// } else {
//     console.log(n + " is not a Prime Number");
// }
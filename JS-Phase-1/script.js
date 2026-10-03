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
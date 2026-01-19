// (beginner-level)practice questions
// Basics & Variables (1–6)
//1- Declare a variable to store your name and print it in the console.
const stdName = "Softneer";
console.log(stdName);
//2- Write a program to add two numbers and display the result.
let a= 34;
let b= 43;
console.log(a+b); 
//3- Check whether a number is even or odd.
let num = 22;
if(num%2===0){console.log("The number is even:",num);}
else{
    console.log("The number is odd:",num);
}
//4- Convert a string to a number and print its type.
let strNum= "23";
let converted = Number(strNum);
console.log(typeof converted);
//5- Store a value in a variable and check its data type using typeof.
let value = true;
console.log(typeof value);
//6- Swap two numbers using a temporary variable.
let num1 = 5;
let num2 = 10;
let temp = num1;
num1 = num2;
num2 = temp;
console.log(num1, num2);
// 🔹 Conditions & Loops (7–12)
//7- Write a program to check if a person is eligible to vote.
const age = 19;
if(age>=18){
    console.log("Eligible to vote");
} else{
    console.log("Not eligible to vote.");
}
//8- Print numbers from 1 to 10 using a for loop.
for(let i=1; i<=10; i++)
    console.log(i);
//9- Print all even numbers between 1 and 20.
for(let i =1; i<=20; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}
//10- Write a program to find the largest of two numbers.
let x = 12;
let y = 13;
if(x > y){console.log(x);}else{console,log(y);}
// using ternary operator
console.log(x>y? x: y);
//11- Print the multiplication table of a given number.
let tableNum = 2;
for(let i =1; i<=10; i++){
    console.log(`${tableNum}* ${i} = ${tableNum * i}`);
}
//12- Count how many times a character appears in a string.
let str = "I am learning JavaScript";
let char = "a";
let count = str.split(char),length - 1;
console.log(count);
// 🔹 Functions (13–17)
//13- Write a function that prints “Hello, World!”.
function helloWorld(){
    console.log("Hello, World!");
}
helloWorld();
//14- Create a function that takes two numbers and returns their sum.
function sum(n1, n2){
    return n1+n2;
}
console.log(sum(4,5));
//15- Write a function to check if a number is positive, negative, or zero.
function checkNum(number){
    if (number>0) return "Positive";
    else if(number<0) return "negative";
    else return "Zero";
}
console.log(checkNum(8));
//16- Write a function that converts Celsius to Fahrenheit.
function celsiusToFahrenheit(c){
    return(c * 9 / 5) +32;
}
console.log(celsiusToFahrenheit(15));
//17- Create a function that returns the square of a number.
function square(z){
    return z*z;
}
console.log(square(4));
// 🔹 Arrays (18–22)
//18- Create an array of 5 numbers and print it.
let arr = [1,2,3,4,5];
console.log(arr);
//19- Find the length of an array.
console.log(arr.length);
//20- Add a new element to the end of an array.
arr.push(6);
console.log(arr);
//21- Remove the last element from an array.
arr.pop();
console.log(arr);
//22- Find the largest number in an array.
let numArr = [32, 43, 86, 87, 65, 97];
let largest = Math.max(...numArr);
console.log(largest);

// (Medium-level) Practice questions
// Variables, Conditions & Logic

//1- Check if a number is a prime number.

//2- Reverse a number (e.g., 123 → 321).

//3- Find the factorial of a number.

//4- Check if a string is a palindrome.

//5- Find the sum of digits of a number.

//6- Find the largest of three numbers.

//7- Check whether a year is a leap year.

//8- Count the number of vowels in a string.

//9- Remove duplicate characters from a string.

//10- Find the second largest number in an array.

// 🔹 Loops & Functions

//11- Write a function to generate the Fibonacci series up to n terms.

//12- Create a function to check whether a number is an Armstrong number.

//13- Write a function that returns the GCD (HCF) of two numbers.

//14- Write a function to find the LCM of two numbers.

//15- Write a function to capitalize the first letter of each word in a sentence.

// 🔹 Arrays

//16- Find the sum and average of array elements.

//17- Remove duplicate elements from an array.

//18- Sort an array without using sort().

//19- Find the intersection of two arrays.

//20- Rotate an array to the right by k positions.

//21- Count how many times each element appears in an array.

//22- Move all zeroes to the end of an array.

//23- Find the missing number in an array from 1 to n.

// 🔹 Strings

//24- Find the most frequent character in a string.

//25- Check if two strings are anagrams.

//26- Count the number of words in a sentence.

//27- Reverse each word in a string.

//28- Find the longest word in a sentence.

// 🔹 Objects & ES6

//29- Create an object for a student and find the total and average marks.

//30- Write a function using ES6 arrow syntax that filters even numbers from an array.
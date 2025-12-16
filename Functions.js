// 1. Write a js program to find maximum and minimum between two numbers using functions.


function findMaxMin(x,y){
    if(x>y){
        console.log("Maximum:",x);
        console.log("Minimum:",y);
    }else{
        console.log("Maximum:",y);
        console.log("Minimum:",x);
    }
}
findMaxMin(23,76);


// 2. Write a js program to check whether a number is even or odd using functions.


function checkEvenOdd(num){
    if(num%2 === 0) {
        console.log(num + " is Even.");
    }else{
        console.log(num + " is Odd.");
    }
}
checkEvenOdd(4065);


// 3. Write a js program that takes a number as a parameter and print there table.


function printTable(num){
    for(let i = 1; i<= 10; i++){
        console.log(num + "*" + i + " = " +(num*i));
    }
}

printTable(4);


// 4. Write a js program to find reverse of any number using function.


function reverseNumber(num) {
    let rev = num.toString().split("").reverse().join("");
    console.log("Reverse: ", rev);
}
reverseNumber(4321);


// 5. Write a js program to find sum of all even or odd numbers in given range using function.

function sumEvenOdd(start , end, type) {
    let sum = 0;

    for(let i= start; i<= end; i++){
       if(type === "even" && i%2 === 0){
        sum += i;
       }else if(type === "odd" && i%2 !== 0){
        sum += i;
       }
        
    } 
    console.log("Sum of ", type, "numbers:", sum);
} 

sumEvenOdd(2 , 5, "odd"); 

// ANother method for qs 5

function sumEven(start, end) {
    let sum = 0;

    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }

    console.log("Sum of even numbers:", sum);
}


sumEven(1, 10);


function sumOdd(start, end) {
    let sum = 0;

    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }

    console.log("Sum of odd numbers:", sum);
}


sumOdd(1, 10);


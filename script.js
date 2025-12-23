//Loop exrecise



//Qs.1--Write a js program to print all natural numbers from 1 to n. - using while loop

let i= 1;
let n= 65

while( i<= n){
  console.log(i);
  i++;
}

//Qs.2--Write a js program to find sum of all natural numbers between 1 to n.

let i = 1;
let sum = 0;
let n = 10;

while(i <= n){
  sum += i;
  i++;
}

console.log("Sum of natural numbers from 1 to ",n ,"is", sum);


//Qs.3--Write a js program to print all natural numbers in reverse (from n to 1). - using while loop

let n = 21;
let i = 1;
while (n >= i) {
  console.log(n);
    n--;
}

//Qs.4--Write a js program to find maximum between two numbers.

let num1= 45;
let num2= 46;

if( num1 > num2){
    console.log(num1,"is greater than", num2);
}
else{
    console.log( num2, "is greater than", num1);
}

 //Qs.5--Write a js program to check whether a character is uppercase or lowercase alphabet.

 let char= 'D';
 if( char >= 'A' && char <='Z' ){
  console.log(char , "is an uppercase letter ");
 }
 else if( char >= 'a' && char <='z' ){
  console.log(char , "is a lowercase letter ");
 }
 else{
  console.log(char , "is not a letter ");
 }

 /* Qs.6--Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
Basic Salary <= 10000 : HRA = 20%, DA = 80%
Basic Salary <= 20000 : HRA = 25%, DA = 90%
Basic Salary > 20000 : HRA = 30%, DA = 95%*/

let basicSalary = 20500;
let hra, da;

if (basicSalary <= 10000) {
    hra = (20 / 100) * basicSalary;
    da = (80 / 100) * basicSalary;
  } else if (basicSalary <= 20000) {
    hra = (25 / 100) * basicSalary;
    da = (90 / 100) * basicSalary;
  } else {
    hra = (30 / 100) * basicSalary;
    da = (95 / 100) * basicSalary;
  }

  let grossSalary = basicSalary + hra + da;
 
console.log("Gross Salary: ", grossSalary);
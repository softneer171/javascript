//Write a js program to find sum of all natural numbers between 1 to n.

let i = 1;
let sum = 0;
let n = 10;

while(i <= n){
  sum += i;
  i++;
}

console.log("Sum of natural numbers from 1 to ",n ,"is", sum);
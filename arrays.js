// 1. Write a js program to read and print elements of array.

let arrSubjects=[ "Computer", "English","Math","Urdu", "Biology"];
for(let subjects of arrSubjects)
{
    console.log(subjects);

}


// 2. Write a js program to print all negative elements in an array.

let arr=[ 1, 2,-5, -8, 4 ,-9, 0, -6];
let  arrNegative= arr.filter((val)=>{
    return val<0
});
console.log(arrNegative);


// 3. Write a js program to find sum of all array elements.

function sumArrayElements(arr) {
  
  const sum = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0); 

  return sum;
}

const numbers = [10, 20, 30, 40, 50];
const totalSum = sumArrayElements(numbers);
console.log(`The array is: [${numbers}]`);
console.log(`The sum of all elements is: ${totalSum}`); 


// 4. Write a js program to find second largest element in an array.

function findSecondLargest(arr) {
   const uniqueArr = [...new Set(arr)];
   uniqueArr.sort((a, b) => b - a);
  if (uniqueArr.length >= 2) {
    return uniqueArr[1];
  } else {
    return "Second largest element not found (array has less than two unique elements).";
  }
}

const data = [12, 35, 1, 10, 34, 1, 35];
const secondLargest = findSecondLargest(data);
console.log(`The array is: [${data}]`);
console.log(`The second largest element is: ${secondLargest}`); 


// 5. Write a js program to copy all elements from an array to another array.

function copyArrayElements() {
  const sourceArray = [1, 2, 3, 4, 5];
  let destinationArrayLoop = [];

 
  for (let i = 0; i < sourceArray.length; i++) {
    destinationArrayLoop.push(sourceArray[i]);
  }
  console.log(`Source array: ${sourceArray}`);
  console.log(`Copied array (Loop): ${destinationArrayLoop}`);
}

copyArrayElements();


// 6. Write a js program to print all unique elements in the array.

function printUniqueElements(arr) {
    const uniqueElementsSet = new Set(arr);
  
  console.log(`The original array is: [${arr}]`);
  console.log("The unique elements are:");
  
  for (const element of uniqueElementsSet) {
    console.log(element);
  }
}

const items = [1, 2, 2, 3, 4, 4, 5, 'a', 'b', 'a'];
printUniqueElements(items);


// 7. Write a js program to delete all duplicate elements from an array.

function deleteDuplicateElements(arr) {
   const uniqueSet = new Set(arr);
  
  const uniqueArray = [...uniqueSet];
  
  return uniqueArray;
}

const shoppingList = ['apple', 'banana', 'orange', 'apple', 'milk', 'banana'];
const uniqueShoppingList = deleteDuplicateElements(shoppingList);
console.log(`Original array: ${shoppingList}`);
console.log(`Array without duplicates: ${uniqueShoppingList}`);

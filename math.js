
// Math Object

// 1. Write a program to find the square root of 64 using the Math object.

const number = 64;
const squareRoot = Math.sqrt(number);
console.log(`The square root of ${number} is: ${squareRoot}`);


// 2. Write a program that prints the value of PI using the Math object.

const piValue = Math.PI;
console.log(`The value of PI is: ${piValue}`);


// 3. Find the absolute value of -25.


const negativeNumber = -25;
const absoluteValue = Math.abs(negativeNumber);
console.log(`The absolute value of ${negativeNumber} is: ${absoluteValue}`);



// 4. Generate a random number between 1 and 10.

// Math.random() generates a number between 0 (inclusive) and 1 (exclusive).
// We scale it to 1-10 and use Math.floor() to get an integer.
const min = 1;
const max = 10;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`A random number between ${min} and ${max} is: ${randomNumber}`);

// 5. Write a function that takes a decimal number and returns:
// - Rounded value
// - Floor value
// - Ceil value

function getRoundedValues(decimalNumber) {
  const rounded = Math.round(decimalNumber); // Rounds to the nearest integer
  const floor = Math.floor(decimalNumber);   // Rounds down
  const ceil = Math.ceil(decimalNumber);     // Rounds up

  return {
    original: decimalNumber,
    roundedValue: rounded,
    floorValue: floor,
    ceilValue: ceil
  };
}

const numberToProcess = 5.75;
const results = getRoundedValues(numberToProcess);
console.log(results);

// 6. Write a program to generate a random OTP of 4 digits.

function generateFourDigitOTP() {

  const min = 1000;
  const max = 9999;
  const otp = Math.floor(Math.random() * (max - min + 1)) + min;

}

const otp = generateFourDigitOTP();
console.log(`Generated 4-digit OTP: ${otp}`);


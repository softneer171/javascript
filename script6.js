/* Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
Basic Salary <= 10000 : HRA = 20%, DA = 80%
Basic Salary <= 20000 : HRA = 25%, DA = 90%
Basic Salary > 20000 : HRA = 30%, DA = 95%*/

let basicSalary = 20500;
// let hra;
// let da;


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
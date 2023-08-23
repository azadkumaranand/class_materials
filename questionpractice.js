//Assignment 1 solutions
// Q1.
for (let i = 1; i <= 10; i++) {
  // console.log(i)
}

//Q2.

let arr1 = [
  2, 5, 7, 8, 8, 5, 9, 7, 5, 75, 2, 8, 444, 48, 445, 8784, 5145, 4784, 544,
];

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] % 2 === 0) {
    document.write("   ", arr1[i], "   ");
  }
}

//Q3.
function powerOnNumber(a, b) {
  let multiply = 1;
  for (let i = 0; i < b; i++) {
    // multiply = multiply * a;
    multiply *= a;
  }
  return multiply;
}
// let multiply = 1;
//     for(let i=0; i<3; i++){
//         // multiply = multiply * a;
//         multiply *= 6;
//     }
//     console.log(multiply);

const power = powerOnNumber(8, 4);
console.log(power);

// while loop
let a = 0;
while (a < 10) {
  document.write("Azad");
  a++;
}

//Q4.
// 544
function countDiging(a) {
  let num = a;
  let count = 0;
  let sum = 0;
  while (a > 0) {
    // let reminder = a%10;
    // console.log(reminder)
    // a= a/10;
    a = parseInt(a / 10);
    // let reminder = a%10;
    // sum = sum + reminder;
    count++;
  }
  return count;
}
console.log(countDiging(544568897));
// console.log(parseInt(5555.4%10));.

// Q5
function SumOfDigit(a) {
  let sum = 0;
  while (a > 0) {
    let reminder = a % 10;
    sum = sum + reminder;
    a = parseInt(a / 10);
  }
  return sum;
}

console.log(SumOfDigit(5234));

//Q6.
let array1 = [45, 546, 87, 84, 578, 454, 77, 4, 74, 11, 41];
let maxNum = -520;
for(let i = 0; i< array1.length; i++){
    if(array1[i]>maxNum){
        maxNum = array1[i];
    }
}
console.log(maxNum)
//find the factorials of a number
// eg find factorial of 8
// find the factorial of 100
const factorial = 1*2*3*4*5*6*7*8;
console.log(factorial);

let factorial1 = 1;

for(let i=1; i<=20; i++){
    factorial1 = factorial1*i;
}
console.log(factorial1);

//find prime numbers between two numbers;

//find prime numbers between 1 to 100;

// for(let i=1; i<=100; i++){
//     for(let j=2; j<i; j++){
//         if(i%j==0){
//             // continue;
//             console.log("not a prime number")
//         }else{
//             console.log(i);
//         }
//     }
// }
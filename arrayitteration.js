let arr1 = [5, 6, 7, 8, 9, 52, 48, 47];

// arr1 = arr1
//find average of this array elements

let sum =
  arr1[0] + arr1[1] + arr1[2] + arr1[3] + arr1[4] + arr1[5] + arr1[6] + arr1[7];
console.log(sum);

let lengthOfArray = arr1.length;
console.log(lengthOfArray);
// slice(7, 9)
const avg = sum / lengthOfArray;
console.log(avg);

//itteration in array

let str = "Gulshan";
let str1 = 9
let str2 = 10;
console.log(str1 + str2 + str);
console.log(str + str1 + str2);

let arr2 = [
  5, 6, 7, 8, 9, 52, 48, 47, 74, "Azad", 8, 5, 71, 584, 84, 84, 484, 84, 458, 48,
  484, 88, 484, 48, 4,
];

console.log(arr2.length);
let sum1 = 0;
for (let k = 0; k < arr2.length; k++) {
  // console.log(k);
  // console.log(arr2[k])
  sum1 = sum1 + arr2[k];
  // sum1 = 0 + 5 --> first loop opearate like this
}
console.log(sum1);

//break and continue

//break;
for (let k = 0; k < arr2.length; k++) {
    
    // if(arr2[k]=="Azad"){
    //     break;
    // }
    console.log(k)
    if (typeof(arr2[k])=="string") {
        break;
    }
    
}
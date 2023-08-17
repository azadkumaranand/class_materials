let arr1 = [1, 2,3,4,5];
let arr2 = [6,7,8,9,10];
let arr3 = [11,12,13,14,15];

//concat method is used for adding mutiple array in one
let addarry = arr3.concat(arr2, arr1);
console.log(addarry);

let arr4 = arr3.concat(16);
console.log(arr4);

//splice method is used to add new items to desired position in an array
// splice(postion_to_add, how_much_element_to_delete, elements)
arr3.splice(2, 0, 100, 200, 400, 500);
console.log(arr3)

//slice method is used for extracting elements from array and returning that extracting element as an array
let arr5 = arr2.slice(1, 4)
console.log(arr5)